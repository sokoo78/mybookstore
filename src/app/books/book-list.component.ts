import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'bookstore-books',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(result => (this.books = result));
  }
}
