import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { BookService } from '../book.service';
import { Book } from '../books/book';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html'
})
export class StoreDetailsComponent implements OnInit {
  books: Book[];
  store: any = {};

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storeService.getStore(+params.get('storeId')).subscribe(store => {
        this.store = store;
      });
    });

    this.route.paramMap.subscribe(() => {
      this.bookService.getBooks().subscribe(books => {
        this.books = books.filter(book => this.store.books.includes(book.id));
      });
    });
  }
}
