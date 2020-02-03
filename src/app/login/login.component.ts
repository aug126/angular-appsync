import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {}

  form = {
    username: "",
    password: ""
  };
  activeField = "";
  loginLoading = false;

  setActive(field) {
    this.activeField = field;
  }
  setInactive() {
    this.activeField = "";
  }

  async formAction() {
    this.loginLoading = true;
    try {
      await this.authService.login(this.form, "");
    } catch (err) {
      this.loginLoading = false;
      setTimeout(() => alert(err.message), 1);
    }
  }
}
