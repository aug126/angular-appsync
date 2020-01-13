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
  @Input() formTitle = "";
  @Input() formBtn = "";
  activeField = "";
  form = {
    name: "",
    supplierName: "",
    imageUrl: "",
    description: ""
  };
  actionLoading = false;

  setActive(field) {
    this.activeField = field;
  }
  setInactive() {
    this.activeField = "";
  }

  // Create a new product
  async formAction($event) {
    $event.preventDefault();
    if (this.actionLoading === true) return;
    this.actionLoading = true;
    // prevent empty string for optional values.
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    try {
      await this.apiService.CreateProduct(this.form);
      this.close();
    } catch (err) {
      this.actionLoading = false;
      setTimeout(() => alert(err.errors[0].message), 1);
    }
  }

  close() {
    this.closeEvent.emit();
  }
}
