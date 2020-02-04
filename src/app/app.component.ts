import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.authService.checkUser('');
    this.testSvc.loadProducts();
  }

  logout() {
    this.authService.logout();
  }
}
