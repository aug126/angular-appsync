import { Component } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from './app-sync/src/models';
import { AuthService } from './auth/auth.service';
import { TestDataStoreService } from './services/test-data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private testSvc: TestDataStoreService
  ) {}
  title = 'test-angular';
  isLoggedIn = this.authService.isLoggedIn;

  ngOnInit() {
    this.authService.checkUser('');


    this.testSvc.getAllProducts();
  }

  logout() {
    this.authService.logout();
  }
}
