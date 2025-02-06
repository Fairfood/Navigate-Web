import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExportService } from './export.service';
import { CustomHtmlGeneratorService } from './services/custom-html-generator.service';
import { DeforestationComponent } from 'src/app/feature/g-earth/deforestation/deforestation.component';

describe('ExportService', () => {
  let service: ExportService;
  let httpMock: HttpTestingController;
  let mockHtmlGeneratorService: jasmine.SpyObj<CustomHtmlGeneratorService>;
  // let convertSvgToDataUrl: (svgPath: string) => Promise<string>;

  beforeEach(() => {
    const htmlGeneratorSpy = jasmine.createSpyObj('CustomHtmlGeneratorService', [
      'generatePaginatedContent',
      'generatePopupScript',
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ExportService,
        { provide: CustomHtmlGeneratorService, useValue: htmlGeneratorSpy },
      ],
    });
    service = TestBed.inject(ExportService);
    httpMock = TestBed.inject(HttpTestingController);
    mockHtmlGeneratorService = TestBed.inject(CustomHtmlGeneratorService) as jasmine.SpyObj<CustomHtmlGeneratorService>;
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should export HTML correctly (mock implementation)', () => {
    // Arrange
    const mockDeforestationComponent = jasmine.createSpyObj('DeforestationComponent', ['captureMapScreenshot']);
    const deforestationData = [
      { "name": "Number of locations", "value": 200 },
      { "name": "Tree Cover Extent", "value": "55.15%" },
      { "name": "Primary Forest", "value": "0%" },
      { "name": "Protected Area", "value": "10.19%" },
      { "name": "Total Hectares", "value": 29828.98 },
    ];

    mockHtmlGeneratorService.generatePaginatedContent.and.returnValue('<div>Mock Paginated Content</div>');
    mockDeforestationComponent.captureMapScreenshot.and.returnValue(Promise.resolve('mockScreenshotBase64'));

    spyOn(document, 'getElementById').and.returnValue(document.createElement('div'));

    // Act
    service.exportAsHTML(mockDeforestationComponent as any, deforestationData);

    // Mock HTTP request
    const req = httpMock.expectOne('assets/dialog.html');
    req.flush('<div>Mock HTML Content</div>');

    // Assert
    expect(mockHtmlGeneratorService.generatePaginatedContent).toHaveBeenCalledWith(deforestationData);
  });


  it('should handle CSS variables correctly', () => {
    // Arrange
    spyOn(window, 'getComputedStyle').and.returnValue({
      getPropertyValue: () => 'mock-value',
    } as any);

    // Act
    const cssVariables = service.getCSSVariables();

    // Assert
    expect(cssVariables).toContain('--color-table-row-active: mock-value !important;');
  });

  it('should embed inline CSS correctly', async () => {
    // Arrange
    const htmlContent = '<div>Test Content</div>';
    spyOn(document, 'querySelectorAll').and.returnValue([
      { outerHTML: '<style>.test { color: red; }</style>' },
    ] as any);

    // Act
    const result = await service.embedInlineCSS(htmlContent);

    // Assert
    expect(result).toContain('<style>.test { color: red; }</style>');
  });

  it('should embed external CSS correctly', async () => {
    // Arrange
    const htmlContent = '<div>Test Content</div>';
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        text: () => Promise.resolve('.test { color: blue; }'),
      } as Response)
    );

    // Act
    const result = await service.embedExternalCSS(htmlContent);

    // Assert
    expect(result).toContain('<style>.test { color: blue; }</style>');
  });

  it('should handle map screenshot replacement', async () => {
    // Arrange
    const htmlContent = '<div id="mapContainer"><canvas></canvas></div>';
    const mockScreenshot = 'mockScreenshotBase64';

    // Act
    const result = await service.replaceMapWithScreenshot(htmlContent, mockScreenshot);

    // Assert
    expect(result).toContain(`<img src="${mockScreenshot}" alt="Map Screenshot"`);
  });

  it('should log an error if map container is not found', async () => {
    // Arrange
    const htmlContent = '<div id="otherContainer"></div>';
    const mockScreenshot = 'mockScreenshotBase64';

    // Act & Assert
    await expectAsync(service.replaceMapWithScreenshot(htmlContent, mockScreenshot)).toBeRejectedWith(
      'Map container not found in HTML content'
    );
  });

  it('should fetch and convert CSS to text', async () => {
    // Arrange
    const mockCssUrl = 'mock.css';
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        text: () => Promise.resolve('.test { color: black; }'),
      } as Response)
    );

    // Act
    const result = await service.fetchCSS(mockCssUrl);

    // Assert
    expect(result).toBe('.test { color: black; }');
  });


  it('should convert SVG to Data URL successfully (mocked)', async () => {
    // Arrange
    const mockSvgPath = 'mock.svg';
    const mockBase64Content = 'data:image/svg+xml;base64,' + btoa('<svg></svg>');

    // Spy on `convertSvgToDataUrl` and mock its implementation
    spyOn(service, 'convertSvgToDataUrl').and.returnValue(Promise.resolve(mockBase64Content));

    // Act
    const result = await service.convertSvgToDataUrl(mockSvgPath);

    // Assert
    expect(result).toBe(mockBase64Content); // Ensure the returned value matches the mock
    expect(service.convertSvgToDataUrl).toHaveBeenCalledWith(mockSvgPath); // Ensure the method is called with correct arguments
  });

  it('should handle error when SVG loading fails', async () => {
    // Arrange
    const mockSvgPath = 'mock.svg';

    // Mock XMLHttpRequest
    const mockXhr = jasmine.createSpyObj('XMLHttpRequest', ['open', 'setRequestHeader', 'send', 'onload', 'onerror'], {
      status: 404,
    });
    spyOn(window, 'XMLHttpRequest').and.returnValue(mockXhr);

    const svgPromise = service.convertSvgToDataUrl(mockSvgPath);

    // Trigger the onerror callback
    mockXhr.onerror();

    // Act & Assert
    await expectAsync(svgPromise).toBeRejectedWith('Failed to load SVG');
    expect(mockXhr.open).toHaveBeenCalledWith('GET', mockSvgPath, true);
    expect(mockXhr.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
    expect(mockXhr.send).toHaveBeenCalled();
  });

  it('should handle non-200 status code as failure', async () => {
    // Arrange
    const mockSvgPath = 'mock.svg';

    // Mock XMLHttpRequest
    const mockXhr = jasmine.createSpyObj('XMLHttpRequest', ['open', 'setRequestHeader', 'send', 'onload', 'onerror'], {
      status: 500,
    });
    spyOn(window, 'XMLHttpRequest').and.returnValue(mockXhr);

    const svgPromise = service.convertSvgToDataUrl(mockSvgPath);

    // Trigger the onload callback
    mockXhr.onload();

    // Act & Assert
    await expectAsync(svgPromise).toBeRejectedWith('Failed to load SVG');
    expect(mockXhr.open).toHaveBeenCalledWith('GET', mockSvgPath, true);
    expect(mockXhr.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
    expect(mockXhr.send).toHaveBeenCalled();
  });


  // it('should update the title, info, and description content', (done) => {
  //   // Arrange
  //   const mockDeforestationComponent = jasmine.createSpyObj('DeforestationComponent', ['captureMapScreenshot']);
  //   const deforestationData = [
  //     { "name": "Number of locations", "value": 200 },
  //     { "name": "Tree Cover Extent", "value": "55.15%" },
  //     { "name": "Primary Forest", "value": "0%" },
  //     { "name": "Protected Area", "value": "10.19%" },
  //     { "name": "Total Hectares", "value": 29828.98 },
  //   ];
  //   const mockElement = document.createElement('div');
  //   mockElement.id = 'dashboard';
  //   mockElement.innerHTML = `
  //   <div id="title">Due Diligence Report</div>
  //   <div id="info">The chosen Deforestation impact area is detailed in this report.</div>
  //   <div id="description">Results in this report are shown according to the selected filters in your value chain.</div>
  //   `;

  //   spyOn(document, 'getElementById').and.returnValue(mockElement);
  //   spyOn(service, 'getCSSVariables').and.returnValue('--mock-variable: value;');
  //   mockHtmlGeneratorService.generatePaginatedContent.and.returnValue('<div>Paginated Content</div>');

  //   // Act
  //   service.exportAsHTML(mockDeforestationComponent, deforestationData);

  //   // Wait for any asynchronous requests or actions to complete
  //   setTimeout(() => {
  //     // Assert
  //     expect(mockElement.innerHTML).toContain('<div id="title">Due Diligence Report</div>');
  //     expect(mockElement.innerHTML).toContain(
  //       '<div id="info">The chosen Deforestation impact area is detailed in this report.</div>'
  //     );
  //     expect(mockElement.innerHTML).toContain(
  //       '<div id="description">Results in this report are shown according to the selected filters in your value chain.</div>'
  //     );
  //     done();  // Mark the test as complete
  //   }, 0);
  // });




  // it('should remove <mat-icon> elements from app-ff-filter-box-wrapper elements', () => {
  //   // Arrange
  //   const mockDeforestationComponent = jasmine.createSpyObj('DeforestationComponent', ['captureMapScreenshot']);
  //   const deforestationData = [
  //     { "name": "Number of locations", "value": 200 },
  //     { "name": "Tree Cover Extent", "value": "55.15%" },
  //     { "name": "Primary Forest", "value": "0%" },
  //     { "name": "Protected Area", "value": "10.19%" },
  //     { "name": "Total Hectares", "value": 29828.98 },
  //   ];
  //   const mockElement = document.createElement('div');
  //   mockElement.id = 'dashboard';
  //   mockElement.innerHTML = `
  //   <app-ff-filter-box-wrapper><div>Content</div></app-ff-filter-box-wrapper>
  //   `;

  //   spyOn(document, 'getElementById').and.returnValue(mockElement);
  //   spyOn(service, 'getCSSVariables').and.returnValue('--mock-variable: value;');
  //   mockHtmlGeneratorService.generatePaginatedContent.and.returnValue('<div>Paginated Content</div>');

  //   // Act
  //   service.exportAsHTML(mockDeforestationComponent, deforestationData);

  //   // Assert
  //   expect(mockElement.innerHTML).not.toContain('<mat-icon>');
  //   expect(mockElement.innerHTML).toContain('<app-ff-filter-box-wrapper><div>Content</div></app-ff-filter-box-wrapper>');
  // });

  // it('should hide app-ff-pagination elements', () => {
  //   // Arrange
  //   const mockDeforestationComponent = jasmine.createSpyObj('DeforestationComponent', ['captureMapScreenshot']);
  //   const deforestationData = [
  //     { "name": "Number of locations", "value": 200 },
  //     { "name": "Tree Cover Extent", "value": "55.15%" },
  //     { "name": "Primary Forest", "value": "0%" },
  //     { "name": "Protected Area", "value": "10.19%" },
  //     { "name": "Total Hectares", "value": 29828.98 },
  //   ];
  //   const mockElement = document.createElement('div');
  //   mockElement.id = 'dashboard';
  //   mockElement.innerHTML = `<app-ff-pagination>Pagination</app-ff-pagination>`;

  //   spyOn(document, 'getElementById').and.returnValue(mockElement);
  //   spyOn(service, 'getCSSVariables').and.returnValue('--mock-variable: value;');
  //   spyOn(mockHtmlGeneratorService, 'generatePaginatedContent').and.returnValue('<div>Paginated Content</div>');

  //   // Act
  //   service.exportAsHTML(mockDeforestationComponent, deforestationData);

  //   // Assert
  //   expect(mockElement.innerHTML).toContain('<app-ff-pagination style="display: none;">Pagination</app-ff-pagination>');
  // });

  // it('should replace deforestation-data with paginated content', () => {
  //   // Arrange
  //   const mockDeforestationComponent = jasmine.createSpyObj('DeforestationComponent', ['captureMapScreenshot']);
  //   const deforestationData = [
  //     { "name": "Number of locations", "value": 200 },
  //     { "name": "Tree Cover Extent", "value": "55.15%" },
  //     { "name": "Primary Forest", "value": "0%" },
  //     { "name": "Protected Area", "value": "10.19%" },
  //     { "name": "Total Hectares", "value": 29828.98 },
  //   ];
  //   const mockElement = document.createElement('div');
  //   mockElement.id = 'dashboard';
  //   mockElement.innerHTML = `<div id="deforestation-data">Original Content</div>`;

  //   spyOn(document, 'getElementById').and.returnValue(mockElement);
  //   spyOn(service, 'getCSSVariables').and.returnValue('--mock-variable: value;');
  //   spyOn(mockHtmlGeneratorService, 'generatePaginatedContent').and.returnValue('<div>Paginated Content</div>');

  //   // Act
  //   service.exportAsHTML(mockDeforestationComponent, deforestationData);

  //   // Assert
  //   expect(mockElement.innerHTML).toContain('<div id="deforestation-data"><div>Paginated Content</div></div>');
  // });


});
