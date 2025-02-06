import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryClassPipe',
  standalone: true,
  pure: true // Ensure that it recalculates only when inputs change
})
export class CategoryClassPipe implements PipeTransform {
  transform(title: string | undefined, id: number | undefined): string {
    if (title === undefined) {
      return '';
    }
    if (id == 1) {
      if (title === 'High') {
        return 'red';
      } else if (title == 'Medium') {
        return 'yellow';
      } else {
        return 'green';
      }
    }
    else if (id == 2) {
      if (title === 'High') {
        return 'red';
      } else if (title == 'Medium') {
        return 'yellow';
      } else {
        return 'green';
      }
    }
    if (id == 3) {
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
