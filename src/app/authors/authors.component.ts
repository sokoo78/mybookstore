import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../author.service';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Author } from './author';
import { Book } from '../books/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'bookstore-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit, OnDestroy {
  [x: string]: any;
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private bookService: BookService
  ) {}

  authors: Author[] = [];
  books: Book[] = [];
  authorsSub: Subscription;
  booksSub: Subscription;
  sortAscending = false;
  filters = {
    name: '',
    placeofbirth: '',
    nationality: ''
  };

  ngOnInit() {
    this.authorsSub = this.authorService
      .getAuthors()
      .subscribe(result => (this.authors = result));

    this.booksSub = this.bookService
      .getBooks()
      .subscribe(result => (this.books = result));
  }

  onHeaderClick(property: any) {
    if (this.sortAscending) {
      this.authors.sort((a, b) => (a[property] < b[property] ? -1 : 1));
      this.sortAscending = false;
      return;
    }
    this.authors.sort((a, b) => (a[property] > b[property] ? -1 : 1));
    this.sortAscending = true;
  }

  onDelete(authorId: number): void {
    let selectedAuthor: Author;
    let numberOfBooks: number;
    let authorBooks: Book[];
    selectedAuthor = this.authors.find(a => a.id === authorId);
    authorBooks = this.books.filter(
      book => book.author === selectedAuthor.name
    );

    numberOfBooks = authorBooks.length;
    if (numberOfBooks === 0) selectedAuthor.isactive = false;
    else
      alert('This author has books, and cannot be deleted. ' + numberOfBooks);
  }

  onUnDelete(authorId: number): void {
    this.authors.find(a => a.id === authorId).isactive = true;
  }

  /*onDelete(authorId: number): void {
    this.authorService
      .deleteAuthor(authorId)
      .pipe(switchMap(res => this.authorService.getAuthors()))
      .subscribe(result => (this.authors = result));
  }*/

  ngOnDestroy() {
    if (this.authorsSub) this.authorsSub.unsubscribe();
  }
}
