import { TestBed } from '@angular/core/testing';
import { GEarthComponent } from './g-earth.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { GEarthService } from './g-earth.service';
import Point from '@arcgis/core/geometry/Point';
import Color from '@arcgis/core/Color';
import View from '@arcgis/core/views/MapView';
import Polygon from '@arcgis/core/geometry/Polygon';
import { IMapData } from 'src/app/shared/configs/app.model';


describe('GEarthComponent', () => {
  let component: GEarthComponent;
  let dashboardService: DashboardService;
  let gEarthServiceMock: jasmine.SpyObj<GEarthService>;
  let mockView: jasmine.SpyObj<View>;
  let viewMock: any;

  beforeEach(() => {
    viewMock = {
      on: jasmine.createSpy('on'),
      hitTest: jasmine.createSpy('hitTest').and.returnValue(Promise.resolve({ results: [] })),
    };
    
    // Create the mock for the graphics property
    viewMock.graphics = {
      add: jasmine.createSpy('add')
    };

    const selectedFiltersSubject = new BehaviorSubject<any>({
      country: 'Test Country',
      supplychain: 'Test Supplychain',
      batch: 'Test Batch',
      farmerGroup: 'Test Farmer Group'
    });
    // Create a mock for DashboardService
    const dashboardServiceMock = {
      selectedFilters$: jasmine.createSpy('selectedFilters$').and.returnValue(selectedFiltersSubject.asObservable()),
      selectedTab$: jasmine.createSpy('selectedTab$').and.returnValue(
        new BehaviorSubject<string>('DEFORESTATION').asObservable()
      ),
      updateSelectedTab: jasmine.createSpy('updateSelectedTab'),
      // selectedFilters: jasmine.createSpyObj('selectedFilters', ['emitNewFilters']),
      setUnit: jasmine.createSpy('setUnit'),
      SelectedCompanyId: jasmine.createSpy('SelectedCompanyId'),
      setCompaniesData: jasmine.createSpy('setCompaniesData')
    };
    gEarthServiceMock = jasmine.createSpyObj('GEarthService', ['hexToRgb','createPopupElement']);
    gEarthServiceMock.hexToRgb.and.returnValue([255, 87, 51]);
    mockView = jasmine.createSpyObj('view', ['toScreen']);


    TestBed.configureTestingModule({
      imports: [GEarthComponent, MatCheckboxModule, FormsModule, NgFor, NgIf, NgClass],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: GEarthService, useValue: gEarthServiceMock },
        { provide: View, useValue: mockView }
      ]
    });

    component = TestBed.createComponent(GEarthComponent).componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    component.view = mockView;

    spyOn(component, 'clearPopups').and.callFake(() => {}); // Mock clearPopups
    spyOn(component, 'updatePoints').and.callFake(() => {}); // Mock updatePoints
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

it('should initialize correctly in ngOnInit', () => {
  // Mocking mapData according to the IMapData interface
  component.mapData = {
    name: 'Test Map',
    position: 1,
    id: 'map-1',
    turn_on: 'True',
    layers: [
      { id: 1, turn_on: 'True', name: 'Layer 1', position: 1 },
      { id: 2, turn_on: 'False', name: 'Layer 2', position: 2 }
    ],
    location: [
      {
        id: 1,
        coordinate: [[0, 0]],
        lip: {
          value: 'test-lip',
          color: 'red',
          name: 'Lip Name',
          indexes: {
            current_pay: 5000,
            living_income: 3000,
            price_gap: 200,
            living_income_percentage: 60 // Mocking the required 'living_income_percentage' property
          },
          progress_barts: [10, 20, 30] // Corrected missing property
        },
        prod_cost: { value: '1000', color: 'blue' },
        production: {
          title: 'Production Title',
          id: 'prod-1',
          unit: 'kg',
          area: '100 sq.m',
          value: '2000',
          color: 'green'
        }
      }
    ],
    legend: {
      lip: {
        title: 'Lip Title',
        unit: 'unit',
        current: { mean: 100, median: 50, is_dual_value: false },
        min: { value: 0, color: 'black', is_dual_value: false },
        max: { value: 200, color: 'white', is_dual_value: false }
      },
      prod_cost: {
        title: 'Production Cost',
        unit: 'USD',
        current: { mean: 5000, median: 3000, is_dual_value: false },
        min: { value: 1000, color: 'blue', is_dual_value: false },
        max: { value: 10000, color: 'red', is_dual_value: false }
      },
      production: {
        title: 'Production',
        unit: 'items',
        current: { mean: 1500, median: 1000, is_dual_value: false },
        min: { value: 0, color: 'green', is_dual_value: false },
        max: { value: 5000, color: 'yellow', is_dual_value: false }
      }
    }
  } as unknown as IMapData;  // Casting the mock data to IMapData

  spyOn(component, 'subscribeToSelectedTab').and.callThrough();
  spyOn(component, 'setMapConfig').and.callThrough();

  component.ngOnInit();

  // Check that the point is set correctly (from the coordinate)
  expect(component.point).toEqual([[0, 0]]);  // assuming 'coordinate' is an array of arrays of numbers
  

  // Verify legend data is passed correctly
  expect(component.legendData).toEqual({
    lip: { 
      title: 'Lip Title', 
      unit: 'unit', 
      current: { mean: 100, median: 50, is_dual_value: false }, 
      min: { value: 0, color: 'black', is_dual_value: false }, 
      max: { value: 200, color: 'white', is_dual_value: false } 
    },
    prod_cost: { 
      title: 'Production Cost', 
      unit: 'USD', 
      current: { mean: 5000, median: 3000, is_dual_value: false }, 
      min: { value: 1000, color: 'blue', is_dual_value: false }, 
      max: { value: 10000, color: 'red', is_dual_value: false } 
    },
    production: { 
      title: 'Production', 
      unit: 'items', 
      current: { mean: 1500, median: 1000, is_dual_value: false }, 
      min: { value: 0, color: 'green', is_dual_value: false }, 
      max: { value: 5000, color: 'yellow', is_dual_value: false } 
    }
  });

  expect(component.legendItem).toEqual({
    title: 'Lip Title', 
    unit: 'unit', 
    current: { mean: 100, median: 50, is_dual_value: false }, 
    min: { value: 0, color: 'black', is_dual_value: false }, 
    max: { value: 200, color: 'white', is_dual_value: false }
  });
  

  // Ensure that necessary methods are called
  expect(component.subscribeToSelectedTab).toHaveBeenCalled();
  expect(component.setMapConfig).toHaveBeenCalled();
});


  it('should subscribe to selectedFilters$ and update selectedFilters', (done) => {
    // Call the subscribeToDashboardFilters method
    component.subscribeToDashboardFilters();

    // Simulate the BehaviorSubject emitting new data
    const newFilterData = {
      country: 'Test Country',
      supplychain: 'Test Supplychain',
      batch: 'Test Batch',
      farmerGroup: 'Test Farmer Group'
    };

    // Emit new value
    // selectedFiltersSubject.next(newFilterData);

    // Use done to wait for asynchronous completion
    setTimeout(() => {
      // Assert that the selectedFilters property in the component was updated
      expect(component.selectedFilters).toEqual(newFilterData);
      done();
    }, 0);
  });


  // it('should update point and polygons on ngOnChanges', async () => {
  //   // Create mock SimpleChanges
  //   const simpleChanges: SimpleChanges = {
  //     plotData: {
  //       currentValue: {
  //         point: 'new-point',
  //         polygons: ['polygon1', 'polygon2']
  //       },
  //       previousValue: null,
  //       firstChange: true,
  //       isFirstChange: () => true
  //     }
  //   };

  //   // Spy on initializeMap method
  //   spyOn(component, 'initializeMap').and.returnValue(Promise.resolve());

  //   // Call ngOnChanges with mock changes
  //   component.ngOnChanges(simpleChanges);

  //   // Assertions to check if point and polygons are updated correctly
  //   expect(component.point).toBe('new-point');
  //   expect(component.polygons).toEqual(['polygon1', 'polygon2']);

  //   // Ensure initializeMap is called
  //   expect(component.initializeMap).toHaveBeenCalled();
  // });

  it('should create a point graphic with default color', () => {
    const dot = [40.7128, -74.0060]; // Latitude, Longitude
    const labelColor = '#ff5733'; // Hex color
    const label = 'Test Label';
    const price = undefined; // Price is undefined

    // Call the method
    const graphic = component.createPointGraphic(dot, labelColor, label, price);

    // Assertions
    expect(graphic.geometry).toBeInstanceOf(Point); // Ensure it's a Point geometry
    expect(graphic.symbol.color).toEqual(new Color([50, 85, 110])); // Default color when price is undefined
    expect(graphic.attributes.label).toBe(label); // Ensure the label is correct
    expect(graphic.attributes.price).toBe(price); // Ensure price is undefined
    expect(graphic.attributes.color).toBe(labelColor); // Ensure the color attribute is correct
    expect(gEarthServiceMock.hexToRgb).not.toHaveBeenCalled(); // Ensure hexToRgb was not called
  });

  it('should not update popup position if point is null', () => {
    const popup = document.createElement('div');
    const point = null;

    // Call updatePopupPosition with null point
    component.updatePopupPosition(point, popup);

    // Assert that the popup's left and top styles are not modified
    expect(popup.style.left).toBe('');
    expect(popup.style.top).toBe('');
  });

  it('should update popup position if point is valid', () => {
    const popup = document.createElement('div');
    const point = new Point({ x: 100, y: 200 });

    // Mock the toScreen method to return specific screen coordinates
    mockView.toScreen.and.returnValue({ x: 300, y: 400 });

    // Mock the popup width using Object.defineProperty
    Object.defineProperty(popup, 'offsetWidth', { value: 100 });

    // Call updatePopupPosition with valid point
    component.updatePopupPosition(point, popup);

    // Assert that the popup position is updated correctly
    expect(popup.style.left).toBe('250px');  // 300px - 100px / 2 = 250px
    expect(popup.style.top).toBe('360px');   // 400px - 40px = 360px
  });

  it('should not update popup position if toScreen returns invalid coordinates', () => {
    const popup = document.createElement('div');
    const point = new Point({ x: 100, y: 200 });

    // Mock the toScreen method to return invalid coordinates (use NaN instead of null)
    mockView.toScreen.and.returnValue({ x: NaN, y: NaN });

    // Call updatePopupPosition with valid point but invalid screen coordinates
    component.updatePopupPosition(point, popup);

    // Assert that the popup's left and top styles are not modified
    expect(popup.style.left).toBe('');
    expect(popup.style.top).toBe('');
  });

  it('should create a popup and update the position when valid point is provided', () => {
    const point = new Point({ x: 100, y: 200 });
    const label = 'Test Label';
    const price = 50;
    const color = '#ff5733';
  
    // Mock the createPopupElement method to return a new div element
    const mockPopupElement = document.createElement('div');
    gEarthServiceMock.createPopupElement.and.returnValue(mockPopupElement);
  
    // Spy on the updatePopupPosition method
    spyOn(component, 'updatePopupPosition');
  
    // Set activeToggleItem to a value that allows popup creation
    component.activeToggleItem = "1"; // Allow popup creation
  
    // Call showCustomPopup with valid parameters
    component.showCustomPopup(point, label, price, color);
  
    // Assert that the popup element is created
    expect(mockPopupElement).toBeTruthy();
  
    // Check if the popup was appended to the mapViewEl's nativeElement
    const mapViewEl = component.mapViewEl.nativeElement;
    expect(mapViewEl.contains(mockPopupElement)).toBeTrue(); // Check if the popup element was appended
  
    // Assert that updatePopupPosition was called to position the popup
    expect(component.updatePopupPosition).toHaveBeenCalledWith(point, mockPopupElement);
  });
  

  it('should not show popup if activeToggleItem is "0"', () => {
    const point = new Point({ x: 100, y: 200 });
    const label = 'Test Label';
    const price = 50;
    const color = '#ff5733';
  
    // Set activeToggleItem to "0" to prevent popup creation
    component.activeToggleItem = "0";
  
    // Call showCustomPopup with valid parameters
    component.showCustomPopup(point, label, price, color);
  
    // Assert that the createPopupElement method was not called
    expect(gEarthServiceMock.createPopupElement).not.toHaveBeenCalled();
  
    // Check that no popup was appended to the mapViewEl's nativeElement
    const mapViewEl = component.mapViewEl.nativeElement;
    expect(mapViewEl.childElementCount).toBe(0); // No child elements should be added
  });
  

  it('should not create a new popup if a popup for the point already exists', () => {
    const point = new Point({ x: 100, y: 200 });
    const label = 'Test Label';
    const price = 50;
    const color = '#ff5733';
  
    // Mock the createPopupElement method to return a new div element
    const mockPopupElement = document.createElement('div');
    gEarthServiceMock.createPopupElement.and.returnValue(mockPopupElement);
  
    // Add a popup to activePopups for the same point (direct modification for testing purposes)
    // Since activePopups is private, you can test its side effect indirectly using mapViewEl or through another mechanism
    component['activePopups'] = [{ point, popupElement: mockPopupElement }];
  
    // Call showCustomPopup with the same point, label, price, and color
    component.showCustomPopup(point, label, price, color);
  
    // Assert that the createPopupElement method was not called again
    expect(gEarthServiceMock.createPopupElement).not.toHaveBeenCalled();
  
    // Check the number of child elements in mapViewEl's nativeElement to ensure no new popup was appended
    const mapViewEl = component.mapViewEl.nativeElement;
    expect(mapViewEl.childElementCount).toBe(0); // No new popup should be added, only the existing one
  });
  
  
  it('should not create a popup if point is null', () => {
    const label = 'Test Label';
    const price = 50;
    const color = '#ff5733';
  
    // Set activeToggleItem to a value that allows popup creation
    component.activeToggleItem = "1"; // Allow popup creation
  
    // Mock the createPopupElement method to prevent real DOM changes
    const mockPopupElement = document.createElement('div');
    gEarthServiceMock.createPopupElement.and.returnValue(mockPopupElement);
  
    // Call showCustomPopup with null point
    component.showCustomPopup(null, label, price, color);
  
    // Assert that the createPopupElement method was not called
    expect(gEarthServiceMock.createPopupElement).not.toHaveBeenCalled();
  
    // Check that the DOM has not been altered (no popups appended)
    const mapViewEl = component.mapViewEl.nativeElement;
    expect(mapViewEl.childElementCount).toBe(0); // No popups should be added
  });

  it('should remove popup if point exists in activePopups', () => {
    const point = new Point({ x: 100, y: 200 });
    const popupElement = document.createElement('div');
    
    // Type the component as 'any' to access private properties
    const componentAny: any = component;
  
    // Add a popup to activePopups for the given point
    componentAny.activePopups = [{ point, popupElement }];
    
    // Spy on the removeChild method to track if it's called
    spyOn(component.mapViewEl.nativeElement, 'removeChild');
    
    // Call removePopup with the existing point
    component.removePopup(point);
  
    // Assert that removeChild was called with the popup element
    expect(component.mapViewEl.nativeElement.removeChild).toHaveBeenCalledWith(popupElement);
  
    // Assert that the popup is removed from activePopups
    expect(componentAny.activePopups.length).toBe(0); // No popups should be in activePopups now
  });
  
  it('should activate the layer and update activeToggleItem when toggled on', () => {
    const event = { target: { checked: true } };
    const layerId = '1';

    // spyOn(component, 'updatePoints');
    component.toggleLayer(event, layerId);

    expect(component.activeToggleItem).toBe('1');
    expect(component.updatePoints).toHaveBeenCalledWith('1');
  });

  it('should deactivate the layer and reset activeToggleItem when toggled off', () => {
    const event = { target: { checked: false } };
    const layerId = '1';
  
    // Call the method
    component.toggleLayer(event, layerId);
  
    // Assert activeToggleItem reset
    expect(component.activeToggleItem).toBe('0');
  
    // Assert clearPopups called
    expect(component.clearPopups).toHaveBeenCalled();
  
    // Assert updatePoints called with '0'
    expect(component.updatePoints).toHaveBeenCalledWith('0');
  });
  
  it('should set the legend item for Living Income tab with valid activeToggleItem', () => {
    // Initialize legendData with the required properties
    component.legendData = {
      lip: { key: 'lipLegend' },
      prod_cost: { key: 'prodCostLegend' },
      production: { key: 'productionLegend' }
    };
  
    // Set the selected tab to 'Living income'
    component.selectedTab = 'Living income';
  
    // Simulate the checkbox event
    const event = { target: { checked: true } };
    const layerId = '2';
  
    // Call the toggleLayer method to update the state
    component.toggleLayer(event, layerId);
  
    // Assert that activeToggleItem is updated correctly
    expect(component.activeToggleItem).toBe('2');
  
    // Assert that the legendItem is set correctly based on layerId
    expect(component.legendItem).toEqual({ key: 'prodCostLegend' });
  
    // Assert that updatePoints is called with the correct parameter
    expect(component.updatePoints).toHaveBeenCalledWith('2');
  });

  
  it('should reset the legend item for Living Income tab with invalid activeToggleItem', () => {
    component.selectedTab = 'Living income';

    const event = { target: { checked: true } };
    const layerId = '4';

    component.toggleLayer(event, layerId);

    expect(component.activeToggleItem).toBe('4');
    expect(component.legendItem).toEqual({});
    expect(component.updatePoints).toHaveBeenCalledWith('4');
  });

  it('should set the legend item for Emissions tab with valid activeToggleItem', () => {
    // Initialize legendData with the required properties
    component.legendData = {
      lip: { key: 'lipLegend' },
      prod_cost: { key: 'prodCostLegend' },
      production: { key: 'productionLegend' },
      cru: { key: 'cruLegend' }  // Add the cru legend for the 'Emissions' tab
    };
  
    // Set the selected tab to 'Emissions'
    component.selectedTab = 'Emissions';
  
    // Simulate the checkbox event
    const event = { target: { checked: true } };
    const layerId = '2';
  
    // Call the toggleLayer method to update the state
    component.toggleLayer(event, layerId);
  
    // Assert that activeToggleItem is updated correctly
    expect(component.activeToggleItem).toBe('2');
  
    // Assert that the legendItem is set correctly for 'Emissions' tab with 'cru'
    expect(component.legendItem).toEqual({ key: 'cruLegend' });
  
    // Assert that updatePoints is called with the correct parameter
    expect(component.updatePoints).toHaveBeenCalledWith('2');
  });

  it('should reset the legend item for unrecognized activeToggleItem', () => {
    component.selectedTab = 'Living income';

    const event = { target: { checked: true } };
    const layerId = '4';

    component.toggleLayer(event, layerId);

    expect(component.activeToggleItem).toBe('4');
    expect(component.legendItem).toEqual({});
    expect(component.updatePoints).toHaveBeenCalledWith('4');
  });

  it('should reset the legend item for Emissions tab with unrecognized activeToggleItem', () => {
    component.selectedTab = 'Emissions';

    const event = { target: { checked: true } };
    const layerId = '3';

    component.toggleLayer(event, layerId);

    expect(component.activeToggleItem).toBe('3');
    expect(component.legendItem).toEqual({});
    expect(component.updatePoints).toHaveBeenCalledWith('3');
  });

  
  

});

