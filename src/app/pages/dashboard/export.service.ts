import { Injectable } from '@angular/core';
import { DeforestationComponent } from 'src/app/feature/g-earth/deforestation/deforestation.component';
import { HttpClient } from '@angular/common/http';
import { CustomHtmlGeneratorService } from './services/custom-html-generator.service';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  popupData: any
  constructor(private http: HttpClient,private htmlGeneratorService:CustomHtmlGeneratorService) { }


  exportAsHTML(deforestationComponent: DeforestationComponent, deforestationData: any): void {
    const element = document.getElementById('dashboard');

    if (element) {
      const cssVariables = this.getCSSVariables();
      const styleBlock = `<style>:root { ${cssVariables} }</style>`;

      let htmlContent = element.outerHTML;
      

      // Remove elements with id 'pillar_1' and 'pillar_2'
      htmlContent = htmlContent.replace(
        /<[^>]*id="pillar_1"[^>]*>.*?<\/[^>]+>/g,
        ''
      );
      htmlContent = htmlContent.replace(
        /<[^>]*id="pillar_2"[^>]*>.*?<\/[^>]+>/g,
        ''
      );

      htmlContent = htmlContent.replace(
        /<[^>]*id="exportIcon"[^>]*>.*?<\/[^>]+>/g,
        ''
      );

      // Update the title element content
      if (htmlContent.includes('id="title"')) {
        htmlContent = htmlContent.replace(
          /(<[^>]*id="title"[^>]*>)(.*?)(<\/[^>]+>)/,
          `$1Due Diligence Report$3`
        );
        htmlContent = htmlContent.replace(
          /(<[^>]*id="info"[^>]*>)(.*?)(<\/[^>]+>)/,
          `$1The chosen Deforestation impact area is detailed in this report.$3`
        );
        htmlContent = htmlContent.replace(
          /(<[^>]*id="description"[^>]*>)(.*?)(<\/[^>]+>)/,
          `$1Results in this report are shown according to the selected filters in your value chain.$3`
        );

        // Remove mat-icon from app-ff-filter-box-wrapper elements
        htmlContent = htmlContent.replace(
          /<app-ff-filter-box-wrapper([\s\S]*?)>([\s\S]*?)<\/app-ff-filter-box-wrapper>/g,
          (match, attributes, content) => {
            // Remove <mat-icon> from the content
            const updatedContent = content.replace(/<mat-icon[^>]*>[\s\S]*?<\/mat-icon>/g, '');
            return `<app-ff-filter-box-wrapper${attributes}>${updatedContent}</app-ff-filter-box-wrapper>`;
          }
        );

        htmlContent = htmlContent.replace(
          /<app-ff-pagination[\s\S]*?<\/app-ff-pagination>/g,
          '<app-ff-pagination style="display: none;"></app-ff-pagination>'
        );
        

      }

      const paginatedContent = this.htmlGeneratorService.generatePaginatedContent(deforestationData);


      // Replace content
      // Create the regex to match the 'deforestation-data' element
      const regex = /<div[^>]*id=["']deforestation-data["'][^>]*>.*?<\/div>/s;

      // Check if the content matches before replacement
      if (regex.test(htmlContent)) {
        htmlContent = htmlContent.replace(regex, `<div id="deforestation-data">${paginatedContent}</div>`);
         ('Replacement successful');
      } else {
        console.error('Error: id="deforestation-data" not found in the HTML content');
         (htmlContent); // Debug the current HTML structure
      }

      



      // Fetch dialog HTML content from assets
      this.http.get('assets/dialog.html', { responseType: 'text' }).subscribe(
        (dialogHtml: any) => {
          // Add the dialog HTML content
          htmlContent += dialogHtml;
           (this.popupData, 'pp export');


          // JavaScript for handling dialog interactions
          const script = this.htmlGeneratorService.generatePopupScript(this.popupData);



          // Combine all HTML content
          htmlContent += script;

          this.embedInlineCSS(htmlContent).then(updatedHtml => {
            this.embedExternalCSS(updatedHtml).then(htmlWithCss => {
              this.embedSvgImages(htmlWithCss).then(htmlWithImages => {
                deforestationComponent.captureMapScreenshot().then((screenshotBase64) => {
                  this.replaceMapWithScreenshot(htmlWithImages, screenshotBase64).then(updatedHtmlWithScreenshot => {
                    const updatedHtmlWithVariables = updatedHtmlWithScreenshot.replace('<head>', `<head>${styleBlock}`);
                    const blob = new Blob([updatedHtmlWithVariables], { type: 'text/html' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'report.html';
                    link.click();
                  }).catch((error) => {
                    console.error('Error replacing map with screenshot:', error);
                  });
                });
              });
            });
          });
        },
        (error: any) => {
          console.error('Error loading dialog HTML:', error);
        }
      );
    }
  }

  replaceMapWithScreenshot(htmlContent: string, screenshotBase64: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const mapContainerId = 'mapContainer';
      const imgTag = `<img src="${screenshotBase64}" alt="Map Screenshot" style="width:100%; height:auto;">`;

      // Find the map container in the HTML content
      const mapContainerRegex = new RegExp(`(<div[^>]*id="${mapContainerId}"[^>]*>)(.*?)(</div>)`, 's');
      const mapContainerMatch = htmlContent.match(mapContainerRegex);

      if (mapContainerMatch) {
        // Extract the content inside the map container
        const mapContainerStart = mapContainerMatch[1]; // The opening <div> tag
        const mapContainerContent = mapContainerMatch[2]; // The content inside the <div> (including <canvas>)
        const mapContainerEnd = mapContainerMatch[3]; // The closing </div> tag

        // Replace the <canvas> element with the new <img> tag
        const updatedMapContainerContent = mapContainerContent.replace(/<canvas[^>]*>.*?<\/canvas>/s, imgTag);

        // Reconstruct the map container with the updated content
        const updatedMapContainer = `${mapContainerStart}${updatedMapContainerContent}${mapContainerEnd}`;

        // Now replace the original map container in the htmlContent with the updated map container
        const updatedHtml = htmlContent.replace(mapContainerMatch[0], updatedMapContainer);

        // Resolve the promise with the updated HTML
        resolve(updatedHtml);
      } else {
        reject('Map container not found in HTML content');
      }
    });
  }


  // Embed inline CSS (if any) from <style> tags
  embedInlineCSS(htmlContent: string): Promise<string> {
    return new Promise((resolve) => {
      const styleTags = Array.from(document.querySelectorAll('style')).map(style => style.outerHTML);
      let updatedHtml = htmlContent;

      // Add custom font-family variables to the CSS
      const fontVariablesCSS = `
      :root {
        --font-regular: "Moderat Regular", sans-serif;
        --font-medium: "Moderat Medium", sans-serif;
        --font-bold: "Moderat Bold", sans-serif;
      }
    `;

      // Add the font variables at the top of the inline CSS
      styleTags.unshift(`<style>${fontVariablesCSS}</style>`);

      // Add the CSS styles inside the <style> tag into the HTML
      if (styleTags.length > 0) {
        updatedHtml = `<head>${styleTags.join('')}</head>` + updatedHtml;
      }

      resolve(updatedHtml);
    });
  }


  // Embed external CSS by converting them into <style> tags with their content
  embedExternalCSS(htmlContent: string): Promise<string> {
    return new Promise((resolve) => {
      const linkTags = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      const cssPromises = linkTags.map(link => this.fetchCSS((link as HTMLLinkElement).href)); // Type cast to HTMLLinkElement

      // Add font embedding logic for Regular, Medium, and Bold
      Promise.all([
        this.convertFontToBase64('./assets/fonts/Moderat-Regular.woff2'),  // Regular font
        this.convertFontToBase64('./assets/fonts/Moderat-Medium.woff2'),   // Medium font
        this.convertFontToBase64('./assets/fonts/Moderat-Bold.woff2')      // Bold font
      ]).then(([base64Regular, base64Medium, base64Bold]) => {
        // Create the @font-face rules for Regular, Medium, and Bold
        const fontFaceCSS = `
        @font-face {
          font-family: 'Moderat Regular';
          src: url('data:font/woff2;base64,${base64Regular}') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Moderat Medium';
          src: url('data:font/woff2;base64,${base64Medium}') format('woff2');
          font-weight: 500;  // Medium weight
          font-style: normal;
        }
        @font-face {
          font-family: 'Moderat Bold';
          src: url('data:font/woff2;base64,${base64Bold}') format('woff2');
          font-weight: bold;
          font-style: normal;
        }
      `;

        // Once all external CSS is loaded, update the HTML content
        Promise.all(cssPromises).then(styles => {
          let updatedHtml = htmlContent;

          // Add the custom @font-face rule to the beginning of the styles
          styles.unshift(fontFaceCSS); // Add custom font-face first in the styles

          // Wrap the external CSS content in <style> tags and inject them into the HTML
          if (styles.length > 0) {
            updatedHtml = `<head>${styles.map(style => `<style>${style}</style>`).join('')}</head>` + updatedHtml;
          }

          resolve(updatedHtml);
        });
      }).catch(err => {
        console.error('Failed to embed font:', err);
        resolve(htmlContent);  // Return original HTML if font loading fails
      });
    });
  }




  // Helper function to fetch CSS file content as text
  fetchCSS(cssUrl: string): Promise<string> {
    return fetch(cssUrl)
      .then(response => response.text())
      .catch(err => {
        console.error('Failed to load CSS:', err);
        return '';  // Return an empty string or a fallback CSS string
      });
  }

  // Helper function to convert font files to Base64
  convertFontToBase64(fontPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fontPath, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = () => {
        if (xhr.status === 200) {
          // Convert binary data to base64
          const base64 = this.arrayBufferToBase64(xhr.response);
          resolve(base64);
        } else {
          reject('Failed to load font');
        }
      };

      xhr.onerror = () => reject('Failed to load font');

      xhr.send();
    });
  }

  // Helper function to convert ArrayBuffer to Base64
  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary); // Convert to Base64
  }

  // Helper function to convert an SVG file to Data URL
  convertSvgToDataUrl(svgPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', svgPath, true);
      xhr.setRequestHeader('Content-Type', 'image/svg+xml');

      xhr.onload = () => {
        if (xhr.status === 200) {
          const svgContent = xhr.responseText;
          // Convert the SVG to a Data URL (Base64 encoding)
          const base64DataUrl = 'data:image/svg+xml;base64,' + window.btoa(svgContent);
          resolve(base64DataUrl);
        } else {
          reject('Failed to load SVG');
        }
      };

      xhr.onerror = () => reject('Failed to load SVG');

      xhr.send();
    });
  }


  // Function to embed SVGs as Data URLs in the exported HTML
  embedSvgImages(htmlContent: string): Promise<string> {
    return new Promise((resolve) => {
      const imgTags = Array.from(htmlContent.matchAll(/<img\s+[^>]*src="([^"]+)"/g)); // Find all image tags

      const svgPromises = imgTags.map((match) => {
        const svgPath = match[1];

        // Only process SVG files
        if (svgPath.endsWith('.svg')) {
          return this.convertSvgToDataUrl(svgPath).then((dataUrl) => {
            // Replace the src with the Data URL
            htmlContent = htmlContent.replace(svgPath, dataUrl);
          });
        } else {
          return Promise.resolve();
        }
      });

      // Once all SVGs are replaced with Data URLs, resolve
      Promise.all(svgPromises).then(() => resolve(htmlContent));
    });
  }

  getCSSVariables(): string {
    const root = document.documentElement;

    const variables = [
      '--color-table-row-active',
      '--color-badge-active',
      '--color-sidebar-light',
      '--font-color',
      '--font-color-2',
      '--border-color',
      '--color-secondary',
      '--color-info-icon',
      '--font-color-3',
      '--color--tab-background',
    ];

    const styles = variables.map((variable) => {
      const value = getComputedStyle(root).getPropertyValue(variable).trim();
      return `${variable}: ${value} !important;`;
    });

    return styles.join(' ');
  }


}
