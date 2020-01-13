import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}
  isLoggedIn = false;

  redirectUrl: string;

  async login(credentials, redirect) {
    try {
      let user = await Auth.signIn(credentials.username, credentials.password);
      if (user.username) {
        this.isLoggedIn = true;
        this.redirectUrl = redirect;
        this.router.navigate([this.redirectUrl]);
      }
    } catch (err) {
      alert(err.message);
    }
    return false;
  }

  async checkUser(redirect) {
    this.redirectUrl = redirect;
    try {
      let user = await Auth.currentAuthenticatedUser();
      if (user.username) {
        this.isLoggedIn = true;
        this.router.navigate([this.redirectUrl]);
      }
    } catch (err) {
      this.isLoggedIn = false;
    }
  }

  async logout() {
    try {
      await Auth.signOut();
      this.isLoggedIn = false;
      this.router.navigate(["login"]);
    } catch (err) {}
  }
}
