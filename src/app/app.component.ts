import { Component } from "@angular/core";
import { APIService } from "./API.services";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "test-angular";
  constructor(private apiService: APIService) {
    this.init();
  }
  async init() {
    await this.signIn();
    this.test();
  }

  async signIn() {
    const user = await Auth.signIn(
      "test-case@showsourcing.com",
      "password1234"
    );
    console.log(user);
  }
  async test() {
    console.log(await this.apiService.ListProducts());
  }
}
