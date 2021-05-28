import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from './book';

@Component({
  selector: 'bookstore-books',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit, OnDestroy {
  constructor(private bookService: BookService) {}

  books: Book[] = [];
  booksSub: Subscription;
  sortAscending = false;

  ngOnInit() {
    this.booksSub = this.bookService
      .getBooks()
      .subscribe(result => (this.books = result));
  }

  onHeaderClick(property: any) {
    if (this.sortAscending) {
      this.books.sort((a, b) => (a[property] < b[property] ? -1 : 1));
      this.sortAscending = false;
      return;
    }

    this.books.sort((a, b) => (a[property] > b[property] ? -1 : 1));
    this.sortAscending = true;
  }

  onDeleteBook(bookId: number): void {
    this.bookService
      .deleteBook(bookId)
      .pipe(switchMap(res => this.bookService.getBooks()))
      .subscribe(result => (this.books = result));
  }

  ngOnDestroy() {
    if (this.booksSub) this.booksSub.unsubscribe();
  }
}
