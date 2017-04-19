import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PracticeService } from "./practice.service"
import { Practice } from "./practice.model";
@Component({
    selector: 'app-practice-input',
    templateUrl: './practice-input.component.html'
})

export class PracticeInputComponent implements OnInit {
  practice: Practice;

  constructor(private practiceService: PracticeService){}

  onSubmit(form: NgForm){
    if(this.practice) {
      this.practice.post = form.value.post;
      this.practice.likeAuthor = null;
      this.practiceService.updatePractice(this.practice)
        .subscribe(
          result => console.log(result)
        );
      this.practice = null;
    } else{
      const practice = new Practice(form.value.post, "Sally");
      this.practiceService.addPractice(practice)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }

    form.resetForm();
  }

  onClear(form: NgForm){
    this.practice = null;
    form.resetForm();
  }

  ngOnInit(){
    this.practiceService.practiceIsEdit.subscribe(
      (practice: Practice) => this.practice = practice
    );
  }
}
