import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../author.service';
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

  authors$: Observable<any>;
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
    this.bookService.createBook(bookData).subscribe(res => {
      this.bookForm.reset();
      this.router.navigate(['/books']);
    });
  }
}
