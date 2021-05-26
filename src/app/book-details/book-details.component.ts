import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const bookId = +params.get('bookId');
      this.book = this.bookService.getBook(bookId);
    });
  }
}
