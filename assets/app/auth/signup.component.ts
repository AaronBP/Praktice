import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(){
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.username,
      null,
      null,
      null,
      this.myForm.value.password
    );
    this.authService.signup(user)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigate(['/practices']);
        },
        error => console.log(error)
      );
    this.myForm.reset();
  }
  ngOnInit(){
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required)
    });
  }
}
