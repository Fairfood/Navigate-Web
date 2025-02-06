import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, takeUntil } from 'rxjs';

import { DeforestationDetailsComponent } from '../deforestation-details';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { LoaderComponent } from 'fairfood-utils';
import { ApiService } from 'src/app/shared/services';
import { ExportService } from 'src/app/pages/dashboard/export.service';
import { ITableData, Row } from 'src/app/shared/configs/app.model';
@Component({
    selector: 'app-deforestation-table',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgSwitch,
        NgSwitchDefault,
        NgSwitchCase,
        NgClass,
        NgTemplateOutlet,
        MatDialogModule,
        MatTooltipModule,
        LoaderComponent
    ],
    templateUrl: './deforestation-table.component.html',
    styleUrls: ['./deforestation-table.component.scss'],
})
export class DeforestationTableComponent implements OnInit, OnDestroy {
    dialog = inject(MatDialog);
    api = inject(ApiService);
    exportService = inject(ExportService);
    dashboardService = inject(DashboardService);

    @Input() tableData: ITableData;

    private destroy$ = new Subject<void>();
    dataLoaded = true;
    selectedPiller: string;
    rows: Row[] = []
    popupData: any[] = [];

    ngOnInit(): void {
        this.dashboardService
            .selectedTab$()
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
                this.selectedPiller = data;
            });
        this.initPopupData()

    }

    openDetails(criteria: any, header: string): void {
        const head = (header != 'Criteria' || 'Status') ? header : 'All'
        this.dialog.open(DeforestationDetailsComponent, {
            width: '80vw',
            height: 'auto',
            maxHeight: '80vh',
            data: { criteria: criteria, piller: this.selectedPiller, head },
        });
    }

    trackByRows(index: number, row: any): number {
        return row.id;
    }

    trackByCommon(index: number): number {
        return index;
    }

    initPopupData(): void {
        this.popupData = []
        const { rows } = this.tableData
        this.rows = rows
        // this.rows.map((item: any) => this.getPopupData(item.values[0]))

        this.popupData = this.rows.map((item: any) => item?.details)
        this.exportService.popupData = this.popupData
    }

    getPopupData(criteria: string): void {
        this.api
            .getAnalysisDetails(this.selectedPiller, criteria)
            .pipe(takeUntil(this.destroy$))
            .subscribe((res) => {
                const { data } = res;
                this.popupData.push(data)
                this.dataLoaded = true;
            });
    }
    

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
