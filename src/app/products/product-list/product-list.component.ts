import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { map } from "rxjs/operators";
import {
  CreateProductInput,
  UpdateProductInput
} from "../../app-sync/app/API2.services.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  showNewProduct = false;

  updatingProduct: CreateProductInput | UpdateProductInput | null;

  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: "" };

  products$;

  constructor(private prodSvc: ProductsService) {}

  ngOnInit() {
    this.products$ = this.prodSvc
      .listProducts({ limit: 1000 })
      .pipe(map(r => r.items));
    this.products$.subscribe(products =>
      console.log("liste des produits affichés : ", products)
    );
  }

  public trackByFn(index, product) {
    return product.id;
  }

  newProduct() {
    this.showNewProduct = true;
  }

  closeModalNewProduct() {
    this.showNewProduct = false;
  }

  updateProduct(product) {
    // this.prodSvc.getProduct({ id: product.id }).subscribe(product => {
    //   console.log("the product to update : ", product);
    //   this.updatingProduct = product;
    // }); // * getProduct is a bad way for offline (and speed)
    this.updatingProduct = {...product};
  }

  closeModalUpdateProduct() {
    this.updatingProduct = null;
  }

  loadMore() {
  }
}
