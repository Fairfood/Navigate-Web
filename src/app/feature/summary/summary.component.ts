import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SummaryGraphComponent } from './summary-graph/summary-graph.component';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FarmersParticipated, Female, GenderBar, HouseHoldSize, IGraphData, ISummaryData, LipFarmers, Male, PlotSize, Tiles } from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, SummaryGraphComponent,MatTooltipModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  @Input() graphData: IGraphData
  @Input() summaryData: ISummaryData

  private readonly dashboardService = inject(DashboardService);

  farmers_participated: FarmersParticipated

  title = 'Summary'
  description = 'Honduras has 10 million inhabitants with 58% urban and 42% rural distribution. Agriculture employs 25% of the workforce and contributes 13% to GDP.'
  progressValue = 0
  female_farmers: Female;
  male_farmers: Male;
  // female_ratio: any;
  male_female_ratio: GenderBar;
  // male_ratio: any;
  plot_size: PlotSize;
  // total_coops: any;
  // total_farmers: any;
  tiles: Tiles;
  // national_avg_plot_size: any;
  private unitSub: Subscription;
  unit: number
  lip_farmers:LipFarmers
  house_hold_size:HouseHoldSize

  ngOnInit(): void {
    this.initData()
    this.unitSub = this.dashboardService.meanOrMedian$.subscribe((value) => {
      this.unit = value;
    });
  }

  initData(): void {
    if (!this.summaryData) {
      console.warn('summaryData is undefined or null');
      return; // Exit early if summaryData is not defined
    }
    const { tiles,gender_bar } = this.summaryData;
    this.tiles = tiles;
    const {farmers_participated,
      lip_farmers,
      plot_size,
      house_hold_size,
      male,
      female
     } = this.summaryData?.tiles
    this.farmers_participated = farmers_participated
    this.lip_farmers=lip_farmers
    this.female_farmers = female
    // this.female_ratio = female_ratio
    this.male_farmers = male
    this.male_female_ratio = gender_bar
    this.progressValue=Number(gender_bar.sections[0].percentage)
    // this.male_ratio = male_ratio
    this.plot_size = plot_size
    this.house_hold_size = house_hold_size
    console.log(this.house_hold_size,'SSS');
    
  }

  ngOnDestroy(): void {
    if (this.unitSub) {
      this.unitSub.unsubscribe();
    }
  }
}
