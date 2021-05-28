import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(books: any[], filters): any {
    if (!books || !filters) {
      return books;
    }
    return books.filter(
      item =>        
        item.title.indexOf(filters.title) !== -1 &&
        item.author.indexOf(filters.author) !== -1 &&
        item.published.toString().indexOf(filters.date) !== -1
    );
  }
}
