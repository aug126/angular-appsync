import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
// import { APIService } from "./API.services";
import { Product, Category } from "../../app-sync-2/src/models";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { ObjectUnsubscribedError } from "rxjs";
import * as uuid from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    // private apiService: APIService,
    private authService: AuthService
  ) {}
  title = "test-angular";
  isLoggedIn = this.authService.isLoggedIn;

  ngOnInit() {
    this.authService.checkUser("");

    // setTimeout(() => {
    //   for (let i = 0; i < 50; i++) {
    //     this.apiService.CreateProduct({
    //       name: "Fake Product",
    //       supplierName: "Fake Vendeur"
    //     });
    //   }
    // }, 1000);

    this._test();
  }

  async _test() {
    let data;
    // const form = {
    //   supplierName: "",
    //   imageUrl: "",
    //   description: "",
    //   _version: 1
    // };

    /** Subscriber */
    // DataStore.observe(Product).subscribe(d => console.log(d));

    /** CREATE */
    const product = new Product({
      name: "NEW PRODUCT",
      supplierName: ""
    });
    data = await DataStore.save(product);
    console.log(data);

    /** UPDATE */
    // let updateProduct = (): Product => {
    //   const newProduct = { ...product };
    //   newProduct.name = "NAME MODIFIED";
    //   return newProduct;
    // };
    // DataStore.save(Product.copyOf(product, updateProduct));
    // console.log(data);

    /** List / READ */
    // data = await DataStore.query(Product);
    console.log(data);

    /** DELETE */
    // let product = DataStore.query();
  }

  logout() {
    this.authService.logout();
  }
}
