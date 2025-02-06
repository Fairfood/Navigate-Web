import { DashboardFilters } from 'src/app/pages/dashboard/dashboard.config';

export const createQueryParams = (filter: DashboardFilters): string => {
  return `?country=${filter.country}&supply_chain=${filter.supplychain}&batch=${filter.batch}`;
};
