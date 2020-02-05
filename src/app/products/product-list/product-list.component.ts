import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  showNewProduct = false;
  updatingProduct = null;
  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: '' };
  products$ = this.testSrv.productList$;

  constructor(private testSrv: TestDataStoreService) {}

<<<<<<< HEAD
=======

>>>>>>> f13eb4897a0b9bfe263624161d20f86104bc1c39

  newProduct() {
    this.showNewProduct = true;
  }

<<<<<<< HEAD
=======
  createManyProducts() {
    this.testSrv.createManyProducts();
  }
>>>>>>> f13eb4897a0b9bfe263624161d20f86104bc1c39

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
