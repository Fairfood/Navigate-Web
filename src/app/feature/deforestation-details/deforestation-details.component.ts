import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { ApiService } from 'src/app/shared/services/api.service';

import { LoaderComponent } from 'fairfood-utils';
import { FfFilterBoxWrapperComponent } from 'fairfood-form-components';
import { IFilterOptions, ITableDataDetails, ITableRows } from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-deforestation-details',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatIconModule,
    FfFilterBoxWrapperComponent,
    MatDialogModule,
    LoaderComponent,
  ],
  templateUrl: './deforestation-details.component.html',
  styleUrls: ['./deforestation-details.component.scss'],
})
export class DeforestationDetailsComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);

  filterOptions: IFilterOptions = [];
  selectedFilterOption: string;
  tableRows: ITableRows;
  expandIndex: number | null;
  moreData: any;
  dataLoaded = false;
  private destroy$ = new Subject<void>();
  tableData: ITableDataDetails;
  tableHeads: string[] = [];

  displayedRows: ITableRows;
  pageSize: number = 25;
  currentPage: number = 0;
  rowCount = 0

  constructor(
    public dialogRef: MatDialogRef<DeforestationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * The ngOnInit function calls the getAnalysisDetails method when the component is initialized.
   */
  ngOnInit(): void {
    this.getAnalysisDetails();
  }

  /**
   * This function retrieves analysis details based on criteria and piller using a selected method and
   * updates the table data accordingly.
   */
  getAnalysisDetails(): void {
    const { criteria, piller, head } = this.data;
    const method = this.selectedFilterOption || head || '';
    this.api
      .getAnalysisDetails(piller, criteria, method)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        const { data } = res;
        this.tableData = data;
        this.initTableData();
        this.dataLoaded = true;
      });
  }

  /**
   * The function `initTableData` initializes filter options and table rows based on the table data
   * provided.
   */
  initTableData(): void {
    this.filterOptions = this.tableData?.table?.methods.map(
      (method: string) => ({ id: method, name: method })
    );
    this.tableRows = this.tableData?.table?.rows || [];
    this.tableHeads = this.tableData?.table?.head || [];

    const { head } = this.data;
    if (!this.selectedFilterOption) {
      this.selectedFilterOption = head
    }
    this.updateDisplayedRows();
  }

  /**
   * The trackByCommon function in TypeScript returns the index as the key for tracking items in a
   * list.
   **/
  trackByCommon(index: number): number {
    return index;
  }

  /**
   * The function `filterWithMethod` sets the selected filter option based on the input method,
   * triggers `getAnalysisDetails`, and sets `dataLoaded` to false.
   **/
  filterWithMethod(method: any): void {
    // this.selectedFilterOption = method !== 'All' ? method : '';
    this.selectedFilterOption = method
    this.getAnalysisDetails();
    this.dataLoaded = false;
  }

  /**
   * The close function closes the current dialog window.
   */
  close(): void {
    this.dialogRef.close();
  }

  /**
   * The function `toggleRow` toggles the expanded state of a row in a table and sets additional data
   * based on the index provided.
   **/
  toggleRow(index: number): void {
    if (index === this.expandIndex) {
      this.expandIndex = null;
      this.moreData = null;
    } else {
      this.moreData = this.tableRows[index].comments[0] ?? null;
      this.expandIndex = index;
    }
  }

  /**
   * The function `updateDisplayedRows` updates the displayed rows based on the current page and page
   * size.
   */
  updateDisplayedRows() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedRows = this.tableRows.slice(0, endIndex);
    this.rowCount = this.tableRows.length - this.displayedRows.length
  }

  /**
   * The `loadMore` function increments the current page number and updates the displayed rows.
   */
  loadMore() {
    this.currentPage++;
    this.updateDisplayedRows();
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
