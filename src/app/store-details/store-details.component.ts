import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html'
})
export class StoreDetailsComponent implements OnInit {
  store: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const storeId = +params.get('storeId');
      this.store = this.storeService.getStore(storeId);
    });
  }
}
