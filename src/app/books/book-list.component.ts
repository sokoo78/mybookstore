import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bookstore-books',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit, OnDestroy {
  constructor(private bookService: BookService) {}

  books: any[] = [];
  booksSub: Subscription;

  ngOnInit() {
    this.booksSub = this.bookService
      .getBooks()
      .subscribe(result => (this.books = result));
  }

  ngOnDestroy() {
    if (this.booksSub) this.booksSub.unsubscribe();
  }

  onDeleteBook(bookId: number): void {
    this.bookService
      .deleteBook(bookId)
      .pipe(switchMap(res => this.bookService.getBooks()))
      .subscribe(result => (this.books = result));
  }
}
