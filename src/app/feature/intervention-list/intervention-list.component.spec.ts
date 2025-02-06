import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterventionListComponent } from './intervention-list.component';
import { ApiService } from 'src/app/shared/services';
import { of } from 'rxjs';

describe('InterventionListComponent', () => {
  let component: InterventionListComponent;
  let fixture: ComponentFixture<InterventionListComponent>;
  const apiServiceMock = jasmine.createSpyObj('ApiService', ['getInterventions']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InterventionListComponent],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    });
    fixture = TestBed.createComponent(InterventionListComponent);
    component = fixture.componentInstance;
  });

  it('should set title, description, interventions, and dataLoaded on ngOnInit when data is provided', () => {
    component.data = {
      title: 'Test Title',
      description: 'Test Description',
      items: [
        { name: 'Intervention 1', description: 'Description 1', more_url: '', desc_short: 'Short Desc 1', image: '', packages: [] },
        { name: 'Intervention 2', description: 'Description 2', more_url: '', desc_short: 'Short Desc 2', image: '', packages: [] }
      ]
    };
  
    component.ngOnInit();
  
    expect(component.title).toEqual('Test Title');
    expect(component.description).toEqual('Test Description');
    expect(component.interventions).toEqual([
      { name: 'Intervention 1', description: 'Description 1', more_url: '', desc_short: 'Short Desc 1', image: '', packages: [] },
      { name: 'Intervention 2', description: 'Description 2', more_url: '', desc_short: 'Short Desc 2', image: '', packages: [] }
    ]);
    expect(component.dataLoaded).toBeTrue();
  });
  

  it('should not set properties if data is undefined and fetch interventions via API', () => {
    component.data = undefined;
  
    const mockApiResponse = {
      data: {
        title: 'API Title',
        description: 'API Description',
        interventions: [
          { name: 'API Intervention 1', description: 'Description 1', more_url: '', desc_short: 'Short Desc 1', image: '', packages: [] },
          { name: 'API Intervention 2', description: 'Description 2', more_url: '', desc_short: 'Short Desc 2', image: '', packages: [] }
        ]
      },
    };
    apiServiceMock.getInterventions.and.returnValue(of(mockApiResponse));
  
    component.ngOnInit();
  
    expect(component.title).toEqual('API Title');
    expect(component.description).toEqual('API Description');
    expect(component.interventions).toEqual([
      { name: 'API Intervention 1', description: 'Description 1', more_url: '', desc_short: 'Short Desc 1', image: '', packages: [] },
      { name: 'API Intervention 2', description: 'Description 2', more_url: '', desc_short: 'Short Desc 2', image: '', packages: [] }
    ]);
    expect(component.dataLoaded).toBeTrue();
  });
  

  it('should open a new browser window with the specified URL', () => {
    const mockUrl = 'https://example.com';
    spyOn(window, 'open');

    component.moreDetails(mockUrl);

    expect(window.open).toHaveBeenCalledWith(mockUrl, '_blank');
  });

  it('should return the index as the key for tracking items', () => {
    const sampleArray = ['Item 1', 'Item 2', 'Item 3'];

    sampleArray.forEach((item, index) => {
      expect(component.trackByCommon(index)).toEqual(index);
    });
  });

  afterEach(() => {
    fixture.destroy();
  });
});
