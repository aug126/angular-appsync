import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import {
  UpdateProductInput,
  CreateProductInput
} from "../../app-sync/app/API2.services.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-update-product",
  templateUrl: "../new-product/new-product.component.html", // template from another component
  styleUrls: ["../new-product/new-product.component.scss"] // template from another component
})
export class UpdateProductComponent implements OnInit {
  constructor(private prodSvc: ProductsService) {}
  @Output() closeEvent = new EventEmitter();
  activeField = "";
  @Input() formTitle = "";
  @Input() formBtn = "";
  @Input()
  form: UpdateProductInput | CreateProductInput | null;
  actionLoading = false;
  deleteLoading = false;
  deleteConfirm = false;
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

  // Update the product.
  async formAction($event) {
    $event.preventDefault();
    if (this.actionLoading === true) {
      return;
    }
    this.actionLoading = true;
    try {
      const input: UpdateProductInput = {
        id: this.form.id,
        _version: this.form._version,
        description: this.form.description,
        imageUrl: this.form.imageUrl,
        name: this.form.name,
        productCategoryId: this.form.productCategoryId, // doesn't exist at the moment
        supplierName: this.form.supplierName
      };
      this.prodSvc.updateProduct({ input }).subscribe(product => {
        console.log("product updated : ", product);
        this.close();
      });
    } catch (err) {
      this.actionLoading = false;
      setTimeout(() => alert(err.errors[0].message), 1);
    }
  }

  async deleteProduct({ id, _version }) {
    if (this.deleteConfirm === false) {
      this.deleteConfirm = true;
      return;
    }
    if (this.deleteLoading === true) {
      return;
    }
    this.deleteLoading = true;
    try {
      this.prodSvc
        .deleteProduct({
          input: { id, _version }
        })
        .subscribe(d => {
          console.log("product deleted : ", d);
          this.close();
        });
    } catch (err) {
      this.deleteLoading = false;
    }
  }

  close() {
    this.showingClass = false;
    setTimeout(() => this.closeEvent.emit(), 350);
  }
}
