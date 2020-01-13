import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { APIService } from "./API.services";
import { ProductListComponent } from "./product-list/product-list.component";

import { FormsModule } from "@angular/forms";
import { NewProductComponent } from "./new-product/new-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateProductComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AmplifyAngularModule, FormsModule, AppRoutingModule],
  providers: [AmplifyService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
