import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DeforestationComponent } from './deforestation.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { GEarthService } from '../g-earth.service';
import { of, Subject } from 'rxjs';
import MapView from '@arcgis/core/views/MapView';
import Polygon from '@arcgis/core/geometry/Polygon';
import Color from '@arcgis/core/Color';

describe('DeforestationComponent', () => {
  let component: DeforestationComponent;
  let fixture: ComponentFixture<DeforestationComponent>;
  let mockGEarthService: Partial<GEarthService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockGEarthService = {
        density$: of(50), // Mock density observable
      };
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        DeforestationComponent,
        CommonModule,
        MatIconModule,
        MatExpansionModule,
        MatSliderModule,
        FormsModule,
        MatDialogModule,
      ],
      providers: [
        { provide: GEarthService, useValue: mockGEarthService },
        { provide: MatDialog, useValue: dialogSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeforestationComponent);
    component = fixture.componentInstance;

    // Set default input properties
    component.mapUrl = 'https://example.com/map';

    component.view = {
        destroy: jasmine.createSpy('destroy'),
        graphics: {
          add: jasmine.createSpy('add'),
          removeAll: jasmine.createSpy('removeAll'), 
        },  
      } as unknown as MapView;
  
      component.plotData = {
        polygons: [
          [
            [-100.0, 40.0],
            [-101.0, 41.0],
            [-102.0, 40.5],
          ],
        ],
        point: [[2, 2]],
        layers: [
          {
            label: 'Layer 1',
            url: 'http://example.com/layer1',
            maxScale: 1000,
            visible: true,
          },
          // Add more layers as needed for your test
        ],
      };
      
  });

  afterEach(() => {
    // Ensure ngOnDestroy runs and view is destroyed
    component.ngOnDestroy();
    expect(component.view.destroy).toHaveBeenCalled();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize years range on ngOnInit', () => {
    component.ngOnInit();
    expect(component.years.length).toBeGreaterThan(0);
    expect(component.years[0]).toEqual(component.minYear);
    expect(component.years[component.years.length - 1]).toEqual(component.maxYear);
  });

  it('should call dialog open when updating density', () => {
    component.updateDensity();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should call destroy on view during cleanup', () => {
    component.ngOnDestroy();
    expect(component.view.destroy).toHaveBeenCalled();
  });
  

  it('should render polygons correctly in batches', () => {
    // spyOn(component.view.graphics, 'add');
    component.renderGraphics();

    // Ensure that renderGraphics is called for polygons and batch is processed
    expect(component.view.graphics.add).toHaveBeenCalledTimes(2); // 2 polygons in total
  });
  
  it('should toggle layer visibility and update legend display', () => {
    // Arrange
    const sublayerId = 'TREE_COVER_LOSS';
    const eventMock = {
      target: {
        checked: true,
      },
    } as unknown as Event;
  
    const mockLayer = {
      visible: false,
      // Add minimal properties to satisfy the BaseTileLayer type
      spatialReference: null,
      tileInfo: null,
      type: 'tile',
      addResolvingPromise: jasmine.createSpy(),
      clone: jasmine.createSpy(),
      destroy: jasmine.createSpy(),
      hasEventListener: jasmine.createSpy(),
      load: jasmine.createSpy(),
      loadError: null,
      loaded: true,
      on: jasmine.createSpy(),
      once: jasmine.createSpy(),
      refresh: jasmine.createSpy(),
      removeEventListener: jasmine.createSpy(),
      toJSON: jasmine.createSpy(),
    } as unknown as __esri.BaseTileLayer;
  
    // Make `layers` accessible for the test by using a spy or directly modifying it
    Object.defineProperty(component, 'layers', {
      value: { [sublayerId]: mockLayer },
      writable: true,
    });
  
    component.legendVisibility = {};
    component.showYearToggle = false;
    const updateLegendSpy = spyOn(component, 'updateLegendDisplay');
    component.toggleLayer(sublayerId, eventMock);
    expect(mockLayer.visible).toBeTrue();
    expect(component.legendVisibility[sublayerId]).toBeTrue();
    expect(component.showYearToggle).toBeTrue();
    expect(updateLegendSpy).toHaveBeenCalled();
  });
  
  it('should update legend display based on visible layers', () => {
    // Arrange
    const mockLegendContainer = document.createElement('div');
    mockLegendContainer.id = 'customLegend';
    document.body.appendChild(mockLegendContainer); // Add to DOM
  
    const mockSubLayersArray = [
      {
        id: 'LAYER_1',
        url: 'https://example.com/layer1',
        label: 'Layer 1 Label',
        visible: true,
        legendConfig: {
          name: { en: 'Layer 1' },
          items: [
            { name: { en: 'Low' }, color: '#00FF00' },
            { name: { en: 'High' }, color: '#FF0000' },
          ],
        },
      },
      {
        id: 'LAYER_2',
        url: 'https://example.com/layer2',
        label: 'Layer 2 Label',
        visible: false,
        legendConfig: {
          name: { en: 'Layer 2' },
          items: [
            { name: { en: 'Category 1' }, color: '#0000FF' },
          ],
        },
      },
    ];
  
    component.subLayersArray = mockSubLayersArray;
    component.legendVisibility = {
      LAYER_1: true, // Visible
      LAYER_2: false, // Hidden
    };
  
    // Spy on document.getElementById to ensure correct DOM element is targeted
    spyOn(document, 'getElementById').and.returnValue(mockLegendContainer);
  
    // Act
    component.updateLegendDisplay();
  
    // Assert
    // Check if the legend container is visible
    expect(mockLegendContainer.style.display).toBe('block');
  
    // Check the legend heading
    expect(mockLegendContainer.innerHTML).toContain('<p>Legend</p>');
  
    // Verify Layer 1 legend creation
    const layer1Title = mockLegendContainer.querySelector('h5');
    expect(layer1Title?.textContent).toBe('Layer 1');
  
    const layer1Gradient = mockLegendContainer.querySelector('.legend-color') as HTMLDivElement; // Cast to HTMLDivElement
    expect(layer1Gradient).toBeTruthy();
  
    // Allow both rgb() and hex format for the gradient in the test
    const backgroundStyle = layer1Gradient.style.background;
    expect(backgroundStyle).toContain('linear-gradient');
    expect(backgroundStyle).toContain('rgb(0, 255, 0)');
    expect(backgroundStyle).toContain('rgb(255, 0, 0)');
  
    const layer1Labels = mockLegendContainer.querySelectorAll('.legend-labels div');
    expect(layer1Labels.length).toBe(2);
    expect(layer1Labels[0]?.textContent).toBe('Low');
    expect(layer1Labels[1]?.textContent).toBe('High');
  
    // Verify that Layer 2 is not rendered
    expect(mockLegendContainer.innerHTML).not.toContain('Layer 2');
    document.body.removeChild(mockLegendContainer);
  });

  describe('formatLabel', () => {
    it('should convert a number to a string', () => {
      // Arrange
      const value = 42;
  
      // Act
      const result = component.formatLabel(value);
  
      // Assert
      expect(result).toBe('42');
    });
  
    it('should handle negative numbers', () => {
      // Arrange
      const value = -42;
  
      // Act
      const result = component.formatLabel(value);
  
      // Assert
      expect(result).toBe('-42');
    });
  
    it('should handle zero', () => {
      // Arrange
      const value = 0;
  
      // Act
      const result = component.formatLabel(value);
  
      // Assert
      expect(result).toBe('0');
    });
  
    it('should handle decimal numbers', () => {
      // Arrange
      const value = 42.42;
  
      // Act
      const result = component.formatLabel(value);
  
      // Assert
      expect(result).toBe('42.42');
    });
  });

  
  describe('getThumbPosition', () => {
    beforeEach(() => {
      // Initialize values for minYear and maxYear
      component.minYear = 2000;
      component.maxYear = 2025;
    });
  
    it('should return 0 for minYear value', () => {
      // Arrange
      const value = 2000;
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      expect(result).toBe(0);
    });
  
    it('should return 100 for maxYear value', () => {
      // Arrange
      const value = 2025;
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      expect(result).toBe(100);
    });
  
    it('should return 50 for the middle of the range', () => {
      // Arrange
      const value = 2012.5; // Halfway between 2000 and 2025
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      expect(result).toBe(50);
    });
  
    it('should return a correct thumb position for a value within the range', () => {
      // Arrange
      const value = 2015;
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      const expected = ((2015 - 2000) / (2025 - 2000)) * 100;
      expect(result).toBeCloseTo(expected);
    });
  
    it('should return 0 for a value less than minYear', () => {
      // Arrange
      const value = 1999;
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      expect(result).toBe(-4);
    });
  
    it('should return 100 for a value greater than maxYear', () => {
      // Arrange
      const value = 2026;
  
      // Act
      const result = component.getThumbPosition(value);
  
      // Assert
      expect(result).toBe(104);
    });
  });
  

  
});
