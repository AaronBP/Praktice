import { Component } from '@angular/core';
import { PracticeService} from './practices/practice.service';
import { ProfileService} from './profile/profile.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [PracticeService, ProfileService]
})
export class AppComponent {

}
