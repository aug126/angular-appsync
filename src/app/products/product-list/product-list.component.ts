import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { map } from "rxjs/operators";
import { ListProductsQuery } from "src/app/app-sync/app/API2.services.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  showNewProduct = false;
  updatingProduct = null;
  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: "" };

  products$;

  constructor(private prodSvc: ProductsService) {}

  ngOnInit() {
    this.products$ = this.prodSvc
      .ListProducts({ limit: 1000 })
      .pipe(map(r => r.items));
    this.products$.subscribe(products => console.log(products));
  }

  newProduct() {
    this.showNewProduct = true;
  }

  closeModalNewProduct() {
    this.showNewProduct = false;
  }

  updateProduct(product) {}

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
