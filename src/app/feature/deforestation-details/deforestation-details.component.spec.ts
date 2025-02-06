import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';
import { DeforestationDetailsComponent } from './deforestation-details.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FfFilterBoxWrapperComponent } from 'fairfood-form-components';
import { MatDialogModule } from '@angular/material/dialog';
import { LoaderComponent } from 'fairfood-utils';

describe('DeforestationDetailsComponent', () => {
  let component: DeforestationDetailsComponent;
  let fixture: ComponentFixture<DeforestationDetailsComponent>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;
  let matDialogRefMock: jasmine.SpyObj<MatDialogRef<DeforestationDetailsComponent>>;
  let destroy$: Subject<void>;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getAnalysisDetails']);
    matDialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatIconModule,
        FfFilterBoxWrapperComponent,
        MatDialogModule,
        LoaderComponent,
        DeforestationDetailsComponent
      ],
      declarations: [],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: MatDialogRef, useValue: matDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: { criteria: 'testCriteria', piller: 'testPiller' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DeforestationDetailsComponent);
    component = fixture.componentInstance;
    destroy$ = new Subject<void>();

    apiServiceMock.getAnalysisDetails.and.returnValue(of({
      data: {
        title: 'Sample Title',
        description: 'Sample Description',
        table: {
          methods: ['Method 1', 'Method 2'],
          rows: [{ comments: ['Comment 1', 'Comment 2'] }],
          head: ['Head 1', 'Head 2']
        }
      }
    }));

    fixture.detectChanges();
  });

  afterEach(() => {
    destroy$.next();
    destroy$.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAnalysisDetails on ngOnInit and process response correctly', () => {
    component.ngOnInit();

    expect(apiServiceMock.getAnalysisDetails).toHaveBeenCalledWith('testPiller', 'testCriteria', '');

    expect(component.tableData).toEqual({
      title: 'Sample Title',
      description: 'Sample Description',
      table: {
        methods: ['Method 1', 'Method 2'],
        rows: [{ comments: ['Comment 1', 'Comment 2'] }],
        head: ['Head 1', 'Head 2']
      }
    });

    expect(component.filterOptions).toEqual([
      { id: 'Method 1', name: 'Method 1' },
      { id: 'Method 2', name: 'Method 2' }
    ]);

    expect(component.tableRows).toEqual([
      { comments: ['Comment 1', 'Comment 2'] }
    ]);

    expect(component.tableHeads).toEqual(['Head 1', 'Head 2']);
    expect(component.dataLoaded).toBeTrue();
  });


  it('should close the dialog', () => {
    component.close();
    expect(matDialogRefMock.close).toHaveBeenCalled();
  });

  it('should filter with method and call getAnalysisDetails', () => {
    component.filterWithMethod('Method 1');
    expect(component.selectedFilterOption).toBe('Method 1');
    expect(component.dataLoaded).toBeFalse();
    expect(apiServiceMock.getAnalysisDetails).toHaveBeenCalledWith('testPiller', 'testCriteria', 'Method 1');
  });

  it('should toggle row expansion', () => {
    component.toggleRow(0);
    expect(component.expandIndex).toBe(0);
    expect(component.moreData).toBe('Comment 1');
    component.toggleRow(0);
    expect(component.expandIndex).toBeNull();
    expect(component.moreData).toBeNull();
  });

  it('should increment currentPage and call updateDisplayedRows', () => {
    // Arrange
    spyOn(component, 'updateDisplayedRows');  // Spy on the updateDisplayedRows method

    const initialPage = component.currentPage; // Store the initial page value

    // Act
    component.loadMore();  // Call the loadMore method

    // Assert
    expect(component.currentPage).toBe(initialPage + 1);  // Ensure currentPage is incremented
    expect(component.updateDisplayedRows).toHaveBeenCalled();  // Ensure updateDisplayedRows is called
  });

});
