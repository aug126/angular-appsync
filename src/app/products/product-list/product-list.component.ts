import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { map, first, mergeMapTo, mapTo } from "rxjs/operators";
import {
  CreateProductInput,
  UpdateProductInput,
  ListProductsQuery
} from "../../app-sync/app/API2.services.service";

import Fuse, { FuseOptions } from "fuse.js";
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

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
  productsFiltered$: Observable<any>;
  fuse: Fuse<ListProductsQuery, FuseOptions<any>>;
  search$ = new BehaviorSubject('');
  constructor(private prodSvc: ProductsService) {}

  ngOnInit() {
    this.products$ = this.prodSvc.listProducts({ limit: 1000 }).pipe(
      map(data => {
        this.fuse = this._initFuse(data.items);
        console.log("init fuse for search");
        return data.items;
      })
    );

    this.products$.subscribe(products => {
      console.log("liste des produits affichés : ", products);
    });
    this.productsFiltered$ = combineLatest(
      this.products$,
      this.search$
    ).pipe(
      map(([products, search]) => {
        if (search) {
          return this.fuse.search(search);
        }
        return products
      })
    )
  }

  public trackByFn(index, product) {
    return product.id;
  }

  private _initFuse(products): Fuse<ListProductsQuery, FuseOptions<any>> {
    const fuseOptions = {
      shouldSort: true,
      includeScore: false,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      keys: ["name", "supplierName"]
    };
    return new Fuse(products, fuseOptions);
  }

  async filterProducts(e) {
    const searchWord = e.target.value;
    this.search$.next(searchWord);
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
    this.updatingProduct = { ...product };
  }

  closeModalUpdateProduct() {
    this.updatingProduct = null;
  }

  loadMore() {}
}
