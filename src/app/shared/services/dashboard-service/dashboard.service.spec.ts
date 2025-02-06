import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { DashboardFilters } from '../../../pages/dashboard/dashboard.config';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateSelectedTab', () => {
    it('should update the selectedTab BehaviorSubject', () => {
      const newTab = 'SUSTAINABILITY';
      service.updateSelectedTab(newTab);
      service.selectedTab$().subscribe((tab) => {
        expect(tab).toBe(newTab);
      });
    });
  });

  describe('setCompaniesData', () => {
    it('should set the companies data and emit the new value', () => {
      const data = { name: 'Company A', id: 1 };
      service.setCompaniesData(data);
      service.companiesData$.subscribe((result) => {
        expect(result).toEqual(data);
      });
    });
  });

  describe('updateFilter', () => {
    it('should update the selected filters and reset batch if key is not batch', () => {
      const initialFilters: DashboardFilters = {
        country: '',
        supplychain: '',
        batch: '',
        farmerGroup: ''
      };
      service.updateFilter('country', 'USA');
      service.selectedFilters$().subscribe((filters) => {
        expect(filters.country).toBe('USA');
        expect(filters.batch).toBe('');
      });
    });

    it('should keep the batch value if key is batch', () => {
      const initialFilters: DashboardFilters = {
        country: '',
        supplychain: '',
        batch: '',
        farmerGroup: ''
      };
      service.updateFilter('batch', '12345');
      service.selectedFilters$().subscribe((filters) => {
        expect(filters.batch).toBe('12345');
      });
    });
  });

  describe('setUnit', () => {
    it('should set the unit value', () => {
      const unitValue = 2;
      service.setUnit(unitValue);
      service.meanOrMedian$.subscribe((value) => {
        expect(value).toBe(unitValue);
      });
    });
  });

  describe('SelectedCompanyId', () => {
    it('should update the SelectedCompanySubject', () => {
      const companyId = '12345';
      service.SelectedCompanyId(companyId);
      service.SelectedCompanyId$.subscribe((id) => {
        expect(id).toBe(companyId);
      });
    });
  });
});
