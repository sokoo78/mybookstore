import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { Book } from './books/book';

const BOOK_URL = 'api/books';

@Injectable({ providedIn: 'any' })
export class BookService {
  constructor(private requestService: RequestService) {}

  getBooks(): Observable<Book[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get<Book[]>(BOOK_URL, httpOptions);
  }

  getBook(bookId: number): Observable<Book> {
    return this.requestService.get(`${BOOK_URL}/${bookId}`);
  }  

  createBook(book: Book): Observable<any> {
    return this.requestService.post(`${BOOK_URL}/`, book);
  }

  updateBook(book: Book): Observable<any> {
    return this.requestService.put(`${BOOK_URL}/`, book);
  }

  deleteBook(bookId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${BOOK_URL}/${bookId}`;
    return this.requestService.delete(url, httpOptions);
  }
}
