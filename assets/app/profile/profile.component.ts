import { Component, Input } from "@angular/core";
// import { ProfileService } from "./profile.service";
import { User } from "../auth/user.model";

@Component({
  selector: 'app-profile',
  template: `
    <router-outlet></router-outlet>
  `
})

export class ProfileComponent {
  // @Input() user: User;
  //
  // constructor(private profileService: ProfileService){}
  //
  // ngOnInit(){
  //   this.profileService.getUser()
  //     .subscribe(
  //       (user: User) => {
  //         this.user = user
  //       }
  //     )
  // }
}
