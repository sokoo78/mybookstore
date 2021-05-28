import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html'
})
export class AuthorCreateComponent implements OnInit {
  authorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: '',
      placeofbirth: '',
      nationality: ''
    });
  }
  
  onSubmit(authorData) {
    authorData.isactive = true;
    this.authorService.createAuthor(authorData).subscribe(() => {
      this.authorForm.reset();
      this.router.navigate(['/authors']);
    });
  }
}
