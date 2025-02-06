
import BaseTileLayer from '@arcgis/core/layers/BaseTileLayer';

export class CustomLayer extends BaseTileLayer {

    minYear: number = 2000;
    maxYear: number = 2023;
    intensityBank: { [key: number]: number[][] } = {};
  
    constructor(private layerId: string, public tileUrl: string) {
      super();
    }
  
    override getTileUrl(level: number, row: number, col: number): string {
      return this.tileUrl
        .replace('{z}', level.toString())
        .replace('{x}', col.toString())
        .replace('{y}', row.toString());
    }
  
    override fetchTile(level: number, row: number, col: number): Promise<HTMLCanvasElement> {
      const url = this.getTileUrl(level, row, col);
  
      return fetch(url, { mode: 'cors' })
        .then(response => response.blob())
        .then(blob => {
          return new Promise<HTMLCanvasElement>(resolve => {
            const image = new Image();
            image.crossOrigin = 'Anonymous';
            const objectURL = URL.createObjectURL(blob);
            image.onload = () => {
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d')!;
              canvas.width = this.tileInfo.size[0];
              canvas.height = this.tileInfo.size[0];
  
              context.drawImage(image, 0, 0, canvas.width, canvas.height);
              const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
              imageData.data.set(this.filter(imageData.data));
              context.putImageData(imageData, 0, 0);
  
              URL.revokeObjectURL(objectURL);
              resolve(canvas);
            };
            image.src = objectURL;
          });
        });
    }
  
    filter(data: Uint8ClampedArray): Uint8ClampedArray {
      if (this.layerId === 'TREE_COVER_LOSS') {
        // const z = this.view.zoom;
        for (let z = 1; z < 21; z++) {
          //each zoom level on the map
          this.intensityBank[z] = [];
          const exp = z < 11 ? 0.3 + (z - 3) / 20 : 1;
          const lMoney = this.getScalePowFunc(exp);
          for (let f = 0; f < 256; f++) {
            //each potential intensity value
            this.intensityBank[z][f] = [];
            this.intensityBank[z][f].push(33 - z + 153 - lMoney(f) / z);
            this.intensityBank[z][f].push(z < 13 ? lMoney(f) : f);
            this.intensityBank[z][f].push(220);
            this.intensityBank[z][f].push(72 - z + 102 - (3 * lMoney(f)) / z);
          }
        }
  
  
        for (let i = 0; i < data.length; i += 4) {
          const slice = [data[i], data[i + 1], data[i + 2]];
          const values = this.decodeDate(slice);
  
          if (!values.intensity) {
            values.intensity = 0;
          }
  
          // Apply the year range filter
          if (values.year >= this.minYear - 2000 && values.year <= this.maxYear - 2000) {
            const intensityArray = this.intensityBank[values.intensity];
            if (intensityArray && intensityArray.length > 0) {
              data[i] = intensityArray[0][2] ?? 0;
              data[i + 1] = intensityArray[0][3] ?? 0;
              data[i + 2] = intensityArray[0][0] ?? 0;
              data[i + 3] = intensityArray[0][1] ?? 0;
            }
  
          } else {
            // Hide the pixel if it doesn't match the year range
            data[i + 3] = 0;
            data[i + 2] = 0;
            data[i + 1] = 0;
            data[i] = 0;
          }
        }
  
        // Change the layer color to "#DC6499"
        for (let i = 0; i < data.length; i += 4) {
          // Extract the current RGBA values
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
  
          // Transform the color based on your condition
          if (a > 0) {  // Only modify pixels that are not fully transparent
            data[i] = 220;    // R: 0xDC
            data[i + 1] = 100; // G: 0x64
            data[i + 2] = 153; // B: 0x99
            // Keep the alpha channel unchanged
          }
        }
      }
      return data;
    }
  
    getScalePowFunc = (exp: number) => {
      // y = m * x ^ k + b
      const domain = [0, 256];
      const range = [0, 256];
      const b = range[0] - domain[0];
      const m = (range[1] - b) / Math.pow(domain[1], exp);
  
      return (x: number): number => {
        return Math.pow(x, exp) * m + b;
      };
    };
  
    decodeDate(pixel: any) {
      const year = pixel[2];
      const intensity = pixel[0];
      return { intensity, year };
    }
  }