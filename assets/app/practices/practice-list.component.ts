import { Component, OnInit } from "@angular/core";
import { Practice } from "./practice.model";
import { PracticeService } from "./practice.service";

@Component({
  selector: 'app-practice-list',
  template: `
    <div class="practice">
      <div class="content-header col s12">
        <h5 class="cyan-text">Recent posts</h5>
      </div>
      <div class="col s12">
        <div *ngIf="!postResults">Follow some people to fill out your Dashboard with posts!</div>
      </div>
      <app-practice [practice]="practice" *ngFor="let practice of practices"></app-practice>
    </div>
  `
})

export class PracticeListComponent implements OnInit{
  practices: Practice[]
  postResults: boolean = false
  constructor(public practiceService: PracticeService){}

  ngOnInit(){
    this.practiceService.getPractices()
      .subscribe(
        (practices: Practice[]) => {
          this.practices = practices;
          console.log(practices);
          if(practices.length > 0){
            this.postResults = true;
          }
          else{
            this.postResults = false;
          }
        }
      );
  }
}
