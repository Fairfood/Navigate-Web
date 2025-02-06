import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomHtmlGeneratorService {
  constructor() {}

  generatePopupScript(popupData: any): string {
    return `
      <script>
      // Define popup data for demonstration purposes
      const popupData = ${JSON.stringify(popupData)};
      let moreData  
      function openDetails(data) {
      const matchedItem = popupData.find(item => item.title === data);
      
      // Set title and description
      if (matchedItem) {
      document.getElementById('title').innerText = matchedItem.title;
      document.getElementById('description').innerText = matchedItem.description;
      
      // Populate table headers
      const tableHead = document.querySelector('#transaction-listing-table thead tr');
      tableHead.innerHTML = ''; // Clear existing headers
      matchedItem.table.head.forEach(header => {
      const th = document.createElement('th');
      th.className = 'normal-column';
      th.textContent = header;
      tableHead.appendChild(th);
      });
      
      // Set default table rows to 'Rainforest Alliance' values if available
      const defaultItem = matchedItem.table.rows.find(row => row.id === 'Rainforest Alliance');
      if (defaultItem) {
      moreData=defaultItem.details
       (moreData,'comments')
      populateTableRows(defaultItem.values);
      document.querySelector(".custom-select span").innerText = "Rainforest Alliance";
      }
      
      // Populate dropdown with IDs
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = ''; // Clear existing options
      matchedItem.table.rows.forEach(item => {
      const label = document.createElement('label');
      label.className = 'option';
      
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'method';
      radio.value = item.id;
      radio.onclick = () => selectOption(item.id, matchedItem.table.rows); // Set selected option text and update rows
      
      // Set 'Rainforest Alliance' as the default option
      if (item.id === 'Rainforest Alliance') {
        radio.checked = true;
      }
      
      const text = document.createTextNode(item.id);
      label.appendChild(radio);
      label.appendChild(text);
      optionsContainer.appendChild(label);
      });
      } else {
      document.getElementById('title').innerText = data;
      }
      
      // Display the dialog
      document.getElementById('dialog').style.display = 'block';
      document.body.classList.add('no-scroll');
      }
      
      function closeDialog() {
      document.getElementById('dialog').style.display = 'none';
      document.body.classList.remove('no-scroll');
      }
      
      // Function to populate table rows with given values
      function populateTableRows(values) {
      const tableBody = document.querySelector('#transaction-listing-table tbody');
      tableBody.innerHTML = ''; // Clear existing rows
      
      values.forEach((rowValues, rowIndex) => {
      const tr = document.createElement('tr');
      tr.classList.add('pointer');
      
      rowValues.forEach((value, columnIndex) => {
      const td = document.createElement('td');
      td.className = 'mat-cell normal-column';
      
      // Check if the value is 'noteField' and display an image if it is
      if (value === 'noteField') {
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTQuNzYxNyIgY3k9IjE0Ljg2NjkiIHI9IjE0IiBmaWxsPSIjMDAzQTYwIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zM18yMCkiPgo8cGF0aCBkPSJNMTcuOTU5MiAxMC44MjcySDEyLjQzMTRDMTEuMTYxNCAxMC44MjcyIDEwLjEyODIgMTEuODYwNCAxMC4xMjgyIDEzLjEzMDRWMTYuODE1NkMxMC4xMjgyIDE3LjkyNzYgMTAuOTIwOSAxOC44NTgxIDExLjk3MDggMTkuMDcyM1YyMC41MDA4QzExLjk3MDggMjAuNjcwOCAxMi4wNjQzIDIwLjgyNjkgMTIuMjE0IDIwLjkwNzFDMTIuMjgyMiAyMC45NDM1IDEyLjM1NjggMjAuOTYxNSAxMi40MzE0IDIwLjk2MTVDMTIuNTIwOCAyMC45NjE1IDEyLjYwOTcgMjAuOTM1MiAxMi42ODcxIDIwLjg4NDFMMTUuMzM0OSAxOS4xMTg5SDE3Ljk1OTJDMTkuMjI5MiAxOS4xMTg5IDIwLjI2MjQgMTguMDg1NiAyMC4yNjI0IDE2LjgxNTZWMTMuMTMwNEMyMC4yNjI0IDExLjg2MDQgMTkuMjI5MiAxMC44MjcyIDE3Ljk1OTIgMTAuODI3MlpNMTQuOTM5NiAxOC4yNzVMMTIuODkyMSAxOS42Mzk5VjE4LjY1ODJDMTIuODkyMSAxOC40MDM5IDEyLjY4NTcgMTguMTk3NiAxMi40MzE0IDE4LjE5NzZDMTEuNjY5NSAxOC4xOTc2IDExLjA0OTUgMTcuNTc3NSAxMS4wNDk1IDE2LjgxNTZWMTMuMTMwNEMxMS4wNDk1IDEyLjM2ODUgMTEuNjY5NSAxMS43NDg1IDEyLjQzMTQgMTEuNzQ4NUgxNy45NTkyQzE4LjcyMTEgMTEuNzQ4NSAxOS4zNDExIDEyLjM2ODUgMTkuMzQxMSAxMy4xMzA0VjE2LjgxNTZDMTkuMzQxMSAxNy41Nzc1IDE4LjcyMTEgMTguMTk3NiAxNy45NTkyIDE4LjE5NzZIMTUuMTk1M0MxNS4xNjMxIDE4LjE5NzEgMTUuMTE3IDE4LjIwMDMgMTUuMDY0NSAxOC4yMTZDMTUuMDA5MiAxOC4yMzIxIDE0Ljk2NzMgMTguMjU2MSAxNC45Mzk2IDE4LjI3NVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzNfMjAiPgo8cmVjdCB3aWR0aD0iMTEuMDU1NSIgaGVpZ2h0PSIxMS4wNTU1IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS42Njc0OCAxMC4zNjY2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo='; 
      img.alt = 'Comment icon';
      img.style.width = '20px';
      img.style.height = '20px';
      img.classList.add('clickable'); // Add class to make it clickable
      
      // Add click event to show/hide expanded row
      img.onclick = () => toggleRow(rowIndex, tr);
      td.appendChild(img);
      } else {
      td.textContent = value;
      }
      
      tr.appendChild(td);
      });
      
      tableBody.appendChild(tr); // Append the main row to the table body
      });
      }
      
      function toggleRow(rowIndex, mainRow) {
      const existingExpandedRow = document.querySelector('.expanded-row');
      
      // Remove any currently open expanded row
      if (existingExpandedRow) {
      existingExpandedRow.remove();
      }
      
      // If the expanded row for the clicked image is already open, close it
      if (existingExpandedRow && existingExpandedRow.dataset.index == rowIndex) {
      return;
      }
      
      // Create the expanded row
      const expandedRow = document.createElement('tr');
      expandedRow.classList.add('expanded-row');
      expandedRow.dataset.index = rowIndex;
      
      const expandedTd = document.createElement('td');
      expandedTd.colSpan = mainRow.children.length; // Span across all columns
      expandedTd.className = 'mat-cell';
      
      const section = document.createElement('section');
      section.classList.add('expanded-item');
      
      // Loop through all items in moreData
      moreData.forEach(item => {
      const itemSection = document.createElement('div');
      itemSection.classList.add('item-section');
      
      // Add the document image
      const docImage = document.createElement('img');
      docImage.src = item.imageUrl || 'data:image/png;base64,iVBORw0KGgoAAAANSUh...'; // Default image
      docImage.alt = 'Document';
      docImage.classList.add('docImage');
      itemSection.appendChild(docImage);
      
      // Add the comment and source text
      const aside = document.createElement('aside');
      aside.classList.add('flex-column','comment-container');
      
      const commentHeader = document.createElement('h3');
      commentHeader.classList.add('text', 'font-regular-color');
      commentHeader.textContent = item.title;
      aside.appendChild(commentHeader);
      
      const commentText = document.createElement('article');
      commentText.classList.add('text', 'font-regular-color');
      commentText.textContent = item.description;
      aside.appendChild(commentText);
      
      const sourceText = document.createElement('article');
      sourceText.classList.add('source', 'font-regular-color');
      sourceText.textContent = 'Source: ' + item.source;
      aside.appendChild(sourceText);
      
      itemSection.appendChild(aside);
      section.appendChild(itemSection);
      
      // Add a line break between items
      const lineBreak = document.createElement('div');
      lineBreak.classList.add('comment-separator'); // You can add CSS for a better visual separator
      section.appendChild(lineBreak);
      });
      
      expandedTd.appendChild(section);
      expandedRow.appendChild(expandedTd);
      
      // Insert the expanded row directly after the main row
      mainRow.insertAdjacentElement('afterend', expandedRow);
      }
      
      
      // Function to select an option and update table rows accordingly
      function selectOption(id, rows) {
      const selectedItem = rows.find(row => row.id === id);
      if (selectedItem) {
      populateTableRows(selectedItem.values);
      document.querySelector(".custom-select span").innerText = " " + id;
      }
      toggleDropdown(); // Close dropdown after selection
      }
      
      // Toggle dropdown display
      function toggleDropdown() {
      const options = document.getElementById("options");
      options.style.display = options.style.display === "block" ? "none" : "block";
      }
      
      // Event listener for table cell clicks
      document.addEventListener('DOMContentLoaded', function() {
      const tableCells = document.querySelectorAll('.mat-cell.pointer');
      tableCells.forEach(cell => {
      cell.addEventListener('click', function() {
      const data = cell.getAttribute('data-dialog-content');
      if (data) {
        openDetails(data);
      } else {
         ('No data-dialog-content found on cell');
      }
      });
      });
      });
      
      // Close the dropdown if clicked outside
      document.addEventListener('click', function(event) {
      const dropdown = document.querySelector('.custom-select');
      if (!dropdown.contains(event.target)) {
      document.getElementById('options').style.display = 'none';
      }
      });
      </script>
      
      
      
      `;
  }

  generatePaginatedContent(deforestationData: any[]): string {
    const pageSize = 3; // Items per page
    const totalPages = Math.ceil(deforestationData.length / pageSize);
    let paginatedContent = '';

    for (let i = 0; i < totalPages; i++) {
      const pageItems = deforestationData.slice(
        i * pageSize,
        (i + 1) * pageSize
      );
      paginatedContent += `
        <div class="deforestation-list" id="deforestation-list-${
          i + 1
        }" style="display: ${i === 0 ? 'block' : 'none'};">
          <ul style="list-style: none !important;
          padding: 0 !important;
          min-height: 120px !important;">
            ${pageItems
              .map(
                (item: any) => `
                  <li class="flex-between" style="padding: 10px 0 !important;
                  display: flex !important;
                  justify-content: space-between !important;">
                    <span class="key font-regular-color">${item.name}</span>
                    <span class="value font-bold-color">${item.value}</span>
                  </li>`
              )
              .join('')}
          </ul>
        </div>`;
    }

    paginatedContent += `
      <div class="pagination-controls" style="display: flex;
      justify-content: end;
      align-items: center;">
      <button 
              mat-icon-button 
              type="button" 
              class="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-previous mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
              ng-reflect-message="Previous page" 
              ng-reflect-disabled="true" 
              ng-reflect-position="above" 
              aria-label="Previous page"
              id="prevButton"
              onclick="changePage(currentPage - 1)"
              disabled>
              <span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>
              <svg viewBox="0 0 24 24" focusable="false" class="mat-mdc-paginator-icon">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              </svg>
              <span class="mat-mdc-focus-indicator"></span>
              <span matripple="" class="mat-ripple mat-mdc-button-ripple" ng-reflect-disabled="true" ng-reflect-centered="true" ng-reflect-trigger="[object HTMLButtonElement]"></span>
              <span class="mat-mdc-button-touch-target"></span>
            </button>
            <span id="paginationInfo"></span>
      
            
          
            <!-- Next button -->
            <button 
              mat-icon-button 
              type="button" 
              class="mat-mdc-tooltip-trigger mat-mdc-paginator-navigation-next mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
              ng-reflect-message="Next page" 
              ng-reflect-disabled="false" 
              ng-reflect-position="above" 
              aria-label="Next page"
              id="nextButton"
              onclick="changePage(currentPage + 1)">
              <span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>
              <svg viewBox="0 0 24 24" focusable="false" class="mat-mdc-paginator-icon">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
              <span class="mat-mdc-focus-indicator"></span>
              <span matripple="" class="mat-ripple mat-mdc-button-ripple" ng-reflect-disabled="false" ng-reflect-centered="true" ng-reflect-trigger="[object HTMLButtonElement]"></span>
              <span class="mat-mdc-button-touch-target"></span>
            </button>
      </div>
      <script>
        let currentPage = 1;
        const itemsPerPage = ${pageSize};
        const totalItems = ${deforestationData.length};
        const totalPages = ${totalPages};
  
        function changePage(pageNumber) {
          if (pageNumber < 1 || pageNumber > totalPages) return;
          currentPage = pageNumber;
          const lists = document.querySelectorAll('.deforestation-list');
          lists.forEach((list, index) => {
            list.style.display = index + 1 === pageNumber ? 'block' : 'none';
          });
  
          document.getElementById('prevButton').disabled = currentPage === 1;
          document.getElementById('nextButton').disabled = currentPage === totalPages;
          document.getElementById('paginationInfo').textContent = 
            \`\${(currentPage - 1) * itemsPerPage + 1} – \${Math.min(currentPage * itemsPerPage, totalItems)} of \${totalItems}\`;
        }
  
        changePage(1);
      </script>`;
    return paginatedContent;
  }
}
