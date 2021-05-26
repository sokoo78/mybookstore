import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookService.getBook(+params.get('bookId')).subscribe(book => {
        this.book = book;
      });
    });
  }
}
