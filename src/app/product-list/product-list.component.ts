import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.services";
import { NewProductComponent } from "../new-product/new-product.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products = [];
  showNewProduct = false;
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
  closeModal() {
    this.showNewProduct = false;
  }
}
