import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  constructor(
    private authService: AuthService,
  ) {}
  title = 'test-angular';
  isLoggedIn = this.authService.isLoggedIn;

  ngOnInit() {
    this.authService.checkUser('');

  }

  logout() {
    this.authService.logout();
  }
}
