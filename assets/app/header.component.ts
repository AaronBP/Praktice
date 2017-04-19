import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth/auth.service";
import { ProfileService } from "./profile/profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  private userId = localStorage.getItem('userId') ? localStorage.getItem('userId').toString() : '';
  private userIdRoute = "profile/" + this.userId;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router) {}

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth', 'signin'])
  }

  onSubmit(form: NgForm){
    console.log( localStorage.getItem('userId') );
    console.log(form.value.search);
    this.router.navigate(['/profile/search/', form.value.search]);

    // this.profileService.searchUsers(form.value.search)
    //   .subscribe(
    //     result => console.log(result)
    //   );
  }
}
