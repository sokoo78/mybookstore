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
    this.authorService
      .deleteAuthor(authorId)
      .pipe(switchMap(res => this.authorService.getAuthors()))
      .subscribe(result => (this.authors = result));
  }

  ngOnDestroy() {
    if (this.authorsSub) this.authorsSub.unsubscribe();
  }
}
