import { Component, ElementRef, Input, AfterViewInit, ViewChild, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import WebMap from '@arcgis/core/WebMap';
import BaseTileLayer from '@arcgis/core/layers/BaseTileLayer';
import Legend from '@arcgis/core/widgets/Legend';
import esriRequest from '@arcgis/core/request';
import { Subject, Subscription } from 'rxjs';
import { GEarthService } from '../g-earth.service';
import resources from '../layers/resources';
import { layer_groups } from '../layers/layer-groups';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, NgModel } from '@angular/forms';
import { CustomLayer } from '../custom-layer-config'
import { MatDialog } from '@angular/material/dialog';
import { DensityModalComponent } from '../density-modal/density-modal.component';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import Graphic from '@arcgis/core/Graphic';
import { environment } from 'src/environments/environment';
import { IPlotData } from 'src/app/shared/configs/app.model';


interface LayerGroup {
  groupType?: string;
  order: number;
  label: { [key: string]: string } | {}; // Label can be an empty object or have string properties
  layers: any[]; 
}

// Interface for LayerPanel remains the same
interface LayerPanel {
  [key: string]: LayerGroup;
}

@Component({
  selector: 'app-deforestation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatExpansionModule, MatSliderModule, FormsModule],
  templateUrl: './deforestation.component.html',
  styleUrls: ['./deforestation.component.scss']
})
export class DeforestationComponent implements AfterViewInit, OnInit {
  @Input() mapUrl: string;
  @Input() plotData: IPlotData;
  private destroy$ = new Subject<void>();

  @ViewChild('mapView', { static: true }) private mapViewEl!: ElementRef;
  view!: MapView;
  graphicsLayer!: GraphicsLayer;
  private layers: { [key: string]: BaseTileLayer } = {};

  layerPanel: LayerPanel = resources.layerPanel; // Ensure this matches LayerPanel structure
  layerList: {
    group?: string;
    sublayers?: { url: string; label: string; visible: boolean, id: string, legendConfig: any }[]; groupName: string; label: string; layers: any[]
  }[];
  readonly panelOpenState = signal(false);
  subLayersArray: ({ url: string; label: string; visible: boolean; id: string; } | undefined)[];
  legendVisibility: { [key: string]: boolean } = {};

  yearBtnEnabled = false
  playInterval: any;
  showYearToggle = false
  minYear = 2000;
  maxYear = 2023;
  startYear = this.minYear; // Initialize with min year
  endYear = this.maxYear; // Initialize with max year
  years: number[] = []
  _map: __esri.Map | undefined;

  densityPercentage = 0
  tooltipVisible = { start: false, end: false };
  private densitySub: Subscription;

  constructor(public dialog: MatDialog, private service: GEarthService) {
    this.densitySub = this.service.density$.subscribe((value) => {
      this.densityPercentage = value;
      if (this.showYearToggle) {
        this.updateLayerUrlByDensity(this.densityPercentage)
      }
    });
  }

  ngOnInit(): void {
    this.getLayerPanel()
    this.subLayersArray.forEach((layerObj: any) => {
      this.legendVisibility[layerObj.id] = layerObj.visible;
    });

    // Initial legend display update
    this.updateLegendDisplay();
    this.initializeYears();
  }

  ngAfterViewInit(): void {

    if (this.mapViewEl) {
      this.graphicsLayer = new GraphicsLayer();
      // Define multiple custom layers


      this.layers = {};
      this.subLayersArray.forEach((layerObj: any) => {
        const newLayer = new CustomLayer(layerObj.id, layerObj.url);
        newLayer.visible = layerObj.visible;
        this.layers[layerObj.id] = newLayer;
      });


      // Create the WebMap with multiple layers
      const webMap = new WebMap({
        portalItem: { id: environment.webMap_portalID },
        // basemap: 'arcgis/topographic',
        layers: Object.values(this.layers)
      });
      const center = this.plotData.polygons.length ? this.plotData.polygons[0][0] : this.plotData.point[0];

      this.view = new MapView({
        container: this.mapViewEl.nativeElement,
        map: webMap,
        zoom: 10,
        center: center,
      });
      this._map = webMap;

      // if (this._map) {
      //   this._map.add(this.graphicsLayer);
      //    ('Map  initialized');
      // } else {
      //   console.error('Map not initialized');
      // }

      this.view.on('click', (event) => {
        event.stopPropagation();
      });
    } else {
      console.error('Map view container element not found.');
    }
    this.renderGraphics();
    this.view.when(() => {
       ('map loaded');

      // if (this.plotData.polygons.length) {
      //   this.drawPolygon();
      // }

      // if (this.plotData.point.length) {
      //   this.drawPoints(this.plotData.point);
      // }
    });
    // this.view.when(() => {
    //    ('Map is fully loaded!');
    //   // Take screenshot after the map is ready
    //   this.captureMapScreenshot();
    // });
  }

