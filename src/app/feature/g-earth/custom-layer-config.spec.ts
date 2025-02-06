import { fakeAsync, tick } from '@angular/core/testing';
import { CustomLayer } from './custom-layer-config'; // Adjust the path if necessary

describe('CustomLayer', () => {
  let customLayer: CustomLayer;

  beforeEach(() => {
    customLayer = new CustomLayer('TREE_COVER_LOSS', 'https://example.com/tiles/{z}/{x}/{y}.png');
  });

  it('should be defined', () => {
    expect(customLayer).toBeDefined();
  });

  it('should return the correct tile URL', () => {
    const level = 10;
    const row = 5;
    const col = 3;
    const expectedUrl = 'https://example.com/tiles/10/3/5.png';
    
    const result = customLayer.getTileUrl(level, row, col);
    expect(result).toBe(expectedUrl);
  });

  it('should filter the pixel data correctly', () => {
    const pixelData = new Uint8ClampedArray([0, 0, 0, 255, 255, 255, 255, 255]); // Example RGBA data
    const filteredData = customLayer.filter(pixelData);
  
    // You can define expected behavior here depending on your filter logic
    expect(filteredData[0]).toBe(220); // Check that the first pixel is correctly filtered
  });
  

  it('should return a canvas when fetchTile is called', fakeAsync(() => {
    const level = 10;
    const row = 5;
    const col = 3;
  
    // Mock the fetch call
    const mockResponse = {
      ok: true,
      status: 200,
      headers: new Headers(),
      redirected: false,
      url: 'https://example.com/tiles/10/3/5.png',
      blob: () => Promise.resolve(new Blob([], { type: 'image/png' })),
    };
  
    spyOn(window, 'fetch').and.returnValue(Promise.resolve(mockResponse as Response));
  
    // Call the fetchTile method
    customLayer.fetchTile(level, row, col).then((canvas) => {
      expect(canvas).toBeInstanceOf(HTMLCanvasElement);
    });
  
    // Simulate the passage of time for async operations
    tick(); // Tick forward to allow the Promise to resolve
  }));
  
  
  
});
