import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { BookService } from '../book.service';
import { Book } from '../books/book';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit {
  books: Book[];
  author: any = {};

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorService
        .getAuthor(+params.get('authorId'))
        .subscribe(author => {
          this.author = author;
        });
    });

    this.route.paramMap.subscribe(params => {
      this.bookService.getBooks().subscribe(books => {
        this.books = books.filter(book => book.author === this.author.name);
      });
    });
  }
}
