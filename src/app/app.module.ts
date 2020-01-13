import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { APIService } from "./API.services";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }]),
    AmplifyAngularModule
  ],
  providers: [AmplifyService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
