import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {
  CarbonRemoved,
  Emissions,
  IResultData,
  Lip,
  LivingIncomePercentage,
} from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-price-gap',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './price-gap.component.html',
  styleUrls: ['./price-gap.component.scss'],
})
export class PriceGapComponent implements OnInit, OnDestroy {
  @Input() resultData: IResultData;
  dataLip: Lip;
  dataEmissions: Emissions;
  overall_valueLip: LivingIncomePercentage;
  overall_valueEmission: CarbonRemoved;
  indexArrayLip: any[] = [];
  indexArrayEmission: any[] = [];
  progress_bar: any[] = [];
  private unitSub: Subscription;
  unit: number;
  lipData = false;
  emissionsData = false;

  progressValue: number = 0;

  constructor(private dashboardService: DashboardService) {
    this.unitSub = this.dashboardService.meanOrMedian$.subscribe((value) => {
      this.unit = value;
      this.initData();
    });
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    // this.data = []
    // this.indexArray = []
    this.progress_bar = [];
    if (this.resultData?.standards?.lip) {
      this.lipData = true;
      const { lip } = this.resultData?.standards;
      this.dataLip = lip;

      const {
        living_income_percentage,
        current_pay,
        living_income,
        price_gap,
      } = lip?.indexes;
      this.overall_valueLip = living_income_percentage;
      this.indexArrayLip.push(current_pay, living_income, price_gap);

      const { progress_bar } = lip;
      this.progress_bar =
        this.unit == 2 ? progress_bar.median_bar : progress_bar.mean_bar;
      this.progressValue = Number(this.progress_bar[0].percentage);
    } else if (this.resultData?.standards?.emissions) {
      const { emissions } = this.resultData?.standards;
      this.dataEmissions = emissions;

      if (emissions?.indexes) {
        const { annual_variation, carbon_removed, current_year, past_year } =
          emissions.indexes;
        this.overall_valueEmission = carbon_removed;
        this.indexArrayEmission.push(past_year, current_year, annual_variation);
      }

      if (emissions?.progress_bar) {
        const progress_bar = emissions.progress_bar;
        this.progress_bar = progress_bar.mean_bar;
        this.progressValue = Number(this.progress_bar?.[0]?.percentage || 0);
        this.emissionsData = true;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.unitSub) {
      this.unitSub.unsubscribe();
    }
  }
}
