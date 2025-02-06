import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import MapView from '@arcgis/core/views/MapView';
import Polygon from '@arcgis/core/geometry/Polygon';
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import TileLayer from '@arcgis/core/layers/TileLayer';
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import { CustomLegendComponent } from './custom-legend/custom-legend.component';
import { DeforestationComponent } from './deforestation/deforestation.component';
import { GEarthService } from './g-earth.service';
import { MapTabComponent } from '../map-tab/map-tab.component';
import { environment } from 'src/environments/environment';
import { ILayers, IMapData, IPoint } from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-g-earth',
  standalone: true,
  templateUrl: './g-earth.component.html',
  styleUrls: ['./g-earth.component.scss'],
  imports: [
    MatCheckboxModule,
    FormsModule,
    NgFor,
    MatIconModule,
    NgIf,
    CustomLegendComponent,
    TitleCasePipe,
    DeforestationComponent,
    NgClass,
    MapTabComponent,
  ],
})
export class GEarthComponent implements OnInit, OnDestroy {
  @ViewChild('mapViewNode', { static: true }) mapViewEl!: ElementRef;
  private destroy$ = new Subject<void>();
  private readonly dashboardService = inject(DashboardService);
  private readonly gEarthService = inject(GEarthService);

  @Input() mapData: IMapData;
  // @Input() farmerGroupsData: any;
  // @Input() mapUrl: any;
  // plotData: any;
  // polygons: any[];
  view: any = null;
  point: IPoint = [];
  layers: any;
  selectedTab: string;
  livingIncomeLayers: ILayers;

  activeToggleItem: string;

  private unitSub: Subscription;
  unit: number;
  legendData: any;

  private activePopups: { point: Point; popupElement: HTMLElement }[] = [];
  selectedFilters: any;
  legendItem: any;

  ngOnInit(): void {
    // if(this.mapData.location.length>0){
    this.point = this.mapData?.location[0]?.coordinate || '';
    this.livingIncomeLayers = this.mapData?.layers || undefined;
    if (this.livingIncomeLayers) {
      this.livingIncomeLayers.forEach((layer: any) => {
        if (layer.turn_on === 'True') {
          this.activeToggleItem = layer.id || undefined;
        }
      });
    }
    if (this.mapData?.legend) {
      const { legend } = this.mapData;
      this.legendData = legend;
      this.legendItem = legend.lip;
    } else {
      this.legendData = null;
      this.legendItem = null;
    }
    this.subscribeToSelectedTab();
    this.setMapConfig();
  }

