import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Rx"

import { User } from "../auth/user.model";
import { Follow } from "./follow.model";

@Injectable()

export class ProfileService{

  constructor(private http: Http) {}

  private following: Follow[] = [];

  getUser(id: string){
    //Send this id as data to search on the backend
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/user/' + id + token, {headers: headers})
      .map((response: Response) =>  {
        const result = response.json();
        const user = new User(
          result.obj.popUser.email,
          result.obj.popUser.username,
          result.obj.popUser.practices,
          result.obj.popUser._id,
          result.obj.popUser.following);
        const loggedInUser = new User(
          result.obj.loggedPopUser.email,
          result.obj.loggedPopUser.username,
          result.obj.loggedPopUser.practices,
          result.obj.loggedPopUser._id,
          result.obj.loggedPopUser.following)
        return {
          user: user,
          loggedInUser: loggedInUser
        };
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  followUser(id: string){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/' + id + '/follow' + token, {headers: headers})
      .map((response: Response) =>  {
        const result = response.json();
        const follow = new Follow(
          result.obj.user.username,
          result.obj._id
        )
        this.following.push(follow);
        return follow;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  searchUsers(value: string){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.get('http://localhost:3000/user/search/' + value + token, { headers: headers})
      .map((response: Response) => {
        var users = response.json().obj;
        let transformedUsers: User[] = [];
        for(let user of users){
          transformedUsers.push(new User(
            user.email,
            user.username,
            user.practices,
            user._id,
            user.following
          ));
        }
        return transformedUsers
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
