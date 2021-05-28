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
        item.title.toLocaleLowerCase().indexOf(filters.title.toLowerCase()) !==
          -1 &&
        item.author
          .toLocaleLowerCase()
          .indexOf(filters.author.toLowerCase()) !== -1 &&
        item.date
          .toString()
          .toLocaleLowerCase()
          .indexOf(filters.date.toLowerCase()) !== -1
    );
  }
}
