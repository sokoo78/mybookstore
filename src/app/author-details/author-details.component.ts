import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit {
  author: any = {};

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorService
        .getAuthor(+params.get('authorId'))
        .subscribe(author => {
          this.author = author;
        });
    });
  }
}
