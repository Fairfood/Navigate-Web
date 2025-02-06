import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { GEarthService } from '../g-earth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-density-modal',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule, MatIconModule],
  templateUrl: './density-modal.component.html',
  styleUrls: ['./density-modal.component.scss']
})
export class DensityModalComponent implements OnDestroy {
  densityPercentage = 0
  customValues= [10, 15, 20, 25, 30, 50, 75];
  sliderValue: number;
  private densitySub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<DensityModalComponent>,
    private service: GEarthService
  ) {
    this.densitySub = this.service.density$.subscribe((value) => {
      this.densityPercentage = value;
      this.sliderValue = this.customValues.indexOf(value);
    });
  }

  close(): void {
    this.dialogRef.close(this.densityPercentage)
  }

  formatLabel(value: number): string {
    return `${this.customValues[value]}%`;
  }

  onSliderChange(event: any): void {
    this.sliderValue = event.target.value;
    this.densityPercentage = this.customValues[this.sliderValue];
    this.service.setDensity(this.densityPercentage); 
  }


  ngOnDestroy(): void {
    if (this.densitySub) {
      this.densitySub.unsubscribe();
    }
  }
}
