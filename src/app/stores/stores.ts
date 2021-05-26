import { Store } from './store';

export class StoreTable {
  public static stores: Store[] = [
    {
      id: 1,
      name: 'MikkeMakka Books',
      place: 'Budapest',
      zipcode: '1122',
      address: 'Búzakalász utca 27.',
      openinghours: '8:00 - 16:00',
      books: [1, 3],
      amounts: [5, 2]
    },
    {
      id: 2,
      name: 'Libri',
      place: 'Zalaegerszeg',
      zipcode: '8390',
      address: 'Zala Plaza első emelet',
      openinghours: '9:00 - 17:00',
      books: [2],
      amounts: [3]
    }
  ];
}
