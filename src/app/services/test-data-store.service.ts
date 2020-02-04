import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Category, Product } from '../app-sync/src/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestDataStoreService {

  productList$ = new BehaviorSubject([]);

  constructor() {
    // Initialise DataStore avec une action "vide"
    DataStore.query<Category>(Category);
  }

  loadProducts() {
    return DataStore.query<Product>(Product)
    .then(r => {
      debugger;
      this.productList$.next(r);
    });
  }


  createManyProducts() {
    (new Array(1000))
    .fill(null)
    .forEach((_, i) => DataStore.save(new Product({ name: `${i} PRODUCT`, supplierName: `product supplier` })));
  }

  queryProducts() {
    DataStore.query<Product>(Product);
  }

  createCategories() {
    (new Array(100))
    .fill(null)
    .forEach((_, i) => DataStore.save(new Category({ name: `${i} CATEGORY` })));
  }

  deleteProduct(id: string) {

  }

  updateProduct() {

  }
}
