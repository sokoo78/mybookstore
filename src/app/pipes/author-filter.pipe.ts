import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../authors/author';

@Pipe({
  name: 'authorFilter',
  pure: false
})
export class AuthorFilterPipe implements PipeTransform {
  transform(authors: Author[], filters): any {
    if (!authors || !filters) {
      return authors;
    }
    return authors.filter(
      item =>        
        item.name.indexOf(filters.title) !== -1 &&
        item.placeofbirth.indexOf(filters.author) !== -1 &&
        item.nationality.toString().indexOf(filters.date) !== -1
    );
  }
}
