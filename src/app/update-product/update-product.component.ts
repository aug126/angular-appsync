import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { APIService } from "../API.services";

@Component({
  selector: "app-update-product",
  templateUrl: "../new-product/new-product.component.html", // template from another component
  styleUrls: ["../new-product/new-product.component.scss"] // template from another component
})
export class UpdateProductComponent implements OnInit {
  constructor(private apiService: APIService) {}
  ngOnInit() {}
  @Output() closeEvent = new EventEmitter();
  activeField = "";
  @Input() formTitle = "";
  @Input() formBtn = "";
  @Input() form = {
    id: "",
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

  // Update the product.
  async formAction() {
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    try {
      await this.apiService.UpdateProduct(this.form);
      this.close(null);
    } catch (err) {
      alert(err.errors[0].message);
    }
  }

  close($event) {
    // Check the element clicked (button create or background overlay.)
    if (!$event || $event.target.classList.contains("modal")) {
      this.closeEvent.emit();
    }
  }
}
