import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { ProfileService } from "./profile.service";
import { User } from "../auth/user.model";
import { PracticeComponent } from "../practices/practice.component";
import { Practice } from "../practices/practice.model";
import 'rxjs/add/operator/switchMap';


@Component ({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  providers: [ProfileService]
})

export class ProfileDetailComponent implements OnInit {
  private subscription: Subscription;
  public user: User;
  public userPractice: Practice;
  public userPractices: Practice[];
  public loggedInUser: User;
  public currentFollow: boolean = false;
  public isLoggedInUser: boolean = false;
  public hasPosts: boolean = false;

  constructor(private ps: ProfileService, private route: ActivatedRoute, private router: Router ){}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.ps.getUser(params['id']))
      .subscribe((userObj: any) => {
        this.userPractices=[];
        console.log(this.userPractices);
        for(var i=0; i<userObj.user.practices.length; i++){
          this.hasPosts = true;
          if(userObj.user.practices[i].post){
            const practice = new Practice(
              userObj.user.practices[i].post,
              userObj.user.username,
              userObj.user.id,
              null,
              userObj.user.practices[i].likes
            );
            this.userPractices.push(practice);
          }
        }
        console.log(this.userPractices.length);
        this.user = userObj.user;
        this.loggedInUser = userObj.loggedInUser;
        if(userObj.loggedInUser.id === userObj.user.id){
          this.isLoggedInUser = true;
        }
        for(var i = 0; i<userObj.loggedInUser.follows.length; i++){
          if(userObj.loggedInUser.follows[i].user.id === userObj.user.id){
            return this.currentFollow = true;
          }
        }
      });
  }

  follow(){
    this.currentFollow = true;
    this.ps.followUser(this.user.id)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }

  eligibleToFollow(){
    if(this.currentFollow || this.isLoggedInUser){
      return false;
    }
    return true;
  }
}
