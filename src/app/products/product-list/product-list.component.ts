import { Component } from '@angular/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Product } from '../../app-sync/src/models';
// import { Product } from '../graphql';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor() {}
  products = [];
  showNewProduct = false;
  updatingProduct = null;
  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: '' };

  async getData() {
    this.products = await DataStore.query(Product, Predicates.ALL);
  }


  newProduct() {
    this.showNewProduct = true;
  }

  createManyProducts() {
    (new Array(100))
    .fill(null)
    .forEach((_, i) => DataStore.save(new Product({ name: `${i} PRODUCT`, supplierName: `product supplier` })));
  }

  closeModalNewProduct() {
    this.showNewProduct = false;
  }

  updateProduct(product) {
    const productCopy = { ...product };
    delete productCopy.__typename;
    this.updatingProduct = productCopy;
  }
  closeModalUpdateProduct() {
    this.updatingProduct = null;
  }

}
