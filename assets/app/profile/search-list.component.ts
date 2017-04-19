import { Component, OnInit } from "@angular/core";
import { User } from "../auth/user.model";
import { ProfileService } from "./profile.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html'
})

export class SearchListComponent implements OnInit{
  searchedUsers;
  hasResults: boolean = false;
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router ){}

  ngOnInit(){
    this.route.params
      .switchMap((params: Params) => this.profileService.searchUsers(params['value']))
      .subscribe((response: User[]) => {
        this.searchedUsers = response;
        if(response.length > 0){
          this.hasResults = true;
        }
        else{
          this.hasResults = false;
        }
      });
  }
}
