import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryClassText',
  standalone: true,
  pure: true // Ensure that it recalculates only when inputs change
})
export class CategoryClassTextPipe implements PipeTransform {

  transform(title: string | undefined, data: string | undefined): string {
    if (title === undefined) {
      return '';
    }
    if (data == 'Living income price ($/kg)') {
      if (title === 'High') {
        return 'red';
      } else if (title == 'Medium') {
        return 'yellow';
      } else {
        return 'green';
      }
    }
    else if (data == 'Cost of production ($)') {
      if (title === 'High') {
        return 'red';
      } else if (title == 'Medium') {
        return 'yellow';
      } else {
        return 'green';
      }
    }
    if (data == 'Production (kg/ha)') {
      if (title === 'High') {
        return 'green';
      } else if (title == 'Medium') {
        return 'yellow';
      } else {
        return 'red';
      }
    }
    return ''
  }

}
