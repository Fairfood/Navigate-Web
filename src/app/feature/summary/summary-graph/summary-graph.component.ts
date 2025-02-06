import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChartDonutComponent } from 'src/app/shared/components/chart-donut';
import { CategoryClassPipe } from './pipes/category-class.pipe';
import { IGraphArray, IGraphData } from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-summary-graph',
  standalone: true,
  imports: [NgFor, ChartDonutComponent, NgClass,NgIf,CategoryClassPipe],
  templateUrl: './summary-graph.component.html',
  styleUrls: ['./summary-graph.component.scss']
})
export class SummaryGraphComponent implements OnInit {
  @Input() graphData: IGraphData
  graphDataArray:IGraphArray;
  

  ngOnInit(): void {
    const { cost_of_production, living_income_price, production } = this.graphData;
    this.graphDataArray = [living_income_price, cost_of_production, production];
  }

}
