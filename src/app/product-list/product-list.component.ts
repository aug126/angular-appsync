import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.services";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(private apiService: APIService) {}
  products = [];
  showNewProduct = false;
  updatingProduct = null;
  infiniteScroll = { loading: false, maxDone: false, limit: 0, nextToken: "" };
  ngOnInit() {
    this.initLimit();
    this.getDatas();
    this.addSubscriptions();
    this.setInfiniteScroll();
  }

  initLimit() {
    switch (true) {
      case screen.width > 1900:
        this.infiniteScroll.limit = 40;
        break;
      case screen.width > 1200:
        this.infiniteScroll.limit = 25;
        break;
      case screen.width > 640:
        this.infiniteScroll.limit = 15;
        break;
      default:
        this.infiniteScroll.limit = 15;
    }
  }

  async getDatas() {
    if (this.infiniteScroll.maxDone === true) return;
    if (this.infiniteScroll.loading === true) return;
    this.infiniteScroll.loading = true;
    let datas = await this.apiService.ListProducts(
      null,
      this.infiniteScroll.limit,
      this.infiniteScroll.nextToken
    );
    if (datas.nextToken === null) this.infiniteScroll.maxDone = true; // Strop le infinite scroll.
    this.infiniteScroll.nextToken = datas.nextToken;
    this.products.push(...datas.items);
    this.infiniteScroll.loading = false;
  }

  setInfiniteScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        this.getDatas();
      }
    };
  }

  addSubscriptions() {
    this.apiService.OnCreateProductListener.subscribe({
      next: data => {
        let newProduct = data.value.data.onCreateProduct;
        this.products.push(newProduct);
      }
    });
    this.apiService.OnUpdateProductListener.subscribe({
      next: data => {
        let updatedProduct = data.value.data.onUpdateProduct;
        let updatedIndex = this.products.findIndex(
          product => product.id === updatedProduct.id
        );
        this.products[updatedIndex] = updatedProduct;
      }
    });
    this.apiService.OnDeleteProductListener.subscribe({
      next: data => {
        let deletedProduct = data.value.data.onDeleteProduct;
        let deletedIndex = this.products.findIndex(
          product => product.id === deletedProduct.id
        );
        this.products.splice(deletedIndex, 1);
      }
    });
  }

  newProduct() {
    this.showNewProduct = true;
  }

  closeModalNewProduct() {
    this.showNewProduct = false;
  }

  updateProduct(product) {
    let productCopy = { ...product };
    delete productCopy.__typename;
    this.updatingProduct = productCopy;
  }
  closeModalUpdateProduct() {
    this.updatingProduct = null;
  }
}
