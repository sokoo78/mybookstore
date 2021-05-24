import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html'
})
export class BookCreateComponent implements OnInit {
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

  onSubmit(bookData: any) {
    alert('form:\n' + JSON.stringify(bookData));
    this.bookForm.reset();
  }
}
