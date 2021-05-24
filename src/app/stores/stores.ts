import { Store } from './store';

export class StoreTable {
  public static authors: Store[] = [
    {
      id: 1,
      name: 'MikkeMakka Books',
      place: 'Budapest',
      zipcode: '1122',
      address: 'Búzakalász utca 27.',
      openinghours: '8:00 - 16:00'
    },
    {
      id: 2,
      name: 'Libri',
      place: 'Zalaegerszeg',
      zipcode: '8390',
      address: 'Zala Plaza első emelet',
      openinghours: '9:00 - 17:00'
    }
  ];
}
