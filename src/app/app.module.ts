import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { APIService } from "./API.services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule],
  providers: [AmplifyService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
