import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.services";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products = [];
  showNewProduct = false;
  updatingProduct = null;
  constructor(private apiService: APIService) {}
  ngOnInit() {
    this.getDatas();
  }

  async getDatas() {
    let datas = await this.apiService.ListProducts();
    this.products = datas.items;
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
