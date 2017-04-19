import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { PracticeComponent } from "./practices/practice.component";
import { PracticeListComponent } from "./practices/practice-list.component";
import { PracticeInputComponent } from "./practices/practice-input.component";
import { PracticesComponent } from "./practices/practices.component";
import { AuthenticationComponent} from "./auth/authentication.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileDetailComponent } from "./profile/profile-detail.component";
import { HeaderComponent } from "./header.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { LandingComponent } from "./unauthed/landing.component";
import { SearchListComponent } from "./profile/search-list.component";
import { routing } from "./app.routing";


@NgModule({
    declarations: [
        AppComponent,
        PracticeComponent,
        PracticeListComponent,
        PracticeInputComponent,
        PracticesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ProfileComponent,
        LandingComponent,
        ProfileDetailComponent,
        SearchListComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
