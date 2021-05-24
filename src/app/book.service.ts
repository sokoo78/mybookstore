import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';

const BOOK_URL = 'api/books';

@Injectable()
export class BookService {
  constructor(private requestService: RequestService) {}

  getBooks(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get<any>(BOOK_URL, httpOptions);
  }

  getBook(bookId): Observable<any> {
    return this.requestService.get(`${BOOK_URL}/${bookId}`);
  }

  createBook(book: any): Observable<any> {
    return this.requestService.post(`${BOOK_URL}/`, book);
  }

  updateBook(book: any): Observable<any> {
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
