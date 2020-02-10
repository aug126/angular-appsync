import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AppsyncClientService } from '../../services/appsync-client.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements  OnInit {
  showNewProduct = false;
  updatingProduct = null;
  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: '' };

  // observer pour refetch

  products$

  constructor( 
    private productsSvc: ProductsService,
    private clientSvc: AppsyncClientService
  ){}

  ngOnInit() {
    this.clientSvc.client.hydrated().then(() => {
       this.products$ = this.productsSvc.getAllProducts();
    })
  }


  newProduct() {
    this.showNewProduct = true;
  }


  closeModalNewProduct() {
    this.showNewProduct = false;
  }

  updateProduct(product) {
    const productCopy = { ...product };
    delete productCopy.__typename;
    delete productCopy._deleted;
    delete productCopy._lastChangedAt;
    this.updatingProduct = productCopy;
  }
  closeModalUpdateProduct() {
    this.updatingProduct = null;
  }

  loadMore() {
    // ({
    //         variables: {
    //           offset: data.feed.length
    //         },
    //         updateQuery: (prev, { fetchMoreResult }) => {
    //           if (!fetchMoreResult) return prev;
    //           return Object.assign({}, prev, {
    //             feed: [...prev.feed, ...fetchMoreResult.feed]
    //           });
    //         }
    //       })
  }

}
