import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInfoComponent } from './card-info.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FfPaginationComponent, IPaginator, LoaderComponent } from 'fairfood-utils';
import { PriceGapComponent } from './price-gap/price-gap.component';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IAssessmentData } from 'src/app/shared/configs/app.model';

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;
  let mockApiService: jasmine.SpyObj<ApiService>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    mockDashboardService = jasmine.createSpyObj('DashboardService', ['selectedFilters$', 'selectedTab$', 'meanOrMedian$']);
    mockApiService = jasmine.createSpyObj('ApiService', ['getStats']);
    mockDataService = jasmine.createSpyObj('DataService', ['setData']);

    Object.defineProperty(mockDashboardService, 'meanOrMedian$', {
      value: of(1),
    });
    
    Object.defineProperty(mockDashboardService, 'selectedFilters$', {
      value: of({
        supplychain: 'supplychain-id',
        batch: 'batch-id',
      }),
    });
    
    Object.defineProperty(mockDashboardService, 'selectedTab$', {
      value: of('some-tab'),
    });

    TestBed.configureTestingModule({
      imports: [MatTooltipModule, MatIconModule, CardInfoComponent, FfPaginationComponent, LoaderComponent, PriceGapComponent],
      providers: [
        { provide: DashboardService, useValue: mockDashboardService },
        { provide: ApiService, useValue: mockApiService },
        { provide: DataService, useValue: mockDataService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Avoid errors due to unknown components in the template
    }).compileComponents();
    mockDashboardService
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;

    component.data = [
      { 
        name: 'Data Set 1',
        is_passed: true,
        indexes: [
          { name: 'Index 1', is_passed: true },
          { name: 'Index 2', is_passed: true },
          { name: 'Index 3', is_passed: false },
          { name: 'Index 4', is_passed: true },
          { name: 'Index 5', is_passed: false }
        ]
      },
      { 
        name: 'Data Set 2',
        is_passed: false,
        indexes: [
          { name: 'Index 6', is_passed: false },
          { name: 'Index 7', is_passed: true },
          { name: 'Index 8', is_passed: true },
          { name: 'Index 9', is_passed: false },
          { name: 'Index 10', is_passed: true }
        ]
      }
    ];
    
    component.cardOffset = 0;
    component.cardData = [];
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly update cardOffset and cardData when paginationCard is called with positive direction', () => {
    // Arrange
    const initialCardOffset = component.cardOffset;
    const initialCardData = component.cardData;

    // Spy on the setCardData and paginationAcceptable methods
    spyOn(component, 'setCardData');
    spyOn(component, 'paginationAcceptable');

    // Act
    component.paginationCard(1);  // Move forward

    // Assert
    expect(component.cardOffset).toBe(initialCardOffset + 1);  // Card offset should increase by 1
    expect(component.cardData.length).toBe(1);  // One item should be in cardData
    expect(component.cardData[0]).toEqual(component.data[1]);  // Card data should contain the second item
    expect(component.setCardData).toHaveBeenCalled();  // setCardData should be called
    expect(component.paginationAcceptable).toHaveBeenCalledWith({ limit: 3, offset: 0 });  // paginationAcceptable should be called with correct args
  });

  it('should correctly update cardOffset and cardData when paginationCard is called with negative direction', () => {
    // Arrange
    component.cardOffset = 1;  // Set cardOffset to the second element
    const initialCardOffset = component.cardOffset;
    const initialCardData = component.cardData;

    // Spy on the setCardData and paginationAcceptable methods
    spyOn(component, 'setCardData');
    spyOn(component, 'paginationAcceptable');

    // Act
    component.paginationCard(-1);  // Move backward

    // Assert
    expect(component.cardOffset).toBe(initialCardOffset - 1);  // Card offset should decrease by 1
    expect(component.cardData.length).toBe(1);  // One item should be in cardData
    expect(component.cardData[0]).toEqual(component.data[0]);  // Card data should contain the first item
    expect(component.setCardData).toHaveBeenCalled();  // setCardData should be called
    expect(component.paginationAcceptable).toHaveBeenCalledWith({ limit: 3, offset: 0 });  // paginationAcceptable should be called with correct args
  });

  it('should reset cardOffset to 0 if it becomes negative after paginationCard', () => {
    // Arrange
    component.cardOffset = 0;
    const initialCardOffset = component.cardOffset;

    // Spy on the setCardData and paginationAcceptable methods
    spyOn(component, 'setCardData');
    spyOn(component, 'paginationAcceptable');

    // Act
    component.paginationCard(-1);  // Try moving backward beyond the first item

    // Assert
    expect(component.cardOffset).toBe(0);  // Card offset should be reset to 0
    expect(component.setCardData).toHaveBeenCalled();  // setCardData should be called
    expect(component.paginationAcceptable).toHaveBeenCalledWith({ limit: 3, offset: 0 });  // paginationAcceptable should be called with correct args
  });

  it('should not move cardOffset beyond the data length when paginationCard is called', () => {
    // Arrange
    component.cardOffset = 1;  // Set cardOffset to the last item
    const initialCardOffset = component.cardOffset;

    // Spy on the setCardData and paginationAcceptable methods
    spyOn(component, 'setCardData');
    spyOn(component, 'paginationAcceptable');

    // Act
    component.paginationCard(1);  // Try moving forward beyond the last item

    // Assert
    expect(component.cardOffset).toBe(component.data.length - 1);  // Card offset should be capped at the last index
    expect(component.setCardData).toHaveBeenCalled();  // setCardData should be called
    expect(component.paginationAcceptable).toHaveBeenCalledWith({ limit: 3, offset: 0 });  // paginationAcceptable should be called with correct args
  });


  it('should update acceptableData correctly when paginationAcceptable is called with valid offset and limit', () => {
    // Arrange
    const paginatorData = { offset: 1, limit: 3 };  // Starting from index 1 and limit 3
    const expectedResult = [
      { name: 'Index 2', is_passed: true },
      { name: 'Index 3', is_passed: false },
      { name: 'Index 4', is_passed: true }
    ];
    

    // Act
    component.paginationAcceptable(paginatorData);

    // Assert
    expect(component.acceptableData).toEqual(expectedResult);  // acceptableData should be updated with the correct slice
  });

  it('should handle edge case when paginationAcceptable is called with offset beyond available data', () => {
    // Arrange
    component.data = [{
      name: 'Test Data',
      is_passed: true,
      indexes: [
        { name: 'Index 1', is_passed: true },
        { name: 'Index 2', is_passed: true },
        { name: 'Index 3', is_passed: false },
        { name: 'Index 4', is_passed: true },
        { name: 'Index 5', is_passed: false }
      ]
    }];
    const paginatorData = { offset: 3, limit: 3 };  // Starting from index 3 and limit 3
    const expectedResult = [
      { name: 'Index 4', is_passed: true },
      { name: 'Index 5', is_passed: false }
    ];  // The slice should return [Index 4, Index 5] since there's only 2 elements left

    // Act
    component.paginationAcceptable(paginatorData);

    // Assert
    expect(component.acceptableData).toEqual(expectedResult);  // acceptableData should be updated with the correct slice
});


  it('should handle empty data when paginationAcceptable is called', () => {
    // Arrange
    component.data = [{ name: 'Test Data', is_passed: false, indexes: [] }];  // Providing required properties
    const paginatorData = { offset: 0, limit: 3 };

    // Act
    component.paginationAcceptable(paginatorData);

    // Assert
    expect(component.acceptableData).toEqual([]);  // acceptableData should be an empty array
});

  it('should call slice method with correct arguments', () => {
    // Arrange
    const paginatorData = { offset: 0, limit: 3 };  // Starting from index 0 with limit 3
    const sliceSpy = spyOn(component.data[component.cardOffset].indexes, 'slice').and.callThrough();

    // Act
    component.paginationAcceptable(paginatorData);

    // Assert
    expect(sliceSpy).toHaveBeenCalledWith(paginatorData.offset, paginatorData.offset + paginatorData.limit);  // Slice method should be called with correct arguments
  });

  it('should return the index passed to trackByCommon', () => {
    // Arrange
    const index = 5;

    // Act
    const result = component.trackByCommon(index);

    // Assert
    expect(result).toBe(index);  // The method should return the same index value
  });

  it('should set isPassed, acceptableCount, and nonAcceptableCount correctly', () => {
    // Arrange
    component.data = [{
      name: 'Test Data',
      is_passed: true,
      indexes: [
        { name: 'Index 1', is_passed: true },
        { name: 'Index 2', is_passed: true },
        { name: 'Index 3', is_passed: false },
        { name: 'Index 4', is_passed: true },
        { name: 'Index 5', is_passed: false }
      ]
    }];
    component.cardOffset = 0;  // Assuming we're testing the first item in the data

    // Act
    component.setCardData();

    // Assert
    expect(component.isPassed).toBe(true);  // isPassed should be set to true (this.data[cardOffset].is_passed)
    expect(component.acceptableCount).toBe(3);  // 3 indexes are passed (Index 1, Index 2, Index 4)
    expect(component.nonAcceptableCount).toBe(2);  // 2 indexes are not passed (Index 3, Index 5)
});



  it('should set acceptableCount and nonAcceptableCount correctly when all items are acceptable', () => {
    // Arrange
    component.data[0] = {
      name: 'Sample Data',  // Added missing name property
      is_passed: true,
      indexes: [
        { name: 'Index 1', is_passed: true },  //  Added name property
        { name: 'Index 2', is_passed: true },
        { name: 'Index 3', is_passed: true }
      ]
    };

    // Act
    component.setCardData();

    // Assert
    expect(component.acceptableCount).toBe(3);  // All indexes have is_passed === true
    expect(component.nonAcceptableCount).toBe(0);  // No non-acceptable items
});


