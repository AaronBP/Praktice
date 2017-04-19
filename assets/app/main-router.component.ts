import {Component} from '@angular/core'

@Component ({
  selector: 'app-main-router-component',
  template: `
    <div>
      <div class="container">
        <div class="row">
            <router-outlet (userLoggedIn)="handleUserLoggedIn($event)"></router-outlet>
        </div>
      </div>
    </div>
  `
})

export class MainRouterComponent {

}
