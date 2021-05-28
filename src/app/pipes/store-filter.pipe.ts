import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '../stores/store';

@Pipe({
  name: 'storeFilter',
  pure: false
})
export class StoreFilterPipe implements PipeTransform {
  transform(stores: Store[], filters: any): any {
    if (!stores || !filters) {
      return stores;
    }
    return stores.filter(
      item =>
        item.name.toLocaleLowerCase().indexOf(filters.name.toLowerCase()) !==
          -1 &&
        item.place.toLocaleLowerCase().indexOf(filters.place.toLowerCase()) !==
          -1 &&
        item.address
          .toLocaleLowerCase()
          .toString()
          .indexOf(filters.address.toLowerCase()) !== -1
    );
  }
}
