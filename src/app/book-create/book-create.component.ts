import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../author.service';
import { Author } from '../authors/author';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html'
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {}

  authors$: Observable<Author[]>;
  author: string;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      date: '',
      pageno: '',
      isbn: ''
    });
  }

  onSubmit(bookData) {
    bookData.author = this.author;
    this.bookService.createBook(bookData).subscribe(() => {
      this.bookForm.reset();
      this.router.navigate(['/books']);
    });
  }
}
