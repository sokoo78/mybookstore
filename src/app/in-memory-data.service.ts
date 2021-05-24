import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookTable } from './books/books';
import { AuthorTable } from './authors/authors';
import { StoreTable } from './stores/stores';
import { Book } from './books/book';
import { Author } from './authors/author';
import { Store } from './stores/store';

@Injectable({ providedIn: 'any'})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let books: Book[] = BookTable.books;
    let authors: Author[] = AuthorTable.authors;
    let stores: Store[] = StoreTable.stores;
    return { books, authors, stores };
  }
}
