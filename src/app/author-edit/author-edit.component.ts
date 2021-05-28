import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html'
})
export class AuthorEditComponent implements OnInit {
  constructor(
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  authorForm: FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorService
        .getAuthor(+params.get('authorId'))
        .subscribe(result => {
          this.authorForm = this.formBuilder.group({
            id: result.id,
            name: result.name,
            placeofbirth: result.placeofbirth,
            nationality: result.nationality,
            isactive: true
          });
        });
    });
  }

  onSubmit(authorData) {
    this.authorService.updateAuthor(authorData).subscribe(res => {
      this.authorForm.reset();
      this.router.navigate(['/authors']);
    });
  }
}
