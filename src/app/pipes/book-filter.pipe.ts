import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      item =>        
        item.title.indexOf(filter.title) !== -1 &&
        item.author.indexOf(filter.author) !== -1 &&
        item.published.toString().indexOf(filter.date) !== -1
    );
  }
}
