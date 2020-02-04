<<<<<<< HEAD
import { Component } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from './app-sync/src/models';
=======
import { Component, OnInit } from '@angular/core';
import { DataStore, Predicates } from '@aws-amplify/datastore';
// import { APIService } from "./API.services";
import { Product } from '../../app-sync/src/models';
>>>>>>> 78042f1710893f653bb17c05dc6ded957d73f4ed
import { AuthService } from './auth/auth.service';
import { TestDataStoreService } from './services/test-data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(
    private authService: AuthService,
    private testSvc: TestDataStoreService
  ) {}
  title = 'test-angular';
  isLoggedIn = this.authService.isLoggedIn;

<<<<<<< HEAD
  ngOnInit() {
    this.authService.checkUser('');


    this.testSvc.getAllProducts();
=======
  products$ = DataStore.observe(Product, Predicates.ALL);

  ngOnInit() {
    this.products$.subscribe(() => {});
  }

  async _test() {

>>>>>>> 78042f1710893f653bb17c05dc6ded957d73f4ed
  }

  logout() {
    this.authService.logout();
  }
}
