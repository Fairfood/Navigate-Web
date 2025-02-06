import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setData', () => {
    it('should set deforestation data', () => {
      const testData = { value: 100 };
      service.setData(testData);
      expect(service.getDeforestationData()).toEqual(testData);
    });
  });

  describe('getDeforestationData', () => {
    it('should return deforestation data', () => {
      const testData = { value: 100 };
      service.setData(testData);
      expect(service.getDeforestationData()).toEqual(testData);
    });
  });

  describe('setCompanyData', () => {
    it('should set company data', () => {
      const companyData = { name: 'Company A' };
      service.setCompanyData(companyData);
      expect(service.getCompanyData()).toEqual(companyData);
    });
  });

  describe('getCompanyData', () => {
    it('should return company data', () => {
      const companyData = { name: 'Company A' };
      service.setCompanyData(companyData);
      expect(service.getCompanyData()).toEqual(companyData);
    });
  });
});
