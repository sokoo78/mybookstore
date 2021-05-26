import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../books/book';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html'
})
export class StoreDetailsComponent implements OnInit {
  books: Book[];
  store: any = {};
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const storeId = +params.get('storeId');
      this.store = this.storeService.getStore(storeId);
    });

    this.route.paramMap.subscribe(params => {
      this.bookService.getBooks().subscribe(books => {
        this.books = books.filter(book => this.store.books.includes(book.id));
      });
    });
  }
}
