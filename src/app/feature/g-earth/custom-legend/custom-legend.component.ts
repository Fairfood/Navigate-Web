import { Component, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';

@Component({
  selector: 'app-custom-legend',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './custom-legend.component.html',
  styleUrls: ['./custom-legend.component.scss']
})
export class CustomLegendComponent implements OnChanges, OnDestroy {
  currentValue: number = 0;
  @Input() legendData: any
  minValue: number = 0;
  maxValue: number = 0;
  legendGradient: string = '';
  unitSub: Subscription;
  unit: number

  private api = inject(DashboardService)

  currentPricePosition: number = 0;

  ngOnChanges(): void {
    this.initLegend()
    this.unitSub = this.api.meanOrMedian$.subscribe((value) => {
      this.unit = value;
      this.currentValue = this.unit == 2 ? this.legendData.current.median : this.legendData.current.mean
    });
    this.updatePricePosition();
  }

  updatePricePosition(): void {
    this.currentPricePosition = ((this.currentValue - this.minValue) / (this.maxValue - this.minValue)) * 100;
  }

  initLegend(): void {
    if (this.legendData) {
      this.minValue = this.legendData.min?.value ?? 0; // Fallback to 0 if undefined
      this.maxValue = this.legendData.max?.value ?? 0; // Fallback to 0 if undefined


      // Generate gradient using min and max colors
      const minColor = this.legendData.min?.color ?? '#000000'; // Fallback color if undefined
      const maxColor = this.legendData.max?.color ?? '#FFFFFF'; // Fallback color if undefined

      // Assign a linear gradient from minColor to maxColor
      this.legendGradient = `linear-gradient(to right, ${minColor}, ${maxColor})`;


    }
  }

  ngOnDestroy(): void {
    if (this.unitSub) {
      this.unitSub.unsubscribe();
    }
  }
}
