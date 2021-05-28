import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../author.service';
import { Author } from '../authors/author';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html'
})
export class StoreCreateComponent implements OnInit {
  storeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storeForm = this.formBuilder.group({
      name: '',
      place: '',
      zipcode: '',
      address: '',
      openinghours: ''
    });
  }

  onSubmit(storeData) {
    storeData.books = [];
    storeData.amounts = [];
    this.storeService.createStore(storeData).subscribe(() => {
      this.storeForm.reset();
      this.router.navigate(['/stores']);
    });
  }
}
