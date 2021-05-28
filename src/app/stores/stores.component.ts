import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../store.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from './store';

@Component({
  selector: 'bookstore-stores',
  templateUrl: './stores.component.html'
})
export class StoresComponent implements OnInit, OnDestroy {
  constructor(private storeService: StoreService) {}

  stores: Store[] = [];
  storesSub: Subscription;
  filters = {
    name: '',
    place: '',
    address: ''
  };

  ngOnInit() {
    this.storesSub = this.storeService
      .getStores()
      .subscribe(result => (this.stores = result));
  }

  ngOnDestroy() {
    if (this.storesSub) this.storesSub.unsubscribe();
  }

  onDelete(storeId: number): void {
    this.storeService
      .deleteStore(storeId)
      .pipe(switchMap(res => this.storeService.getStores()))
      .subscribe(result => (this.stores = result));
  }
}
