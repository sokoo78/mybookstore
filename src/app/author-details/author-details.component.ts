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
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const authorId = +params.get('authorId');
      this.author = this.authorService.getAuthor(authorId);
    });
  }
}
