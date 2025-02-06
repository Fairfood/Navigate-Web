import { Component, Input, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from 'src/app/shared/services';
import { ButtonsComponent } from 'fairfood-utils';
import { IInterventionsData } from 'src/app/shared/configs/app.model';

@Component({
  selector: 'app-intervention-list',
  standalone: true,
  imports: [NgIf, NgFor, ButtonsComponent],
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.scss'],
})
export class InterventionListComponent implements OnInit {
  private readonly api = inject(ApiService);

  @Input() selectedPiller: string = '';
  @Input() data: IInterventionsData| undefined
  interventions: any;
  dataLoaded = false;
  private destroy$ = new Subject<void>();
  title: string;
  description: string;

  /**
   * This function retrieves interventions data from an API and assigns it to a component property
   * while setting a flag to indicate data loading completion.
   */
  ngOnInit(): void {
    if (this.data) {
      this.title = this.data?.title;
      this.description = this.data?.description;
      this.interventions = this.data?.items;
      this.dataLoaded = true;
    }
    else {
    this.api
      .getInterventions(this.selectedPiller)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        const { interventions, title, description } = res?.data;
        this.title = title;
        this.description = description;
        this.interventions = interventions;
        this.dataLoaded = true;
      });
    }
  }

  /**
   * The function `moreDetails` opens a new browser window with the specified URL.
   **/
  moreDetails(url: string): void {
    window.open(url, '_blank');
  }

  /**
   * The trackByCommon function in TypeScript returns the index as the key for tracking items in a
   * list.
   **/
  trackByCommon(index: number): number {
    return index;
  }

  /**
   * The ngOnDestroy function in TypeScript is used to clean up resources and unsubscribe from
   * observables to prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
