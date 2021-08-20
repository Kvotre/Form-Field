import { Component } from '@angular/core';
import { from } from 'rxjs';
import { EnrollService } from './enroll.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Cars', 'Bikes', 'Boats'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  text = '';

  userModel = new User('', '', '', 'default', '', true);


  constructor(private enrollService: EnrollService){}

  validateTopic(value: any) {
   if (value === 'default') {
     this.topicHasError = true;
   }else {
     this.topicHasError = false;
   }
  }

  onSubmit() {
    this.submitted = true;
    this.enrollService.enroll(this.userModel)
      .subscribe(
        data => console.log('Succes!', data),
        error => this.errorMsg = error.statusText
        )
  }
}


