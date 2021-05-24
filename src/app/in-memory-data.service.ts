import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookTable } from './books/books';
import { AuthorTable } from './authors/authors';
import { StoreTable } from './stores/stores';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const db = {
      books: BookTable.books,
      authors: AuthorTable.authors,
      stores: StoreTable.stores
    };
    return db;
  }
}
