import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { APIService } from "./API.services";
import { ProductListComponent } from "./product-list/product-list.component";

import { FormsModule } from "@angular/forms";
import { NewProductComponent } from "./new-product/new-product.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, NewProductComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }]),
    AmplifyAngularModule,
    FormsModule
  ],
  providers: [AmplifyService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
