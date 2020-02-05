import { Injectable } from '@angular/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Category, Product } from '../app-sync/src/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { APIService } from '../API.services';

@Injectable({
  providedIn: 'root'
})
export class TestDataStoreService {
  products = [];
  productList$ = new BehaviorSubject([]);

  constructor(private apiSrv: APIService) {
    // this.api.query;
    // DataStore.observe(Product, Predicates.ALL).subscribe(d => {
    //   debugger;
    // });
    DataStore.query<Product>(Product, product => product.name('eq', '82382')).then(c => console.log(c));
    // this.apiSrv.ListProducts({ id: { contains: '029fcbfe-3509-4b84-8168-6ec35a4db92e' }}).then(r => console.log(r));
    DataStore.query<Product>(Product, '029fcbfe-3509-4b84-8168-6ec35a4db92e' )
    .then( res => console.log(res));
    // DataStore.query<Product>(Product, '029fcbfe-3509-4b84-8168-6ec35a4db92e')
    //   .then(product => DataStore.save(Product.copyOf(product, updated => {
    //     updated.name += ' edited';
    //   })));
  }

  loadProducts() {

  }


  createManyProducts() {
    console.log('');
    const promises = (new Array(1000))
    .fill(null)
    .map((_, i) => DataStore.save(new Product({ name: `${i} PRODUCT`, supplierName: `product supplier` })));
    Promise.all(promises).then(_ => console.log('finished'));
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