it('should set acceptableCount and nonAcceptableCount correctly when all items are non-acceptable', () => {
  // Arrange
  component.data[0] = {
    name: 'Sample Data',  //  Added missing name property
    is_passed: false,
    indexes: [
      { name: 'Index 1', is_passed: false },  //  Added name property
      { name: 'Index 2', is_passed: false },
      { name: 'Index 3', is_passed: false }
    ]
  };

  // Act
  component.setCardData();

  // Assert
  expect(component.acceptableCount).toBe(0);  // No acceptable items
  expect(component.nonAcceptableCount).toBe(3);  // All indexes have is_passed === false
});

it('should handle empty indexes array correctly', () => {
  // Arrange
  component.data[0] = {
    name: 'Sample Data',  //  Added missing name property
    is_passed: true,
    indexes: []  // Empty array, but 'name' is required in Data interface
  };

  // Act
  component.setCardData();

  // Assert
  expect(component.acceptableCount).toBe(0);  // No acceptable items
  expect(component.nonAcceptableCount).toBe(0);  // No non-acceptable items
});



it('should correctly slice the indexes array and increment the tableCurrentPage', () => {
  // Arrange: Set up initial conditions
  component.tableCurrentPage = 0;  // Initial page is 0
  component.pageLimit = 3;  // Assume 3 items per page
  component.tableStats = {
    title: 'Test Title', // Add required properties
    description: 'Test Description', // Add required properties
    indexes: [
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
      { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
      { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
      { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
      { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
      { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
      { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
      { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
    ]
  };

  // Act: Call the method to navigate to the next page
  component.nextTablePage();

  // Assert: Verify the tableStatsArray is updated correctly
  expect(component.tableStatsArray).toEqual(component.tableStats.indexes.slice(0, 3));  // First page should slice the first 3 items
  expect(component.tableCurrentPage).toBe(1);  // Page should be incremented to 1
});


it('should handle nextTablePage correctly when it reaches the last page', () => {
  // Arrange: Set up initial conditions for the last page
  component.tableCurrentPage = 2;  // Assuming we're on the second page (indexes 6-8)
  component.pageLimit = 3;  // Assume 3 items per page
  component.tableStats = {
    title: 'Test Title', 
    description: 'Test Description', 
    indexes: [
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
      { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
      { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
      { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
      { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
      { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
      { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
      { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
    ]
  };

  // Act: Call the method to navigate to the next page
  component.nextTablePage();

  // Assert: Verify the tableStatsArray is updated correctly
  expect(component.tableStatsArray).toEqual([
    { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
    { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
    { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } }
  ]);  // Last page should slice the remaining items
  expect(component.tableCurrentPage).toBe(3);  // Page should be incremented to 3
});


  it('should handle edge case when there is not enough data for the next page', () => {
    // Arrange: Set up initial conditions for a page with not enough data
    component.tableCurrentPage = 3;  // Assuming we're on the fourth page (index out of bounds)
    component.pageLimit = 3;  // Assume 3 items per page
    component.tableStats = {
      title: 'Test Title', // Add required properties
      description: 'Test Description', // Add required properties
      indexes: [
        { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
        { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
        { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
        { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
        { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
        { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
        { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
        { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
        { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
      ]
    };

    // Act: Call the method to navigate to the next page
    component.nextTablePage();

    // Assert: Verify the tableStatsArray is empty (or the last page data)
    expect(component.tableStatsArray).toEqual([]);  // No more data should be available
    expect(component.tableCurrentPage).toBe(4);  // Page should be incremented to 4
  });


  it('should call subscribeToDashboardFilters and subscribeToSelectedTab in ngOnInit', () => {
    // Spy on the methods to check if they are called
    spyOn(component, 'subscribeToDashboardFilters');
    spyOn(component, 'subscribeToSelectedTab');

    // Act: Trigger ngOnInit
    component.ngOnInit();

    // Assert: Verify that the methods were called
    expect(component.subscribeToDashboardFilters).toHaveBeenCalled();
    expect(component.subscribeToSelectedTab).toHaveBeenCalled();
  });

  it('should call getStats when selectedTab is DEFORESTATION', () => {
    component.selectedTab = 'DEFORESTATION';
    component.selectedFilters = { 
        country: 'country-id', // Add country
        supplychain: 'supplychain-id', 
        batch: 'batch-id', 
        farmerGroup: 'farmer-group-id' // Add farmerGroup
    };
    spyOn(component, 'onStatsLoaded'); // Spy on the onStatsLoaded method

    mockApiService.getStats.and.returnValue(of({ data: 'mock data' })); // Mock the API response
    component.loadStats();
    expect(mockApiService.getStats).toHaveBeenCalledWith('DEFORESTATION', component.selectedFilters);  // API should be called with correct arguments
    expect(component.onStatsLoaded).toHaveBeenCalled(); // onStatsLoaded should be called
});


  it('should not call getStats when selectedTab is not DEFORESTATION', () => {
    component.selectedTab = 'OTHER_TAB';
    spyOn(component, 'onStatsLoaded'); // Spy on the onStatsLoaded method
    component.loadStats();
    expect(mockApiService.getStats).not.toHaveBeenCalled(); // API should not be called
  });


  it('should set dataLoaded to true if there is an error in getStats', () => {
    component.selectedTab = 'DEFORESTATION';
    component.selectedFilters = { 
        country: 'country-id',  // Add country
        supplychain: 'supplychain-id', 
        batch: 'batch-id', 
        farmerGroup: 'farmer-group-id'  // Add farmerGroup
    };

    mockApiService.getStats.and.returnValue(throwError('Error')); // Mock API to return an error
    component.loadStats();
    expect(component.dataLoaded).toBeTrue();  // dataLoaded should be set to true when there's an error
});


  it('should update tableStats and tableStatsArray when res?.data is available', () => {
    // Arrange
    const mockRes = { 
      data: { 
        title: 'Sample Title',  //  Add required title
        description: 'Sample Description',  //  Add required description
        indexes: [  
          { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
          { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
          { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
          { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
          { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
        ]
      }
    };
    component.pageLimit = 3;
  
    // Act
    component.onStatsLoaded(mockRes);
  
    // Assert
    expect(component.tableStats).toEqual(mockRes.data);  // tableStats should be set to res.data
    expect(component.tableStatsArray).toEqual(mockRes.data.indexes.slice(0, 3));  // tableStatsArray should be sliced with pageLimit
    expect(mockDataService.setData).toHaveBeenCalledWith(mockRes.data.indexes);  // setData should be called with tableStats.indexes
    expect(component.tableCurrentPage).toBe(1);  // tableCurrentPage should be set to 1
  });
  

  it('should update tableStats and tableStatsArray when res?.data is not available', () => {
    // Arrange
    const mockRes: IAssessmentData = { 
      title: 'Default Title',  //  Add required title
      description: 'Default Description',  //  Add required description
      indexes: [
        { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
        { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'true' } }
      ]  //  Convert number array to valid Items[]
    };
    component.pageLimit = 3;

    // Act
    component.onStatsLoaded(mockRes);

    // Assert
    expect(component.tableStats).toEqual(mockRes);  // tableStats should be set to res
    expect(component.tableStatsArray).toEqual(mockRes.indexes);  //  Use indexes array from mockRes
    expect(mockDataService.setData).toHaveBeenCalledWith(mockRes.indexes);  // Ensure correct type
    expect(component.tableCurrentPage).toBe(1);  // tableCurrentPage should be set to 1
});


  it('should set cardData and acceptableData if this.data is available', () => {
    // Arrange
    component.data = [{
      name: 'Test Data',
      is_passed: true,
      indexes: [
        { name: 'Index 1', is_passed: true },
        { name: 'Index 2', is_passed: true },
        { name: 'Index 3', is_passed: false }
      ]
    }];
    
    // Simulate mock response that will be passed into onStatsLoaded
    const mockRes = { 
      data: { 
        indexes: [
          { name: 'Index 1', is_passed: true },
          { name: 'Index 2', is_passed: true },
          { name: 'Index 3', is_passed: false }
        ] 
      }
    };

    spyOn(component, 'setCardData'); // Spy on setCardData method

    // Act
    component.onStatsLoaded(mockRes);

    // Assert
    // cardData should be set to the first item of this.data
    expect(component.cardData).toEqual([component.data[0]]);

    // acceptableData should be set to the first 3 indexes of data[0]
    expect(component.acceptableData).toEqual([
      { name: 'Index 1', is_passed: true },
      { name: 'Index 2', is_passed: true },
      { name: 'Index 3', is_passed: false }
    ]);

    // setCardData should be called
    expect(component.setCardData).toHaveBeenCalled();
});

  it('should set dataLoaded to true at the end of the function', () => {
    // Arrange
    const mockRes = { data: { indexes: [1, 2, 3, 4, 5] } };

    // Act
    component.onStatsLoaded(mockRes);

    // Assert
    expect(component.dataLoaded).toBeTrue();  // dataLoaded should be set to true
  });

  it('should update tableStats and call onStatsLoaded if selectedTab is not DEFORESTATION', () => {
    // Arrange
    const mockLivingIncomeData: IAssessmentData = {
      title: 'Sample Title',
      description: 'Sample Description',
      indexes: [
        { name: 'Index 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
        { name: 'Index 2', value: { mean: '20', median: '10', is_dual_value: 'true' } },
      ],
    };
  
    component.livingIncomeData = mockLivingIncomeData;
    const onStatsLoadedSpy = spyOn(component, 'onStatsLoaded');
    component.selectedTab = 'OTHER_TAB'; // Set a tab other than 'DEFORESTATION'
  
    // Act
    component.onTabSelected('OTHER_TAB');
  
    // Assert
    expect(component.selectedTab).toBe('OTHER_TAB'); // selectedTab should be updated
    expect(component.tableStats).toBe(mockLivingIncomeData); // tableStats should be updated with livingIncomeData
    expect(onStatsLoadedSpy).toHaveBeenCalledWith(mockLivingIncomeData); // onStatsLoaded should be called with tableStats
  });
  

  it('should not update tableStats and not call onStatsLoaded if selectedTab is DEFORESTATION', () => {
    // Arrange
    const mockLivingIncomeData: IAssessmentData = {
      title: 'Sample Title',
      description: 'Sample Description',
      indexes: [
        { name: 'Index 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
        { name: 'Index 2', value: { mean: '20', median: '10', is_dual_value: 'true' } },
      ],
    };
    component.livingIncomeData = mockLivingIncomeData;
    const onStatsLoadedSpy = spyOn(component, 'onStatsLoaded');
    component.selectedTab = 'DEFORESTATION';  // Set selectedTab to 'DEFORESTATION'

    // Act
    component.onTabSelected('DEFORESTATION');

    // Assert
    expect(component.selectedTab).toBe('DEFORESTATION');  // selectedTab should remain 'DEFORESTATION'
    expect(component.tableStats).not.toBe(mockLivingIncomeData);  // tableStats should not be updated
    expect(onStatsLoadedSpy).not.toHaveBeenCalled();  // onStatsLoaded should not be called
  });

  it('should call loadStats if selectedFilters is truthy', () => {
    // Arrange
    const loadStatsSpy = spyOn(component, 'loadStats');
    component.selectedFilters = { 
        country: 'country-id',  // Add country
        supplychain: 'supplychain-id', 
        batch: 'batch-id', 
        farmerGroup: 'farmer-group-id'  // Add farmerGroup
    };  // Set selectedFilters to a valid object with all required properties

    // Act
    component.onTabSelected('OTHER_TAB');

    // Assert
    expect(loadStatsSpy).toHaveBeenCalled();  // loadStats should be called
});


  it('should update tableStatsArray based on the pagination data (offset and pageLimit)', () => {
    // Arrange
    const mockTableStats: IAssessmentData = {
      title: 'Sample Title',  //  Add required title
      description: 'Sample Description',  // Add required description
      indexes: [  //  Convert numbers to valid Items[]
        { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
        { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
        { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
        { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
        { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
        { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
        { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
        { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
        { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
        { name: 'Item 10', value: { mean: '100', median: '50', is_dual_value: 'false' } }
      ]
    };
    const pageLimit = 3; // Assuming the page limit is 3
    component.tableStats = mockTableStats;

    const paginatorData: IPaginator = { offset: 3, limit: pageLimit };  // Include limit and offset

    // Act
    component.pagination(paginatorData);

    // Assert
    expect(component.tableStatsArray).toEqual(mockTableStats.indexes.slice(3, 6));  //  Correct slicing
});


it('should handle pagination when the offset is at the end of the array', () => {
  // Arrange
  const mockTableStats: IAssessmentData = {
    title: 'Sample Title',  //  Add required title
    description: 'Sample Description',  //  Add required description
    indexes: [  //  Convert number array to valid Items[]
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
      { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
      { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
      { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
      { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
      { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
      { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
      { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
      { name: 'Item 10', value: { mean: '100', median: '50', is_dual_value: 'false' } }
    ]
  };
  const pageLimit = 3;  // Assuming the page limit is 3
  component.tableStats = mockTableStats;

  const paginatorData: IPaginator = { offset: 8, limit: pageLimit };  // Include limit and offset

  // Act
  component.pagination(paginatorData);

  // Assert
  expect(component.tableStatsArray).toEqual(mockTableStats.indexes.slice(8, 11));  //  Correct slicing
});


it('should handle empty tableStats.indexes correctly', () => {
  // Arrange
  component.tableStats = { 
    title: 'No Data',  //  Add required title
    description: 'No available indexes',  // Add required description
    indexes: []  //  Ensure this is an empty Items[] array
  };
  const paginatorData: IPaginator = { offset: 0, limit: 3 };  // Include limit and offset

  // Act
  component.pagination(paginatorData);

  // Assert
  expect(component.tableStatsArray).toEqual([]);  //  tableStatsArray should be empty as there is no data
});

it('should update tableStatsArray and decrease tableCurrentPage when previousTablePage is called', () => {
  // Arrange
  const mockTableStats: IAssessmentData = {
    title: 'Sample Title',  //  Add required title
    description: 'Sample Description',  //  Add required description
    indexes: [  //  Convert number array to valid Items[]
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
      { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
      { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
      { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
      { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
      { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
      { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
      { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
      { name: 'Item 10', value: { mean: '100', median: '50', is_dual_value: 'false' } }
    ]
  };
  const pageLimit = 3; // Assuming the page limit is 3
  component.tableStats = mockTableStats;
  component.tableCurrentPage = 3;  // Assume we are currently on page 3

  // Act
  component.previousTablePage();

  // Assert
  // The previous page should have a slice starting at index 3 and ending at index 6
  expect(component.tableStatsArray).toEqual(mockTableStats.indexes.slice(3, 6));  // Correct slicing
  expect(component.tableCurrentPage).toBe(2);  //  Current page should now be 2
});

  

it('should handle the first page correctly and not decrease tableCurrentPage below 1', () => {
  // Arrange
  const mockTableStats: IAssessmentData = {
    title: 'Sample Title', 
    description: 'Sample Description', 
    indexes: [
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } },
      { name: 'Item 3', value: { mean: '30', median: '15', is_dual_value: 'true' } },
      { name: 'Item 4', value: { mean: '40', median: '20', is_dual_value: 'false' } },
      { name: 'Item 5', value: { mean: '50', median: '25', is_dual_value: 'true' } },
      { name: 'Item 6', value: { mean: '60', median: '30', is_dual_value: 'false' } },
      { name: 'Item 7', value: { mean: '70', median: '35', is_dual_value: 'true' } },
      { name: 'Item 8', value: { mean: '80', median: '40', is_dual_value: 'false' } },
      { name: 'Item 9', value: { mean: '90', median: '45', is_dual_value: 'true' } },
      { name: 'Item 10', value: { mean: '100', median: '50', is_dual_value: 'false' } }
    ]
  };

  const pageLimit = 3;
  component.tableStats = mockTableStats;
  component.tableCurrentPage = 1;  // Start on the first page

  // Act
  component.previousTablePage();  // Go to the previous page (should not decrease below 1)

  // Assert
  expect(component.tableCurrentPage).toBe(1);  // Ensure tableCurrentPage stays at 1
});

  
  
it('should handle tableStats with fewer elements than the page limit', () => {
  // Arrange
  const mockTableStats: IAssessmentData = {
    title: 'Sample Title',  //  Add required title
    description: 'Sample Description',  // Add required description
    indexes: [  // Convert number array to valid Items[]
      { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } },
      { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } }
    ]
  };
  const pageLimit = 3; // Assuming the page limit is 3
  component.tableStats = mockTableStats;
  component.tableCurrentPage = 2;  // Assume we are on page 2

  // Act
  component.previousTablePage();

  // Assert
  // Since there are only 2 items, tableStatsArray should show all of them
  expect(component.tableStatsArray).toEqual([ { name: 'Item 1', value: { mean: '10', median: '5', is_dual_value: 'false' } }, 
                                               { name: 'Item 2', value: { mean: '20', median: '10', is_dual_value: 'false' } } ]);
  expect(component.tableCurrentPage).toBe(1);  // Current page should decrease to 1
});


  
});
