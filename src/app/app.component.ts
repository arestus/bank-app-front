import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  balance = 4654;
  title = 'bank-app';
  unAuthorized: boolean = true;
  name = 'As';
  constructor(private router: Router, private loginService: LoginService) {
    this.unAuthorized = loginService.unAuthorized;
  }
  ShowName() {
    if (localStorage.getItem('induk-bank-user')) {
      let storage = localStorage.getItem('induk-bank-user')
      let parsedStorage = JSON.parse(storage as string)
      this.name = parsedStorage.name;
      // console.log(parsedStorage);
      return true;
    } else {
      return false
    }
   
  }
  LogOut() {
    console.log("tets");
    
    this.loginService.logOut();
    
    this.router.navigate(['']);
  }
}
