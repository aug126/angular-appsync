import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { APIService } from "../API.services";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"]
})
export class NewProductComponent implements OnInit {
  constructor(private apiService: APIService) {}
  ngOnInit() {}

  @Output() closeEvent = new EventEmitter();
  activeField = "";

  form = {
    name: "",
    supplierName: "",
    imageUrl: "",
    description: ""
  };

  setActive(field) {
    this.activeField = field;
  }
  setInactive() {
    this.activeField = "";
  }

  createNewProduct($event) {
    $event.preventDefault();
    // prevent empty string for optional values.
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    this.apiService
      .CreateProduct(this.form)
      .then(resp => this.close(null))
      .catch(err => alert(err.errors[0].message));
  }

  close($event) {
    // Check the element clicked (button create or background overlay.)
    if (!$event || $event.target.classList.contains("modal")) {
      this.closeEvent.emit();
    }
  }
}
