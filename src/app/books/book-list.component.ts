import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'bookstore-books',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  pageTitle: string = 'Book List';
  books : any;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(result => this.books = result);
    //this.books = this.bookService.getBooks();
  }
}
