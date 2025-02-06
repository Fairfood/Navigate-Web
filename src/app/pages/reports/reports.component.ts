import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  private service = inject(DashboardService)
  ngOnInit(): void {
    this.service.updateSelectedTab('DEFORESTATION');
    this.service.setUnit(1);
  }
}