  subscribeToDashboardFilters(): void {
    this.dashboardService
      .selectedFilters$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.selectedFilters = data;
      });
  }

  ngOnChanges(simple: SimpleChanges): void {
    // const { plotData } = simple;
    // if (plotData?.currentValue) {
    //   this.point = plotData.currentValue.point;
    //   this.polygons = plotData.currentValue.polygons;
    //   this.initializeMap().then(() => {
    //   });
    // }
  }
  /*istanbul ignore next */
  updatePoints(layer: string): void {
    if (!this.mapData?.location.length) {
      return;
    }

    const graphics: Graphic[] = []; // Collect all point graphics for batch addition

    this.mapData?.location.forEach((location: any) => {
      const coordinates = location.coordinate;
      let value = 0;
      let color = '';
      if (this.selectedTab === 'Living income') {
        if (layer === '1') {
          value = location.lip.value;
          color = location.lip.color;
        } else if (layer === '2') {
          value = location.prod_cost.value;
          color = location.prod_cost.color;
        } else if (layer === '3') {
          value = location.production.value;
          color = location.production.color;
        }
      } else if (this.selectedTab === 'Emissions') {
        if (layer === '1') {
          value = location.cru.value;
          color = location.cru.color;
        }
      }

      if (coordinates.length > 2) {
        // Create a polygon if there are multiple coordinates
        const polygonCoordinates = coordinates.map((dot: any) => [
          dot[0],
          dot[1],
        ]);
        this.drawPolygon(polygonCoordinates, location?.id, value, color);
      } else {
        // Collect points for single coordinate pairs
        coordinates.forEach((dot: any) => {
          const label = location?.id;
          const pointGraphic = this.createPointGraphic(
            dot,
            color,
            label,
            value
          );
          graphics.push(pointGraphic); // Push each point graphic to array
        });
      }
    });

    // Batch adding all point graphics at once
    this.view.graphics.addMany(graphics);
  }

  createPointGraphic(
    dot: any[],
    labelColor: string,
    label?: string,
    price?: any
  ): Graphic {
    const point = new Point({
      longitude: dot[1], // Swap the order here
      latitude: dot[0],
    });

    // Determine color based on price
    let colorN = [50, 85, 110]; // Default color
    if (this.selectedTab === 'Living income' && price !== undefined) {
      colorN = this.gEarthService.hexToRgb(labelColor);
    }

    // Define marker symbol
    const simpleMarkerSymbol = {
      type: 'simple-marker',
      color: colorN,
      outline: {
        color: [255, 255, 255], // White outline
        width: 1,
      },
    };

    // Create the point graphic with attributes to store data needed for popup
    let color = labelColor;
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
      attributes: {
        point, // Store the point geometry
        label, // Label for the popup
        price, // Price data for the popup
        color, // Color for the popup
      },
    });

    return pointGraphic;
  }

  initializePointerMoveHandler(): void {
    this.view.on('pointer-move', (event: any) => {
      this.view.hitTest(event).then((response: any) => {
        // Clear all existing popups first
        if (response.results.length === 0) {
          this.clearAllPopups(); // Clears all popups without affecting the points
        } else {
          const graphic = response.results[0]?.graphic;
          if (graphic) {
            const { point, label, price, color } = graphic.attributes;

            // Optionally check if the current point is already the same as the last popup shown
            if (!this.isPopupVisibleAt(point)) {
              this.clearAllPopups(); // Clear existing popups only if the point is different
              this.showCustomPopup(point, label, price, color); // Show popup for the current point
            }
          }
        }
      });
    });
  }

  // Check if a popup is currently visible at a specific point
  isPopupVisibleAt(point: Point): boolean {
    return this.activePopups.some((popup) => popup.point.equals(point));
  }

  // Method to clear all popups
  clearAllPopups(): void {
    // Logic to remove or hide popups
    this.activePopups.forEach((popup) => {
      const popupElement = popup.popupElement;
      if (popupElement && this.mapViewEl.nativeElement.contains(popupElement)) {
        this.mapViewEl.nativeElement.removeChild(popupElement);
      }
    });
    this.activePopups = []; // Reset the active popups array
  }

  setMapConfig(): void {
    esriConfig.apiKey = environment.esriConfig_apiKey;
  }

  drawPolygon(
    coordinates: number[][],
    label: string,
    price: any,
    color: string
  ): void {
    const polygon = new Polygon({
      rings: [coordinates],
      spatialReference: { wkid: 4326 },
    });

    let fillColor = [226, 119, 40]; // default fill color with transparency
    let lineColor = [226, 119, 40]; // default outline color

    if (this.selectedTab === 'Living income' && price !== undefined) {
      // const hexColor = this.gEarthService.getColorForPrice(price);
      const hexColor = color;
      fillColor = [...this.gEarthService.hexToRgb(hexColor), 0.5]; // Convert hex to RGB and add transparency for fill
      lineColor = this.gEarthService.hexToRgb(hexColor); // Use same color for outline
    }

    // Define a symbol with both fill and outline for the polygon
    const polygonSymbol = {
      type: 'simple-fill',
      color: fillColor, // Fill color with transparency
      outline: {
        color: lineColor, // Outline color
        width: 2,
      },
    };

    // Create a graphic for the polygon with the defined symbol
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: polygonSymbol,
    });

    // Add the graphic to the map
    this.view.graphics.add(polygonGraphic);

    // Optionally show a popup for the polygon
    if (this.activeToggleItem !== '0' && label && price) {
      let centerPoint: any;
      this.view.on('pointer-move', (event: any) => {
        this.view.hitTest(event).then((response: any) => {
          // Check if the hit test result contains the polygon graphic
          const graphic = response.results.find(
            (result: any) => result.graphic === polygonGraphic
          );
          if (graphic) {
            // Show custom popup when hovered
            centerPoint = polygon.centroid;
            this.showCustomPopup(centerPoint, label, price, color);
          } else {
            // Remove the popup when not hovering over the polygon
            this.removePopup(centerPoint);
          }
        });
      });
    }
  }

  removePopup(point: Point): void {
    // Check if popups are allowed based on the activeToggleItem value
    if (this.activeToggleItem === '0') {
      return; // Do not remove popup if activeToggleItem is 0 (popups are already disabled)
    }

    const activePopupIndex = this.activePopups.findIndex((popup) =>
      popup.point.equals(point)
    );

    if (activePopupIndex !== -1) {
      const popup = this.activePopups[activePopupIndex].popupElement;
      this.mapViewEl.nativeElement.removeChild(popup);
      this.activePopups.splice(activePopupIndex, 1);
    }
  }

  showCustomPopup(
    point: Point | null,
    label: string,
    price: any,
    color: string
  ): void {
    // Check if popups are allowed based on the activeToggleItem value
    if (this.activeToggleItem === '0') {
      return; // Do not show popup if activeToggleItem is 0
    }

    // Ensure point is defined and not null
    if (!point) {
      return;
    }

    // Safely check if the popup point equals the given point
    const existingPopupIndex = this.activePopups.findIndex(
      (popup) => popup.point && popup.point.equals && popup.point.equals(point)
    );

    if (existingPopupIndex !== -1) {
      return; // Popup already exists for this point, don't create a new one.
    }

    const popup = this.gEarthService.createPopupElement(
      label,
      price,
      this.unit,
      color
    );

    this.mapViewEl.nativeElement.appendChild(popup);
    this.activePopups.push({ point, popupElement: popup });

    // Position the popup if point is valid
    this.updatePopupPosition(point, popup);
  }

  updatePopupPosition(point: Point | null, popup: HTMLElement): void {
    if (!point) {
      return;
    }

    // Ensure point has x, y properties before using
    const screenPoint = this.view.toScreen(point);
    if (!screenPoint || screenPoint.x == null || screenPoint.y == null) {
      return;
    }
    const popupElement = popup as HTMLElement;
    const popupWidth = popupElement.offsetWidth;
    // Position the popup
    popup.style.left = `${screenPoint.x - popupWidth / 2}px`;
    popup.style.top = `${screenPoint.y - 40}px`;
  }

  // updatePopupPositions(): void {
  //   this.activePopups.forEach(({ point, popupElement }) => {
  //     this.updatePopupPosition(point, popupElement);
  //   });
  // }

  createLayers(data: any[]): TileLayer[] {
    return data.map(
      (layer) =>
        new TileLayer({
          url: layer.url,
          maxScale: layer.maxScale,
          visible: layer.visible,
        })
    );
  }

  initializeMap(): Promise<any> {
    if (this.view) {
      return Promise.resolve(); // Return if map is already initialized
    }
    const container = this.mapViewEl.nativeElement;

    const myMap = new Map({
      basemap: 'arcgis/topographic',
      layers: this.layers,
    });
    // const center = this.point[0]
    const center = [this.point[0][1], this.point[0][0]];

    this.view = new MapView({
      container,
      map: myMap,
      center: center,
      zoom: 6,
      constraints: {
        minZoom: 3, // Set your desired minimum zoom level
      },
      popup: {
        dockOptions: {
          buttonEnabled: false,
        },
      },
      ui: {
        components: [], // Add or remove components as needed
      },
    });
    // this.updatePoints(this.activeToggleItem)
    return this.view
      .when(() => {
        this.updatePoints(this.activeToggleItem);
        this.initializePointerMoveHandler();
      })
      .catch((error: any) => {
        console.error('Map initialization failed', error);
      });
  }

  toggleLayer(event: any, layerId: string): void {
    if (event.target.checked) {
      this.activeToggleItem = layerId;
    } else {
      this.activeToggleItem = '0';
    }
    if (this.activeToggleItem == '0') {
      this.clearPopups();
    }

    if (this.selectedTab == 'Living income') {
      switch (this.activeToggleItem) {
        case '1':
          this.legendItem = this.legendData.lip;
          break;
        case '2':
          this.legendItem = this.legendData.prod_cost;
          break;
        case '3':
          this.legendItem = this.legendData.production;
          break;
        default:
          this.legendItem = {};
          break;
      }
    } else if (this.selectedTab == 'Emissions') {
      switch (this.activeToggleItem) {
        case '2':
          this.legendItem = this.legendData.cru;
          break;
        default:
          this.legendItem = {};
          break;
      }
    }

    // this.initializeMap()
    this.updatePoints(this.activeToggleItem);
  }

  subscribeToSelectedTab(): void {
    this.dashboardService
      .selectedTab$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onTabSelected.bind(this));
  }

  onTabSelected(data: any): void {
    this.selectedTab = data;
    // let pData = { ...this.plotData };
    this.clearPopups();
    this.initializeMap();
    // if (this.plotData) {
    //    (this.plotData,'ssss');
    //   this.ngOnChanges({ plotData: { currentValue: pData, previousValue: null, firstChange: true, isFirstChange: () => true } });
    // }
  }

  clearPopups(): void {
    this.activePopups.forEach(({ popupElement }) => {
      this.mapViewEl.nativeElement.removeChild(popupElement);
    });
    this.activePopups = [];
  }

  hasProperties(obj: any): boolean {
    return obj && Object.keys(obj).length > 0;
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.container = null; // Properly destroy the map view
    }

    this.destroy$.next();
    this.destroy$.complete();
    if (this.unitSub) {
      this.unitSub.unsubscribe();
    }
  }
}