  renderGraphics(): void {
    const batchSize = 15; // Number of graphics to render in one batch
    const polygonCount = this.plotData.polygons.length;
    const pointCount = this.plotData.point.length;

    let polygonIndex = 0;
    let pointIndex = 0;

    const renderBatch = () => {
      const lineSymbol = new SimpleLineSymbol({
        color: [226, 119, 40],
        width: 2,
      });

      const simpleMarkerSymbol = {
        type: 'simple-marker',
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      };

      let batchProcessed = 0;

      // Render polygons in the batch
      while (polygonIndex < polygonCount && batchProcessed < batchSize) {
        const ring = [...this.plotData.polygons[polygonIndex]];

        // Ensure the ring is closed
        if (
          ring.length > 0 &&
          (ring[0][0] !== ring[ring.length - 1][0] ||
            ring[0][1] !== ring[ring.length - 1][1])
        ) {
          ring.push(ring[0]); // Close the ring by adding the first point at the end
        }

        const polygon = new Polygon({
          rings: [ring],
          spatialReference: { wkid: 4326 },
        });

        this.view.graphics.add(
          new Graphic({
            geometry: polygon,
            symbol: lineSymbol,
          })
        );

        polygonIndex++;
        batchProcessed++;
      }


      // Render points in the batch
      while (pointIndex < pointCount && batchProcessed < batchSize) {
        const dot = this.plotData.point[pointIndex];
        const point = new Point({
          longitude: dot[1],
          latitude: dot[0],
          spatialReference: { wkid: 4326 },
        });

        this.view.graphics.add(
          new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
          })
        );

        pointIndex++;
        batchProcessed++;
      }

