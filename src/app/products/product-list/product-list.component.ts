import { Component } from '@angular/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Product } from '../../app-sync/src/models';
import { TestDataStoreService } from 'src/app/services/test-data-store.service';
// import { Product } from '../graphql';

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



  newProduct() {
    this.showNewProduct = true;
  }

  createManyProducts() {
    this.testSrv.createManyProducts();
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
