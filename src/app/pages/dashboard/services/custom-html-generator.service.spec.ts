import { TestBed } from '@angular/core/testing';
import { CustomHtmlGeneratorService } from './custom-html-generator.service';

describe('CustomHtmlGeneratorService', () => {
  let service: CustomHtmlGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHtmlGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generatePopupScript', () => {
    it('should generate a script with the provided popup data', () => {
      const popupData = [
        { 
          title: 'Sample Title', 
          description: 'Sample Description', 
          table: {
            head: ['Column1', 'Column2'],
            rows: [
              { id: 'Row1', values: ['Value1', 'Value2'], details: [{ imageUrl: '', title: 'Detail1', description: 'Description1', source: 'Source1' }] }
            ]
          }
        }
      ];
      const result = service.generatePopupScript(popupData);
      expect(result).toContain('const popupData =');
      expect(result).toContain(JSON.stringify(popupData));
    });

    it('should contain required functions in the script', () => {
      const popupData =  [
        { "name": "Number of locations", "value": 200 },
        { "name": "Tree Cover Extent", "value": "55.15%" },
        { "name": "Primary Forest", "value": "0%" },
        { "name": "Protected Area", "value": "10.19%" },
        { "name": "Total Hectares", "value": 29828.98 },
      ];;
      const result = service.generatePopupScript(popupData);
      expect(result).toContain('function openDetails(data)');
      expect(result).toContain('function closeDialog()');
      expect(result).toContain('function populateTableRows(values)');
    });
  });

  describe('generatePaginatedContent', () => {
    it('should generate paginated content with the correct number of pages', () => {
      const deforestationData = [
        { name: 'Item1', value: 'Value1' },
        { name: 'Item2', value: 'Value2' },
        { name: 'Item3', value: 'Value3' },
        { name: 'Item4', value: 'Value4' }
      ];
      const result = service.generatePaginatedContent(deforestationData);
      const totalPages = Math.ceil(deforestationData.length / 3); // Default page size is 3
      for (let i = 0; i < totalPages; i++) {
        expect(result).toContain(`id="deforestation-list-${i + 1}"`);
      }
    });

    it('should include pagination controls', () => {
      const deforestationData =  [
        { "name": "Number of locations", "value": 200 },
        { "name": "Tree Cover Extent", "value": "55.15%" },
        { "name": "Primary Forest", "value": "0%" },
        { "name": "Protected Area", "value": "10.19%" },
        { "name": "Total Hectares", "value": 29828.98 },
      ];;
      const result = service.generatePaginatedContent(deforestationData);
      expect(result).toContain('id="prevButton"');
      expect(result).toContain('id="nextButton"');
      expect(result).toContain('id="paginationInfo"');
    });

    
  });
});
