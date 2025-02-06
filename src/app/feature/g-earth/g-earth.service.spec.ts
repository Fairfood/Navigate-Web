import { TestBed } from '@angular/core/testing';

import { GEarthService } from './g-earth.service';

describe('GEarthService', () => {
  let service: GEarthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GEarthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set density correctly', () => {
    // Arrange
    const newDensity = 50;

    // Act
    service.setDensity(newDensity);

    // Assert
    service.density$.subscribe((density) => {
      expect(density).toBe(newDensity);
    });
  });

  it('should convert hex to rgb correctly', () => {
    // Arrange
    const hexColor = '#FF5733';

    // Act
    const rgb = service.hexToRgb(hexColor);

    // Assert
    expect(rgb).toEqual([255, 87, 51]);
  });

  it('should create a popup element with correct structure', () => {
    // Arrange
    const label = 'Test Label';
    const priceData = { mean: 10, median: 20 };
    const unit = 2; // Means use median
    const color = '#FF5733'; // Test color
  
    // Act
    const popup = service.createPopupElement(label, priceData, unit, color);
  
    // Assert
    expect(popup).toBeTruthy();
    expect(popup.className).toBe('customPopup');
    
    const popupLabel = popup.querySelector('span');
    expect(popupLabel).not.toBeNull();
    expect((popupLabel as HTMLElement).innerText).toBe(label);  // Cast to HTMLElement
  
    const popupPrice = popup.querySelector('span:nth-child(2)');
    expect(popupPrice).not.toBeNull();
  
    // Check for background color in rgb format
    expect(popup.style.backgroundColor).toBe('rgb(255, 87, 51)'); // RGB format
  
    // Test tooltip visibility on hover (tooltip should not affect popupPrice.innerText)
    const tooltip = popup.querySelector('.tooltip');
    expect(tooltip).not.toBeNull();
    
    const popupPriceElement = popupPrice as HTMLElement;
    const mouseEnterEvent = new MouseEvent('mouseenter');
    const mouseLeaveEvent = new MouseEvent('mouseleave');
    
    (popupPriceElement as HTMLElement).dispatchEvent(mouseEnterEvent);
    expect((tooltip as HTMLElement).style.display).toBe('block');  // Cast to HTMLElement
    
    (popupPriceElement as HTMLElement).dispatchEvent(mouseLeaveEvent);
    expect((tooltip as HTMLElement).style.display).toBe('none');  // Cast to HTMLElement
  });
  
  

});
