import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookTable } from './books/books';

@Injectable()
export class InMemoryBookService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const db = {
      events: BookTable.books
    };
    return db;
  }
}
