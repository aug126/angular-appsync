import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UpdateProductInput } from 'src/app/API2.services';

@Component({
  selector: 'app-update-product',
  templateUrl: '../new-product/new-product.component.html', // template from another component
  styleUrls: ['../new-product/new-product.component.scss'] // template from another component
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private productsSvc: ProductsService
  ) {}
  @Output() closeEvent = new EventEmitter();
  activeField = '';
  @Input() formTitle = '';
  @Input() formBtn = '';
  @Input() form: UpdateProductInput = {
    id: '',
    name: '',
    supplierName: '',
    imageUrl: '',
    description: '',
  };
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
    this.activeField = '';
  }

  // Update the product.
  async formAction($event) {
    $event.preventDefault();
    if (this.actionLoading === true) { return; }
    this.actionLoading = true;
    // prevent empty string for optional parameters
    this.form.imageUrl = this.form.imageUrl || null;
    this.form.description = this.form.description || null;
    try {
      // ! updateProduct ne peut pas recevoir de _deleted
      // delete this.form._deleted;
      this.productsSvc.updateProduct(this.form).subscribe();
      this.close();
    } catch (err) {
      this.actionLoading = false;
      setTimeout(() => alert(err.errors[0].message), 1);
    }
  }

  async deleteProduct(id) {
    if (this.deleteConfirm === false) {
      this.deleteConfirm = true;
      return;
    }
    if (this.deleteLoading === true) { return; }
    this.deleteLoading = true;
    try {
      this.productsSvc.deleteProduct({
        id: this.form.id,
        _version: this.form._version
      });
      this.close();
    } catch (err) {
      this.deleteLoading = false;
    }
  }

  close() {
    this.showingClass = false;
    setTimeout(() => this.closeEvent.emit(), 350);
  }
}
