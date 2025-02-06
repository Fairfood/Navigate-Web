export enum ApplicationApi {
  TOKEN = `o/oauth2/token/`,
}

export enum FarmsApi{
  MAPDATA=`/farms/farms/geo-jsons/`,
  ANALYSIS=`/farms/analysis/`,
  FARMS=`/farms/farms/`,
  STATS=`/farms/stats/`,
  ANALYSIS_DETAILS=`/farms/analysis/details/`
}

export enum SupplychainApi{
  COMPANY=`/supply-chains/companies/`,
  BATCHES=`/supply-chains/batches/`,
  COMPANY_LIST=`/supply-chains/user-info/`
}

export enum DashboardApi{
  THEMES=`/dashboard/themes/`,
  INTERVENTIONS=`/dashboard/interventions/`
}

export const HTTP_OPTION_7 = {
  token: false,
  contentType: true,
};

export const LOADER_TEXT = {
  authText: 'Authenticating',
  fetchText: 'Fetching data'
}