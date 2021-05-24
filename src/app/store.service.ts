import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { Store } from './stores/store';

const STORE_URL = 'api/stores';

@Injectable({ providedIn: 'any'})
export class StoreService {
  constructor(private requestService: RequestService) {}

  getStores(): Observable<Store[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get<Store[]>(STORE_URL, httpOptions);
  }

  getStore(storeId: number): Observable<Store> {
    return this.requestService.get(`${STORE_URL}/${storeId}`);
  }

  createStore(store: Store): Observable<any> {
    return this.requestService.post(`${STORE_URL}/`, store);
  }

  updateStore(store: Store): Observable<any> {
    return this.requestService.put(`${STORE_URL}/`, store);
  }

  deleteStore(storeId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${STORE_URL}/${storeId}`;
    return this.requestService.delete(url, httpOptions);
  }
}
