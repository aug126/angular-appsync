import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../app-sync/src/models';



@Injectable({ providedIn: 'root' })
export class ProductServiceV2 {

  private _productList$  = new BehaviorSubject([]);
  productList$: Observable<Product>;

  loadList() {

  }

}
