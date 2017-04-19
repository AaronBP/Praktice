import { Component } from "@angular/core";


import { AuthService } from "./auth.service";

@Component({
  selector: 'app-authentication',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>

  `
})

export class AuthenticationComponent{
  constructor(private authService: AuthService) {}

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
