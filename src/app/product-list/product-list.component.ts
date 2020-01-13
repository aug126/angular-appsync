import { Component, OnInit } from "@angular/core";
import { APIService } from "../API.services";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.getDatas();
  }

  async getDatas() {
    let datas = await this.apiService.ListProducts();
    this.products = datas.items;
  }
}
