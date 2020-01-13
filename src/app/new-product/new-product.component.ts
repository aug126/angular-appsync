import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
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
  @Input() formTitle = "";
  @Input() formBtn = "";

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

  // Create a new product
  async formAction($event) {
    $event.preventDefault();
    // prevent empty string for optional values.
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    try {
      await this.apiService.CreateProduct(this.form);
      this.close();
    } catch (err) {
      alert(err.errors[0].message);
    }
  }

  close() {
    this.closeEvent.emit();
  }
}
