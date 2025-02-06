import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GEarthService {
  // private readonly http = inject(HttpClient);
  // constructor() { }

  private densitySubject = new BehaviorSubject<number>(30); 
  density$ = this.densitySubject.asObservable();

  setDensity(value: number): void {
    this.densitySubject.next(value);
  }


  createPopupElement(label: string, priceData: any,unit:number,color:string): HTMLElement {
    let price = priceData
    // Store the mean and median for tooltip
    let mean: string | undefined;
    let median: string | undefined;

    if (typeof price === 'object') {
      mean = price.mean;
      median = price.median;
      price = unit === 2 ? median : mean;
    }

    const popup = document.createElement('div');
    popup.className = 'customPopup';
    popup.style.position = 'absolute';
    popup.style.zIndex = '1';
    popup.style.padding = '5px 10px';
    popup.style.minWidth = '170px';
    popup.style.backgroundColor = color;
    popup.style.color = '#353B42';
    popup.style.fontFamily = 'Moderat Regular, sans-serif';
    popup.style.fontSize = '14px';
    popup.style.fontWeight = '400';
    popup.style.justifyContent = 'space-between';

    const popupLabel = document.createElement('span');
    popupLabel.innerText = label;
    popupLabel.style.color = 'white';
    popupLabel.style.marginRight = '5px';
    popup.appendChild(popupLabel);

    const popupPrice = document.createElement('span');
    typeof priceData != 'object' ? popupPrice.innerText = `${price} ` : popupPrice.innerText = `${price} *`;
    typeof priceData != 'object' ? popupPrice.style.cursor = 'default' : popupPrice.style.cursor = 'pointer'
    popupPrice.style.padding = '0px 5px';
    popupPrice.style.backgroundColor = 'white';
    popupPrice.style.color = '#353B42';
    popup.appendChild(popupPrice);

    // Create the tooltip
    if (mean && median) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerText = `Mean: ${mean}, Median: ${median}`;
      tooltip.style.display = 'none'; // Hidden by default
      tooltip.style.position = 'absolute';
      tooltip.style.backgroundColor = '#003a60';
      tooltip.style.border = '1px solid #ccc';
      tooltip.style.padding = '5px';
      tooltip.style.zIndex = '2';
      tooltip.style.fontSize = '12px';
      tooltip.style.color = 'white';
      tooltip.style.minWidth = '150px';
      tooltip.style.borderRadius = '5px';

      // Position tooltip above the price
      popupPrice.appendChild(tooltip);

      // Show tooltip on hover
      popupPrice.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
      });

      popupPrice.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    }

    const arrow = document.createElement('div');
    arrow.className = 'popupArrow';
    arrow.style.position = 'absolute';
    arrow.style.bottom = '-18px';
    arrow.style.left = '50%';
    arrow.style.marginLeft = '-5px';
    arrow.style.borderWidth = '10px';
    arrow.style.borderStyle = 'solid';
    arrow.style.borderColor = `${color} transparent transparent transparent`;
    popup.appendChild(arrow);

    return popup;
  }

  // getColorForPrice(price: number): string {
  //   if (price <= 1.79) return '#D3403F';
  //   if (price <= 2.20) return '#DE706D';
  //   if (price <= 2.21) return '#FF912B';
  //   if (price <= 4.59) return '#8FEE67';
  //   if (price <= 4.69) return '#4E9D2D';
  //   return '#4E9D2D';
  // }

  hexToRgb(hex: string): [number, number, number] {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }


  // getLayers(id: string): Observable<any> {
  //   const LAYER_BASE_URL = 'https://production-api.globalforestwatch.org/v1/layer'
  //   return this.http
  //     .get(
  //       `${LAYER_BASE_URL}/${id}`
  //     )
  //     .pipe(
  //       map((res: any) => {
  //          (res,'RES');
          
  //        }))
  // }

}
