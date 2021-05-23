import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {  

  books : any;

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get('/assets/books.json');
  }

  getBook(bookId: number) {
    this.getBooks().subscribe(result => this.books = result);
    return this.books.find((b: { id: number; }) => b.id === bookId);
  }
}
