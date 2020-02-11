import { Component, OnInit } from "@angular/core";

import { CategoriesService } from "../services/categories.service";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  searchProduct;
  constructor(
    private catSvc: CategoriesService,
    private prodSvc: ProductsService
  ) {}

  ngOnInit() {}

  getQuery() {
    this.prodSvc.listProducts({limit: 1000}, 'cache-and-network').subscribe(d => {
      console.log('products filtered from cache : ', d.items.filter(p => p.name.includes(this.searchProduct)));
    })
  }
}
