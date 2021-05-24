import { Book } from './book';

export class BookTable {
  public static books: Book[] = [
    {
      id: 1,
      title: 'The Foundation',
      author: 'Isaac Asimov',
      date: '2016.01.22',
      pageno: 320,
      isbn: '9789632585147'
    },
    {
      id: 2,
      title: 'Lord of the rings',
      author: 'J. R. R. Tolkien',
      date: '1954.07.29',
      pageno: 1216,
      isbn: '9780544003415'
    }
  ];
}
