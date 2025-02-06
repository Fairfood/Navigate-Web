import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
// components
import { ButtonsComponent, LoaderComponent } from 'fairfood-utils';
import {
  FairFoodInputComponent,
  FfDropdownComponent,
  FfFilterBoxWrapperComponent,
} from 'fairfood-form-components';
import { GEarthComponent } from '../../feature/g-earth/g-earth.component';
import { DeforestationTableComponent } from '../../feature/deforestation-table/deforestation-table.component';
import { InterventionListComponent } from '../../feature/intervention-list/intervention-list.component';
import { CardInfoComponent } from '../../feature/card-info/card-info.component';
import { MapTabComponent } from 'src/app/feature/map-tab/map-tab.component';
import { SummaryComponent } from 'src/app/feature/summary/summary.component';
import { DeforestationComponent } from 'src/app/feature/g-earth/deforestation/deforestation.component';


export const COMP_IMPORTS = [
  NgIf,
  FfDropdownComponent,
  FfFilterBoxWrapperComponent,
  ReactiveFormsModule,
  FairFoodInputComponent,
  MatIconModule,
  LoaderComponent,
  GEarthComponent,
  DeforestationTableComponent,
  InterventionListComponent,
  CardInfoComponent,
  MapTabComponent,
  SummaryComponent,
  ButtonsComponent,
  DeforestationComponent,
];


export interface DashboardFilters {
  country: string;
  supplychain: string;
  batch: string;
  farmerGroup:string;
}
