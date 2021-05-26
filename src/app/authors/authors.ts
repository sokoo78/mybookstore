import { Author } from './author';

export class AuthorTable {
  public static authors: Author[] = [
    {
      id: 1,
      name: 'Isaac Asimov',
      placeofbirth: 'Petrovicsi',
      nationality: 'Russian'
    },
    {
      id: 2,
      name: 'J. R. R. Tolkien',
      placeofbirth: 'Bloemfontein',
      nationality: 'English'
    },
    {
      id: 3,
      name: 'Ayn Rand',
      placeofbirth: 'Szentpétervár',
      nationality: 'American'
    }
  ];
}
