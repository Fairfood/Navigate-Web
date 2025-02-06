import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DensityModalComponent } from './density-modal.component';
import { GEarthService } from '../g-earth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

describe('DensityModalComponent', () => {
  let component: DensityModalComponent;
  let fixture: ComponentFixture<DensityModalComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<DensityModalComponent>>;
  let mockService: jasmine.SpyObj<GEarthService>;

  beforeEach(async () => {
    // Mock MatDialogRef
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    // Mock GEarthService
    mockService = jasmine.createSpyObj('GEarthService', ['setDensity']);
    mockService.density$ = of(15);  // Mock initial density value

    await TestBed.configureTestingModule({
      imports: [DensityModalComponent,MatSliderModule, FormsModule, MatIconModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: GEarthService, useValue: mockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DensityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default density value from service', () => {
    expect(component.densityPercentage).toBe(15);  // Based on the mock service
    expect(component.sliderValue).toBe(1); 
  });

  it('should close the dialog and return the densityPercentage when close is called', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalledWith(15);  // densityPercentage should be 20
  });

  it('should update densityPercentage and call setDensity on slider change', () => {
    // Simulate slider change with value 2 (which should correspond to 20% in customValues)
    component.onSliderChange({ target: { value: 2 } });
  
    // Now densityPercentage should be 20 (based on customValues)
    expect(component.densityPercentage).toBe(20);
  
    // The service should be called with the correct value (20)
    expect(mockService.setDensity).toHaveBeenCalledWith(20);
  });
  
  

  it('should unsubscribe from the density$ observable on destroy', () => {
    const unsubscribeSpy = spyOn(component['densitySub'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should format label correctly', () => {
    expect(component.formatLabel(0)).toBe('10%');
    expect(component.formatLabel(5)).toBe('50%');
  });
});
