import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_service/UserService/user.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {

    userModel: any = {};

    constructor(
        private userService: UserService,
        ) { }

register(model:any) {
    console.log(model);
    this.userService.create(this.userModel);
    }

  ngOnInit() {
  }

}
