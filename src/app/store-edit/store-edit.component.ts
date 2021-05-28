import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html'
})
export class StoreEditComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  storeForm: FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.storeService
        .getStore(+params.get('storeId'))
        .subscribe(result => {
          this.storeForm = this.formBuilder.group({
            id: result.id,
            name: result.name,
            city: result.place,
            zip: result.zipcode,
            address: result.address,
            open: result.openinghours
          });
        });
    });
  }

  onSubmit(storeData) {
    this.storeService.updateStore(storeData).subscribe(() => {
      this.storeForm.reset();
      this.router.navigate(['/stores']);
    });
  }
}
