import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import * as uuid from "uuid/v4";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"]
})
export class NewProductComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}

  @Output() closeEvent = new EventEmitter();
  @Input() formTitle = "";
  @Input() formBtn = "";
  activeField = "";
  form = {
    id: "",
    name: "FIND ME",
    supplierName: "FIND ME SUPPLIER",
    imageUrl: "",
    description: ""
  };
  actionLoading = false;
  showingClass = false;
  ngOnInit() {
    setTimeout(() => (this.showingClass = true), 10);
  }

  setActive(field) {
    this.activeField = field;
  }
  setInactive() {
    this.activeField = "";
  }

  // Create a new product
  async formAction($event) {
    $event.preventDefault();
    if (this.actionLoading === true) {
      return;
    }
    this.actionLoading = true;
    // prevent empty string for optional values. // ! the empty strings are not accepted
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    // this.form.id = uuid();
    this.prodSvc.createProduct({ input: { ...(this.form as any) } }).subscribe(
      d => {
        console.log("création du produit : ", d);
        this.close();
      },
      err => {
        this.actionLoading = false;
        console.log(err);
      }
    );
  }

  close() {
    this.showingClass = false;
    setTimeout(() => this.closeEvent.emit(), 350);
  }
}
