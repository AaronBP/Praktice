import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { Practice } from "./practice.model";

@Injectable()

export class PracticeService{
  private practices: Practice[] = [];
  private likesArray: string[] = [];
  practiceIsEdit = new EventEmitter<Practice>();

  constructor(private http: Http){}

  addPractice(practice: Practice){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const body = JSON.stringify(practice);
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('http://localhost:3000/practice' + token, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const practice = new Practice(
          result.obj.post,
          result.obj.user.username,
          result.obj.user._id,
          result.obj._id,
          result.obj.likes);
        this.practices.push(practice);
        return practice;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  likePractice(practice: Practice){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const body = JSON.stringify(practice);
    const headers = new Headers({'Content-Type': 'application/json'})
    console.log(practice);
    return this.http.post('http://localhost:3000/practice/' + practice.id + '/like' + token, body, {headers: headers})
      .map((response: Response) =>  response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPractices(){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('http://localhost:3000/practice' + token)
      .map((response: Response) => {
        var practicesRes = response.json().obj;
        let transformedPractices: Practice[] = [];
        console.log(practicesRes);
        for(var j=0; j<practicesRes.length; j++){
          for (let practice of practicesRes[j]){
            for (let practiceLikes of practice.likes){
              this.likesArray.push(practiceLikes.user.id);
            }
            console.log(practice);
            transformedPractices.push(new Practice(
              practice.post,
              practice.user.username,
              practice.user._id,
              practice._id,
              this.likesArray
            ));
            console.log(this.likesArray);
            this.likesArray = [];
          }
        }
        this.practices = transformedPractices;
        console.log(transformedPractices)
        return this.practices;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  editPractice(practice: Practice) {
    this.practiceIsEdit.emit(practice);
  }

  updatePractice(practice: Practice) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const body = JSON.stringify(practice);
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.patch('http://localhost:3000/practice/' + practice.id + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePractice(practice: Practice){
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    this.practices.splice(this.practices.indexOf(practice), 1);
    return this.http.delete('http://localhost:3000/practice/' + practice.id + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
