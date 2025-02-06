import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { HTTP_OPTION_7, headerOptions } from 'fairfood-utils';
import {
  SupplychainApi,
  FarmsApi,
  DashboardApi,
} from '../configs/app.constants';
import { DashboardFilters } from 'src/app/pages/dashboard/dashboard.config';
import { createQueryParams } from '../configs/app.methods';
const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  setUserTheme(userTheme: any): void {
    const {
      primary_light_color,
      first_font_color,
      second_font_color,
      stroke_color,
      secondary_color,
      primary_color,
      badge_color,
      info_color,
      third_font_color,
      tab_background_color,
      // background,
      // pillar_background,
      // card_warning,
      // gender_background
    } = userTheme;
    const root = document.documentElement;
    root.style.setProperty('--color-table-row-active', primary_light_color);
    root.style.setProperty('--color-badge-active', badge_color);
    root.style.setProperty('--color-sidebar-light', primary_color);
    root.style.setProperty('--font-color', first_font_color);
    root.style.setProperty('--font-color-2', second_font_color);
    root.style.setProperty('--border-color', stroke_color);
    root.style.setProperty('--color-secondary', secondary_color);
    root.style.setProperty('--color-info-icon', info_color);
    root.style.setProperty('--font-color-3', third_font_color);
    root.style.setProperty('--color--tab-background', tab_background_color);

    // root.style.setProperty('--color-bg-2', background);
    // root.style.setProperty('--color-pillar-background', pillar_background);
    // root.style.setProperty('--color-card-warning', card_warning);
    // root.style.setProperty('--color-background-gender-2', gender_background);
  }

  fetchMapData(filter: DashboardFilters): Observable<any> {
    const query = createQueryParams(filter);
    return this.http.get(
      `${BASE_URL}${FarmsApi.MAPDATA}${query}`,
      headerOptions(HTTP_OPTION_7)
    );
  }
  /**
   * The function `getTableData` makes an HTTP GET request to retrieve farm analysis data based on a
   * specified piller parameter.
   **/
  getTableData(piller: string, parameters: DashboardFilters): Observable<any> {
    const query = `${createQueryParams(parameters)}&piller=${piller}`;
    return this.http.get(
      `${BASE_URL}${FarmsApi.ANALYSIS}${query}`,
      headerOptions(HTTP_OPTION_7)
    );
  }

  /**
   * This function retrieves company's data.
   **/
  getCompanies(): Observable<any> {
    return this.http
      .get(`${BASE_URL}${SupplychainApi.COMPANY}`, headerOptions(HTTP_OPTION_7))
      .pipe(map((res: any) => res.data));
  }

  /**
   * The function `getBatches` retrieve batches.
   **/
  getBatches(parameters: DashboardFilters): Observable<any> {
    const query = createQueryParams(parameters);
    return this.http.get(
      `${BASE_URL}${SupplychainApi.BATCHES}${query}`,
      headerOptions(HTTP_OPTION_7)
    );
  }

  /**
   * This function retrieves a list of farms
   **/
  getFarms(): Observable<any> {
    return this.http.get(`${BASE_URL}${FarmsApi.FARMS}`);
  }

  /**
   * The function `getStats` makes an HTTP GET request to retrieve stats for a specific piller
   * from a farm API.
   **/
  getStats(piller: string, parameters: any): Observable<any> {
    const query = `${createQueryParams(parameters)}&piller=${piller}`;
    return this.http.get(
      `${BASE_URL}${FarmsApi.STATS}${query}`,
      headerOptions(HTTP_OPTION_7)
    );
  }

  /**
   * The function `getThemes` makes an HTTP GET request to retrieve themes for a specific company ID
   * and sets the user's theme based on the response.
   **/
  getThemes(companyId: string): Observable<any> {
    return this.http
      .get(
        `${BASE_URL}${DashboardApi.THEMES}${companyId}/`,
        headerOptions(HTTP_OPTION_7)
      )
      .pipe(
        map((res: any) => res.data),
        tap((res: any) => {
          const userTheme = res;
          this.setUserTheme(userTheme);
        })
      );
  }

  /**
   * The function `getInterventions` makes an HTTP GET request to retrieve interventions based on a
   * specified piller parameter.
   **/
  getInterventions(piller: string): Observable<any> {
    return this.http.get(
      `${BASE_URL}${DashboardApi.INTERVENTIONS}?piller=${piller}`,
      headerOptions(HTTP_OPTION_7)
    );
  }

  /**
   * Retrieves analysis details for farms based on specified criteria and
   * piller, with an optional method parameter.
   **/
  getAnalysisDetails(
    piller: string,
    criteria: string,
    method?: string
  ): Observable<any> {
    const url =
      `${BASE_URL}${FarmsApi.ANALYSIS_DETAILS}?piller=${piller}&criteria=${criteria}` +
      (method ? `&method=${method}` : '');
    return this.http.get(url, headerOptions(HTTP_OPTION_7));
  }


  fetchLivingIncomeData(): Observable<any> {
    const username = localStorage.getItem('userData');
    return this.http
      .get(
        `https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/living-income/molinos_navigate_lip.json`
      )
      // .get('assets/molinos_navigate_lip.json')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  fetchEmissionsData(fileName?: string): Observable<any> {
    return this.http
      .get(
        `https://s3.eu-central-1.amazonaws.com/navigate.fairfood.org/navigate-data/emissions-data/molinos_emissions.json`
      )
      // .get(`assets/ndugu_navigate_emissions.json`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getCompanyData(): Observable<any> {
    return this.http.get(
      `${BASE_URL}${SupplychainApi.COMPANY_LIST}`,
      headerOptions(HTTP_OPTION_7)
    );
  }
}