      // Continue rendering in the next batch
      if (polygonIndex < polygonCount || pointIndex < pointCount) {
        setTimeout(renderBatch, 50); // Allow the UI to refresh between batches
      }
    };

    renderBatch();
  }

  togglePolygon(event: any): void {
     (this.plotData, 'plot');


    const { checked } = event.target;
    if (checked) {
      this.renderGraphics();
      // if (this.plotData.polygons.length) {
      //   // this.drawPolygon();
      // }
      // if (this.plotData.point.length) {
      //   this.plotData.point.forEach((dot: any) => {
      //     this.drawPoints(this.plotData.point);
      //   });
      // }
    }
    else {
      this.view.graphics.removeAll();
    }
  }

  // drawPoints(points: any[]): void {
  //   const graphics = points.map((dot) => {
  //     const point = new Point({
  //       longitude: dot[1],
  //       latitude: dot[0],
  //     });

  //     const simpleMarkerSymbol = {
  //       type: 'simple-marker',
  //       color: [226, 119, 40],
  //       outline: {
  //         color: [255, 255, 255],
  //         width: 1,
  //       },
  //     };

  //     return new Graphic({
  //       geometry: point,
  //       symbol: simpleMarkerSymbol,
  //     });
  //   });

  //   this.view.graphics.addMany(graphics);
  // }

  getLayerPanel(): void {
    this.layerList = Object.keys(this.layerPanel).map((groupKey: string) => {
      const group = this.layerPanel[groupKey];
      const labelEn = (group.label as { [key: string]: string; })?.['en'] || 'No Label';
      return {
        groupName: groupKey,
        label: labelEn,
        layers: group.layers,
      };
    });

    this.layerList.forEach(layer => {
      if (!layer.sublayers) {
        layer.sublayers = [];
      }

      const matchingLayerGroups = layer_groups.filter(group => group.layerGroupId === layer.groupName);

      matchingLayerGroups.forEach(matchingLayerGroup => {
        if (layer.sublayers) {
          layer.sublayers.push({
            url: matchingLayerGroup.layer.url,
            label: matchingLayerGroup.layer.label.en,
            visible: false,
            id: matchingLayerGroup.dataLayer.id,
            legendConfig: matchingLayerGroup.layer.metadata.legendConfig
          });
        }
      });
    });


    this.subLayersArray = this.layerList.flatMap(group => group.sublayers);

    this.layerList = this.layerList.filter((item: any) => item.groupName == 'GROUP_LCD')

  }

  toggleLayer(sublayerId: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    const layer = this.layers[sublayerId];
    if (layer) {
      layer.visible = isChecked;
      this.legendVisibility[sublayerId] = isChecked;
    }

    if (sublayerId === 'TREE_COVER_LOSS') {
      this.showYearToggle = !this.showYearToggle
    }
    this.updateLegendDisplay();
  }

  updateLegendDisplay(): void {
    const legendContainer = document.getElementById('customLegend');
    let isAnyLayerVisible = false;

    if (legendContainer) {
      // Clear existing legend items
      legendContainer.innerHTML = '';
      const legendheading = document.createElement('p');
      legendheading.textContent = 'Legend';
      legendContainer.appendChild(legendheading);

      // Re-create legend items based on the current visibility state
      this.subLayersArray.forEach((layerObj: any) => {
        if (this.legendVisibility[layerObj.id] && layerObj.legendConfig) {
          isAnyLayerVisible = true; // At least one layer is visible

          const legendTitle = document.createElement('h5');
          legendTitle.textContent = layerObj.legendConfig.name['en'];
          legendContainer.appendChild(legendTitle);

          const numberOfItems = layerObj.legendConfig.items.length;
          const colorBox = document.createElement('div');
          colorBox.classList.add('legend-color');

          const labelContainer = document.createElement('div');
          labelContainer.classList.add('legend-labels');
          labelContainer.style.marginLeft = '10px'; // Space between color box and labels

          if (numberOfItems > 1) {
            // More than one item, display gradient
            const colorBoxHeight = 20; // Height of each color box
            const totalHeight = numberOfItems * colorBoxHeight;

            const gradientColors = layerObj.legendConfig.items.map((item: any) => item.color).join(', ');
            const gradientStyle = `linear-gradient(to bottom, ${gradientColors})`;

            colorBox.style.background = gradientStyle;
            colorBox.style.width = '20px';
            colorBox.style.height = `${totalHeight}px`; // Set height based on number of items

            const firstLabel = document.createElement('div');
            firstLabel.textContent = layerObj.legendConfig.items[0].name['en'];
            firstLabel.style.textAlign = 'left';
            firstLabel.style.marginBottom = `${totalHeight - 20}px`; // Align label to the top

            const lastLabel = document.createElement('div');
            lastLabel.textContent = layerObj.legendConfig.items[numberOfItems - 1].name['en'];
            lastLabel.style.textAlign = 'left';

            labelContainer.appendChild(firstLabel);
            labelContainer.appendChild(lastLabel);

          } else {
            // Only one item, display a single color box
            const item = layerObj.legendConfig.items[0];
            colorBox.style.backgroundColor = item.color;
            colorBox.style.width = '20px';
            colorBox.style.height = '20px';

            const singleLabel = document.createElement('div');
            singleLabel.textContent = item.name['en'];
            singleLabel.style.textAlign = 'right'; // Align text to the right

            labelContainer.appendChild(singleLabel);
          }

          const legendItem = document.createElement('div');
          legendItem.classList.add('legend-item');
          legendItem.style.display = 'flex'; // Flexbox layout for alignment
          legendItem.style.alignItems = 'center'; // Center items vertically

          legendItem.appendChild(colorBox);
          legendItem.appendChild(labelContainer);
          legendContainer.appendChild(legendItem);
        }
      });

      // Show or hide the legend container based on visibility of layers
      legendContainer.style.display = isAnyLayerVisible ? 'block' : 'none';
    }
  }


  toggleYear() {
    this.yearBtnEnabled = !this.yearBtnEnabled;

    if (this.yearBtnEnabled) {
      let endYear = 2000
      this.playInterval = setInterval(() => {
        if (endYear < this.maxYear) {
          this.endYear = endYear;
          endYear++
          this.onSliderChange();
        } else {
          this.pausePlayback(); // Stop when reaching the max year
        }
      }, 1000); // Update every second
    } else {
      this.pausePlayback();
    }
  }

  pausePlayback() {
    clearInterval(this.playInterval);
    this.yearBtnEnabled = false;
  }


  initializeYears() {
    for (let year = this.minYear; year <= this.maxYear; year++) {
      this.years.push(year);
    }
  }

  onSliderChange() {
    this.subLayersArray.forEach((layerObj: any) => {
      const customLayer = this.layers[layerObj.id] as CustomLayer;
      if (customLayer) {
        customLayer.minYear = this.startYear;
        customLayer.maxYear = this.endYear;
        // Update layer rendering to reflect the year range change
        customLayer.refresh();
      }
    });
  }


  formatLabel(value: number): string {
    return value.toString(); // Customize this if needed
  }

  getThumbPosition(value: number): number {
    // Calculate thumb position as a percentage of the slider range
    return ((value - this.minYear) / (this.maxYear - this.minYear)) * 100;
  }

  // showTooltip(type: 'start' | 'end') {
  //   this.tooltipVisible[type] = true;
  // }

  // hideTooltip(type: 'start' | 'end') {
  //   this.tooltipVisible[type] = false;
  // }

  updateDensity(): void {
    const dialogRef = this.dialog.open(DensityModalComponent, {
      data: { densityPercentage: this.densityPercentage },
      width: '300px',
      height: 'auto'
    });
  }

  updateLayerUrlByDensity(density: number): void {
    const layerId = 'TREE_COVER_LOSS'
    const layer = this.layers[layerId] as CustomLayer;

    if (layer) {
      const newUrl = this.getNewLayerUrl(layer.tileUrl, density);

      if (newUrl) {
        layer.tileUrl = newUrl;
        layer.refresh();
      } else {
        console.error(`No new URL could be generated for layer with ID ${layerId}.`);
      }
    } else {
      console.error(`Layer with ID ${layerId} not found.`);
    }
  }

  // Method to get the new URL based on the current URL and value
  private getNewLayerUrl(currentUrl: string, value: number): string | null {
    const updatedUrl = currentUrl.replace(/(tcd_)(?:[^/]+)/, `tcd_${value}`);
    return updatedUrl;
  }

  captureMapScreenshot(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Ensure `this.view` is properly initialized and ready
      if (this.view) {
        this.view.takeScreenshot().then((screenshot) => {
           ('screenshot captured');

          resolve(screenshot.dataUrl); // Return the Base64 screenshot
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject('Map view is not initialized');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.destroy();
    }
    if (this.densitySub) {
      this.densitySub.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
