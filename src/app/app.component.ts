import { Component, OnInit } from "@angular/core";
import { APIService } from "./API.services";
import { Auth } from "aws-amplify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "test-angular";
  loggedIn = false;
  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.init();
  }
  async init() {
    let user = await Auth.signIn("test-case@showsourcing.com", "password1234");
    if (user.username) {
      this.loggedIn = true;
    }
  }


}
