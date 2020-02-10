import { Component, OnInit } from "@angular/core";

import { CategoriesService } from "../services/categories.service";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  constructor(
    private catSvc: CategoriesService,
    private prodSvc: ProductsService
  ) {}

  ngOnInit() {}
}
