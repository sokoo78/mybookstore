import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../author.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Author } from './author';

@Component({
  selector: 'bookstore-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit, OnDestroy {
  constructor(private authorService: AuthorService) {}

  authors: Author[] = [];
  authorsSub: Subscription;

  ngOnInit() {
    this.authorsSub = this.authorService
      .getAuthors()
      .subscribe(result => (this.authors = result));
  }

  ngOnDestroy() {
    if (this.authorsSub) this.authorsSub.unsubscribe();
  }

  onDeleteAuthor(authorId: number): void {
    this.authorService
      .deleteAuthor(authorId)
      .pipe(switchMap(res => this.authorService.getAuthors()))
      .subscribe(result => (this.authors = result));
  }
}
