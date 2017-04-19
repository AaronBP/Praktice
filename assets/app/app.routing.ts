import { Routes, RouterModule } from "@angular/router";

import { PracticesComponent } from "./practices/practices.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./auth/logout.component";
import { LandingComponent } from "./unauthed/landing.component";
import { AUTH_ROUTES } from './auth/auth.routes';
import { PROFILE_ROUTES } from './profile/profile.routes';

const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'practices', component: PracticesComponent },
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent, children: PROFILE_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
