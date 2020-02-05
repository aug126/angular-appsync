import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ProductListComponent } from "./products/product-list/product-list.component";

import { FormsModule } from "@angular/forms";
import { NewProductComponent } from "./products/new-product/new-product.component";
import { UpdateProductComponent } from "./products/update-product/update-product.component";
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateProductComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
