import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryGraphComponent } from './summary-graph.component';
import { CategoryClassPipe } from './pipes/category-class.pipe';
import { ChartDonutComponent } from 'src/app/shared/components/chart-donut';
import { NgClass, NgFor, NgIf } from '@angular/common';

describe('SummaryGraphComponent', () => {
  let component: SummaryGraphComponent;
  let fixture: ComponentFixture<SummaryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [SummaryGraphComponent, CategoryClassPipe,NgFor, ChartDonutComponent, NgClass, NgIf]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGraphComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

 
  
  
  
});
