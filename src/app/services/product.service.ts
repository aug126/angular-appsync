import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Product } from 'app-sync/src/models';
import { DataStore, Predicates } from '@aws-amplify/datastore';



@Injectable({ providedIn: 'root' })
export class ProductService {

  // private _productList$  = new BehaviorSubject([]);
  // productList$: Observable<Product>;

  // async loadProducts() {
  //   productsawait; DataStore.query(Product, Predicates.ALL);
  // }
}
