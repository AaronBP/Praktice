import { Routes } from "@angular/router";
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail.component';
import { SearchListComponent } from './search-list.component';

export const PROFILE_ROUTES: Routes = [
  { path: ':id', component: ProfileDetailComponent },
  { path: 'search/:value', component: SearchListComponent }
];
