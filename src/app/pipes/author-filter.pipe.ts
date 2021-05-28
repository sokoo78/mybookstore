import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../authors/author';

@Pipe({
  name: 'authorFilter',
  pure: false
})
export class AuthorFilterPipe implements PipeTransform {
  transform(authors: Author[], filters: any): any {
    if (!authors || !filters) {
      return authors;
    }
    return authors.filter(
      item =>
        item.name.toLocaleLowerCase().indexOf(filters.name.toLowerCase()) !==
          -1 &&
        item.placeofbirth
          .toLocaleLowerCase()
          .indexOf(filters.placeofbirth.toLowerCase()) !== -1 &&
        item.nationality
          .toLocaleLowerCase()
          .toString()
          .indexOf(filters.nationality.toLowerCase()) !== -1 &&
        item.isactive == true
    );
  }
}
