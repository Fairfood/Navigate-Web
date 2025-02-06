import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartEvent, Chart, ChartType } from 'chart.js'; import 'chart.js';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';

declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartType> {
    centerTextPlugin?: {
      center_label?: {
        title: string;
        value: string;
        unit?: string
      };
    };
  }
}

@Component({
  selector: 'app-chart-donut',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartDonutComponent implements OnChanges, OnInit, OnDestroy {
  @Input() chartData: any;
  @Input() hideLegend: boolean;

  private dashboardService = inject(DashboardService)

  doughnutChartData: any;
  private unitSub: Subscription;
  unit: number


  ngOnInit(): void {
    this.unitSub = this.dashboardService.meanOrMedian$.subscribe((value) => {
      this.unit = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const labels = this.chartData.categories.map((item: any) => item.title);
    const values = this.chartData.categories.map((item: any) => item.value_in_percentage);
    let colors
    if (this.chartData.title == "Living income price") {
      colors = ['#F1C40F', '#D54644','#52A130'];
    }
    else if (this.chartData.title == "Cost of production") {
      colors = ['#D54644', '#F1C40F', '#52A130'];
    }
    else {
      colors = [ '#52A130','#F1C40F', '#D54644'];
    }


    this.doughnutChartData = {
      labels,
      datasets: [{ data: values, backgroundColor: colors }],
      options: {
        plugins: {
          centerTextPlugin: {
            center_label: {
              title: this.chartData?.center_label?.title || '',
              // value: this.chartData?.center_label?.value || '',
              value: this.chartData?.center_label?.value?.is_dual_value == 'True' ? (this.unit == 2 ? this.chartData?.center_label?.value?.median : this.chartData?.center_label?.value?.mean) : (this.chartData?.center_label?.value?.mean || this.chartData?.center_label?.value?.median) || '',
              unit: this.chartData?.unit || ''
            }
          }
        }
      }
    };
  }

  // events
  chartClicked({ event, active }: { event: ChartEvent; active: any[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: ChartEvent; active: any[] }): void {
    console.log(event, active);
  }

  ngOnDestroy(): void {
    if (this.unitSub) {
      this.unitSub.unsubscribe();
    }
  }
}

// Register the plugin
Chart.register({
  id: 'centerTextPlugin',
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const { width, height } = chart;

    ctx.restore();
    // Draw custom text
    const customText = chart?.options?.plugins?.centerTextPlugin?.center_label?.title || '';
    const valueText = chart?.options?.plugins?.centerTextPlugin?.center_label?.value || '';
    const unit = chart?.options?.plugins?.centerTextPlugin?.center_label?.unit || '';

    // Draw the custom text
    ctx.font = `8px Moderat Regular`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const customTextX = width / 2;
    const customTextY = height / 2 - 10; // Adjusted position for custom text
    ctx.fillText(customText, customTextX, customTextY);

    // Draw total
    ctx.font = `14px Moderat Regular`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const totalX = width / 2;
    const totalY = height / 2 + 10; // Adjusted position below the custom text
    ctx.fillText(`${valueText} ${unit}`, totalX, totalY);
    ctx.save();
  },
});

