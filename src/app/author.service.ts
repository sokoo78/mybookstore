import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { Author } from './authors/author';

const AUTHOR_URL = 'api/authors';

@Injectable({ providedIn: 'any'})
export class AuthorService {
  constructor(private requestService: RequestService) {}

  getAuthors(): Observable<Author[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get<Author[]>(AUTHOR_URL, httpOptions);
  }

  getAuthor(authorId: number): Observable<Author> {
    return this.requestService.get(`${AUTHOR_URL}/${authorId}`);
  }

  createAuthor(author: Author): Observable<any> {
    return this.requestService.post(`${AUTHOR_URL}/`, author);
  }

  updateAuthor(author: Author): Observable<any> {
    return this.requestService.put(`${AUTHOR_URL}/`, author);
  }

  deleteAuthor(authorId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${AUTHOR_URL}/${authorId}`;
    return this.requestService.delete(url, httpOptions);
  }
}
