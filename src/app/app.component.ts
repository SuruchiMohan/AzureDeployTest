import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AzureDeploy';
  users: any[];

  constructor(private userService: UserserviceService)
  {
    this.users = userService.getUsers();
  }
}
