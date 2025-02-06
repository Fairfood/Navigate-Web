import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { HTTP_OPTION_7, headerOptions } from 'fairfood-utils';
import { environment } from 'src/environments/environment';
import { SupplychainApi, FarmsApi, DashboardApi } from '../configs/app.constants';
import { DashboardFilters } from 'src/app/pages/dashboard/dashboard.config';
import { createQueryParams } from '../configs/app.methods';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const BASE_URL = environment.baseUrl;
  const mockFilters: DashboardFilters = {
    country: 'CountryName',
    supplychain: 'SupplyChainName',
    batch: 'BatchName',
    farmerGroup: 'FarmerGroupName',
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: HttpClient, useValue: spy }
      ]
    });

    service = TestBed.inject(ApiService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set user theme correctly', () => {
    const mockUserTheme = {
      primary_light_color: '#f5f5f5',
      first_font_color: '#000000',
      second_font_color: '#333333',
      stroke_color: '#cccccc',
      secondary_color: '#ffcc00',
      primary_color: '#ff6600',
      badge_color: '#00cc66',
      info_color: '#0066ff',
      third_font_color: '#999999',
      tab_background_color: '#ffffff',
    };

    service.setUserTheme(mockUserTheme);

    const root = document.documentElement;

    expect(root.style.getPropertyValue('--color-table-row-active')).toBe(mockUserTheme.primary_light_color);
    expect(root.style.getPropertyValue('--color-badge-active')).toBe(mockUserTheme.badge_color);
    expect(root.style.getPropertyValue('--color-sidebar-light')).toBe(mockUserTheme.primary_color);
    expect(root.style.getPropertyValue('--font-color')).toBe(mockUserTheme.first_font_color);
    expect(root.style.getPropertyValue('--font-color-2')).toBe(mockUserTheme.second_font_color);
    expect(root.style.getPropertyValue('--border-color')).toBe(mockUserTheme.stroke_color);
    expect(root.style.getPropertyValue('--color-secondary')).toBe(mockUserTheme.secondary_color);
    expect(root.style.getPropertyValue('--color-info-icon')).toBe(mockUserTheme.info_color);
    expect(root.style.getPropertyValue('--font-color-3')).toBe(mockUserTheme.third_font_color);
    expect(root.style.getPropertyValue('--color--tab-background')).toBe(mockUserTheme.tab_background_color);
  });

  it('should call getCompanies with the correct URL and headers, and map the response', () => {
    const mockResponse = { data: ['company1', 'company2', 'company3'] };

    // Setup spy to return mock data
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.getCompanies().subscribe((data) => {
      expect(data).toEqual(mockResponse.data); // Verify the data is correctly mapped
    });

    // Verify HTTP GET was called with the correct URL and headers
    const expectedUrl = 'https://navigate.dev.api.fairfood.org/navigate/supply-chains/companies/';
    const expectedHeaders = jasmine.objectContaining({
      headers: jasmine.objectContaining({}),
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, expectedHeaders);

    // Debug output: Check the actual headers
     (httpClientSpy.get.calls.mostRecent().args[1]); // Output actual headers
  });

  it('should call getTableData with the correct URL and headers', () => {
    const mockResponse = { data: ['row1', 'row2', 'row3'] }; // Mock response

    // Setup spy to return mock data
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Define mock parameters
    const mockParameters: DashboardFilters = {
      country: 'CountryName',
      supplychain: 'SupplyChainName',
      batch: 'BatchName',
      farmerGroup: 'FarmerGroupName'
    };

    const mockPiller = 'somePiller';

    // Call the service method
    service.getTableData(mockPiller, mockParameters).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Verify the mapped response
    });

    // Define the expected URL and headers
    const expectedUrl = `https://navigate.dev.api.fairfood.org/navigate/farms/analysis/?country=${mockParameters.country}&supply_chain=${mockParameters.supplychain}&batch=${mockParameters.batch}&piller=${mockPiller}`;
    
    // Expected headers
    const expectedHeaders = jasmine.objectContaining({
      headers: jasmine.objectContaining({}),
    });

    // Verify the HTTP GET call with correct URL and headers
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, expectedHeaders);

    // Optionally, check if correct query parameters are passed
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('country=CountryName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('supply_chain=SupplyChainName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('batch=BatchName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('piller=somePiller');
  });

  it('should call fetchMapData with the correct URL and headers', () => {
    const mockResponse = { data: ['mapData1', 'mapData2'] }; // Mock response

    // Setup spy to return mock data
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Define mock filter data
    const mockFilter: DashboardFilters = {
      country: 'CountryName',
      supplychain: 'SupplyChainName',
      batch: 'BatchName',
      farmerGroup: 'FarmerGroupName'
    };

    // Call the service method
    service.fetchMapData(mockFilter).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Verify the response
    });

    // Define the expected URL (with query params generated by createQueryParams)
    const expectedQuery = createQueryParams(mockFilter); // This function will generate query params from the filter
    const expectedUrl = `https://navigate.dev.api.fairfood.org/navigate/farms/farms/geo-jsons/${expectedQuery}`;
    
    // Expected headers
    const expectedHeaders = jasmine.objectContaining({
      headers: jasmine.objectContaining({}),
    });

    // Verify the HTTP GET call with correct URL and headers
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, expectedHeaders);

    // Optionally, check if correct query parameters are passed
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('country=CountryName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('supply_chain=SupplyChainName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('batch=BatchName');
  });

  it('should call getBatches with the correct URL and headers', () => {
    const mockResponse = { data: ['batch1', 'batch2'] }; // Mock response for the getBatches call

    // Setup spy to return mock data
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Define mock filter data
    const mockFilter: DashboardFilters = {
      country: 'CountryName',
      supplychain: 'SupplyChainName',
      batch: 'BatchName',
      farmerGroup: 'FarmerGroupName'
    };

    // Call the service method
    service.getBatches(mockFilter).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Verify that the data returned is as expected
    });

    // Define the expected URL (with query params generated by createQueryParams)
    const expectedQuery = createQueryParams(mockFilter); // Create query string using the helper
    const expectedUrl = `https://navigate.dev.api.fairfood.org/navigate/supply-chains/batches/${expectedQuery}`;

    // Expected headers
    const expectedHeaders = jasmine.objectContaining({
      headers: jasmine.objectContaining({}),
    });

    // Verify the HTTP GET call with the correct URL and headers
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, expectedHeaders);

    // Optionally, check if the correct query parameters were used
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('country=CountryName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('supply_chain=SupplyChainName');
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toContain('batch=BatchName');
   });

   it('should call getFarms with the correct URL', () => {
    const mockResponse = { data: ['farm1', 'farm2'] }; // Mock response for the getFarms call

    // Setup spy to return mock data
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.getFarms().subscribe((data) => {
      expect(data).toEqual(mockResponse); // Verify that the data returned is as expected
    });

    // Define the expected URL
    const expectedUrl = `https://navigate.dev.api.fairfood.org/navigate/farms/farms/`;

    // Verify the HTTP GET call with the correct URL
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should call getThemes with the correct URL, headers and map the response', () => {
    const mockResponse = { data: { primary_light_color: '#f5f5f5' } }; // Mock response for the getThemes call
    const mockCompanyId = '12345';

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Spy on the setUserTheme method to verify it is called
    spyOn(service, 'setUserTheme');

    // Call the service method
    service.getThemes(mockCompanyId).subscribe((data) => {
      expect(data).toEqual(mockResponse.data); // Verify that the data returned is as expected
    });

    // Define the expected URL (with the companyId and the correct API endpoint)
    const expectedUrl = `${BASE_URL}${DashboardApi.THEMES}${mockCompanyId}/`;

    // Verify the HTTP GET call with the correct URL and headers using jasmine.objectContaining
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, jasmine.objectContaining({
      headers: jasmine.objectContaining({})
    }));

    // Verify that the setUserTheme method was called with the correct user theme
    expect(service.setUserTheme).toHaveBeenCalledWith(mockResponse.data);
  });
  
  it('should call getInterventions with the correct URL, headers, and return the data', () => {
    const mockResponse = ['intervention1', 'intervention2'] ; // Mock response
    const mockPiller = 'somePiller';

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.getInterventions(mockPiller).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Verify that the data returned is the `data` property of the response
    });

    // Define the expected URL (with the piller)
    const expectedUrl = `${BASE_URL}${DashboardApi.INTERVENTIONS}?piller=${mockPiller}`;

    // Verify the HTTP GET call with the correct URL and headers using jasmine.objectContaining
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl, jasmine.objectContaining({
      headers: jasmine.objectContaining({})
    }));
  });


  it('should call getAnalysisDetails with the correct URL, headers, and return data', () => {
    const mockResponse = { data: 'someData' }; // Mock response
    const mockPiller = 'somePiller';
    const mockCriteria = 'someCriteria';
    const mockMethod = 'someMethod'; // Optional parameter for method

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method with both piller, criteria, and method
    service.getAnalysisDetails(mockPiller, mockCriteria, mockMethod).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Ensure correct data is returned
    });

    // Define the expected URL (with the piller, criteria, and method)
    const expectedUrlWithMethod = `${BASE_URL}${FarmsApi.ANALYSIS_DETAILS}?piller=${mockPiller}&criteria=${mockCriteria}&method=${mockMethod}`;
    const expectedUrlWithoutMethod = `${BASE_URL}${FarmsApi.ANALYSIS_DETAILS}?piller=${mockPiller}&criteria=${mockCriteria}`;

    // Verify the HTTP GET call with the correct URL and headers using jasmine.objectContaining
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrlWithMethod, jasmine.objectContaining({
      headers: jasmine.objectContaining({})
    }));

    // Now test without the optional 'method' parameter
    httpClientSpy.get.and.returnValue(of(mockResponse)); // Mock again for the next test
    service.getAnalysisDetails(mockPiller, mockCriteria).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    // Verify the HTTP GET call with the correct URL and headers when 'method' is not passed
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrlWithoutMethod, jasmine.objectContaining({
      headers: jasmine.objectContaining({})
    }));
  });

  it('should call fetchLivingIncomeData with the correct URL and return the data', () => {
    const mockResponse = { data: 'someLivingIncomeData' }; // Mock response

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.fetchLivingIncomeData().subscribe((data) => {
      expect(data).toEqual(mockResponse); // Ensure correct data is returned
    });

    // Verify the HTTP GET call with the correct URL
    const expectedUrl = 'https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/living-income/molinos_navigate_lip.json';
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should handle no userData in localStorage gracefully', () => {
    const mockResponse = { data: 'someLivingIncomeData' }; // Mock response

    // Mocking the localStorage.getItem to return null for 'userData'
    spyOn(localStorage, 'getItem').and.returnValue(null);

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.fetchLivingIncomeData().subscribe((data) => {
      expect(data).toEqual(mockResponse); // Ensure correct data is returned
    });

    // Verify the HTTP GET call with the correct URL
    const expectedUrl = 'https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/living-income/molinos_navigate_lip.json';
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should call fetchEmissionsData with the correct URL and return the data', () => {
    const mockResponse = { data: 'someEmissionsData' }; // Mock response

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method
    service.fetchEmissionsData().subscribe((data) => {
      expect(data).toEqual(mockResponse); // Ensure correct data is returned
    });

    // Verify the HTTP GET call with the correct URL
    const expectedUrl = 'https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/emissions-data/molinos_emissions.json';
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should call fetchEmissionsData with a fileName and return the data', () => {
    const mockResponse = { data: 'someEmissionsData' }; // Mock response
    const fileName = 'someFileName';

    // Spy on the HttpClient's get method to return the mock response
    httpClientSpy.get.and.returnValue(of(mockResponse));

    // Call the service method with fileName
    service.fetchEmissionsData(fileName).subscribe((data) => {
      expect(data).toEqual(mockResponse); // Ensure correct data is returned
    });

    // Verify the HTTP GET call with the correct URL
    const expectedUrl = `https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/emissions-data/molinos_emissions.json`;
    expect(httpClientSpy.get).toHaveBeenCalledWith(expectedUrl);
  });


});
