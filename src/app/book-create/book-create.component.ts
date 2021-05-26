import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html'
})
export class BookCreateComponent implements OnInit {
  private router: Router;
  private bookService: BookService;
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      date: '',
      pageno: '',
      isbn: ''
    });
  }

  //onSubmit(bookData: any) {
  // alert('form:\n' + JSON.stringify(bookData));
  //this.bookForm.reset();
  //}

  onSubmit(bookData) {
    alert('Form submitted:\n' + JSON.stringify(bookData));
    this.bookService.createBook(bookData).subscribe(() => {
      this.bookForm.reset();
      this.router.navigate(['/books']);
    });
  }
}
