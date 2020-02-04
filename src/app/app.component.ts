import { Component, OnInit } from '@angular/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
// import { APIService } from "./API.services";
import { Product } from '../../app-sync/src/models';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(
    // private apiService: APIService,
    private authService: AuthService
  ) {}
  title = 'test-angular';
  isLoggedIn = this.authService.isLoggedIn;

  products$ = DataStore.observe(Product, Predicates.ALL);

  ngOnInit() {
    this.products$.subscribe(() => {});
  }

  async _test() {

  }

  logout() {
    this.authService.logout();
  }
}
