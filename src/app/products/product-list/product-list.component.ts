import { Component } from '@angular/core';

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


  newProduct() {
    this.showNewProduct = true;
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
