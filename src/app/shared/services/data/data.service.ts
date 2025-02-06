import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  deforestationData: any
  companyData:any

  constructor() { }

  setData(data: any): void {
    this.deforestationData = data
  }

  getDeforestationData(): any {
    return this.deforestationData
  }

  setCompanyData(data: any): void {
    this.companyData = data
  }

  getCompanyData(): any {
    return this.companyData
  }
}
