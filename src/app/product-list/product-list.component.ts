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
  ngOnInit() {
    this.getDatas();
    this.addSubscriptions();
  }

  async getDatas() {
    let datas = await this.apiService.ListProducts(null, 50);
    this.products = datas.items;
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
