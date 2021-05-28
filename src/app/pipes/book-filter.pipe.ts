import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../books/book';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filters): any {
    if (!books || !filters) {
      return books;
    }
    return books.filter(
      item =>        
        item.title.indexOf(filters.title) !== -1 &&
        item.author.indexOf(filters.author) !== -1 &&
        item.date.toString().indexOf(filters.date) !== -1
    );
  }
}
