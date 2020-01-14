import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
// import { APIService } from "./API.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    // private apiService: APIService,
    private authService: AuthService
  ) {}
  title = "test-angular";
  isLoggedIn = this.authService.isLoggedIn;

  ngOnInit() {
    this.authService.checkUser("");

    // setTimeout(() => {
    //   for (let i = 0; i < 50; i++) {
    //     this.apiService.CreateProduct({
    //       name: "Fake Product",
    //       supplierName: "Fake Vendeur"
    //     });
    //   }
    // }, 1000);
  }
  logout() {
    this.authService.logout();
  }
}
