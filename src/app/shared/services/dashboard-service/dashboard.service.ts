import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardFilters } from '../../../pages/dashboard/dashboard.config';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  initalFilters: DashboardFilters = {
    country: '',
    supplychain: '',
    batch: '',
    farmerGroup:''
  };

  private selectedTab: BehaviorSubject<any> = new BehaviorSubject<any>(
    'DEFORESTATION'
  );
  private companiesDataSubject = new BehaviorSubject<any>(null);

  companiesData$ = this.companiesDataSubject.asObservable();

  private selectedFilters: BehaviorSubject<DashboardFilters> =
    new BehaviorSubject<DashboardFilters>(this.initalFilters);

  private meanMedianSubject = new BehaviorSubject<number>(1);
  meanOrMedian$ = this.meanMedianSubject.asObservable();

  private SelectedCompanySubject = new BehaviorSubject<string>('');
  SelectedCompanyId$ = this.SelectedCompanySubject.asObservable();

  SelectedCompanyId(value: string): void {
    this.SelectedCompanySubject.next(value);
  }

  setUnit(value: number): void {
    this.meanMedianSubject.next(value);
  }


  /**
   * The function `updateSelectedTab` updates the selected tab with the provided data.
   **/
  updateSelectedTab(data: any): void {
    this.selectedTab.next(data);
  }

  /**
   * This function returns an Observable that emits the current value of the selectedTab subject.
   */
  selectedTab$(): Observable<any> {
    return this.selectedTab.asObservable();
  }

  /**
   * The function `setCompaniesData` sets the data for companies using a Subject in TypeScript.
   **/
  setCompaniesData(data: any) {
    this.companiesDataSubject.next(data);
  }

  updateFilter(key: keyof DashboardFilters, value: string | '') {
    const currentFilters = this.selectedFilters.value;
    if (key != 'batch') {
      currentFilters.batch = '';
    }
    const updatedFilters = {
      ...currentFilters,
      [key]: value,
    };
    this.emitNewFilters(updatedFilters);
  }

  selectedFilters$(): Observable<any> {
    return this.selectedFilters.asObservable();
  }

  emitNewFilters(filters: DashboardFilters) {
    this.selectedFilters.next(filters);
  }
}
