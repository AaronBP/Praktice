import { Component, Input } from '@angular/core';
import { Practice } from './practice.model';
import { PracticeService } from './practice.service';

@Component ({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})

export class PracticeComponent {
  @Input() practice: Practice;

  constructor(private practiceService: PracticeService){

  }

  onLike(){
    const userId = localStorage.getItem('userId');
    this.practice.likeAuthor.push(userId);
    this.practiceService.likePractice(this.practice)
      .subscribe(
        result => console.log(result)
      );
  }

  onEdit(){
    this.practiceService.editPractice(this.practice);
  }

  onDelete(){
    this.practiceService.deletePractice(this.practice)
      .subscribe(
        result => console.log(result)
      );
  }

  belongsToUser(){
    return localStorage.getItem('userId') == this.practice.authorId;
  }

  unableToLike(prac){
    if(localStorage.getItem('userId') == this.practice.authorId){
      return true;
    }

    for(var i=0; i<prac.likeAuthor.length; i++){
      if(prac.likeAuthor[i]){
        if( prac.likeAuthor[i] == localStorage.getItem('userId') ){
          return true;
        }
      }
    }

  }

}
