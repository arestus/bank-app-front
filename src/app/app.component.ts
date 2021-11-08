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
  accountText = 'Current account';
  accountType = 'CURRENT';
  name = '';
  constructor(private router: Router, private loginService: LoginService) {}
  ShowName() {
    if (localStorage.getItem('induk-bank-user')) {
      let storage = localStorage.getItem('induk-bank-user');
      let parsedStorage = JSON.parse(storage as string);
      this.name = parsedStorage.name;
      if (this.accountType === 'CURRENT') {
        this.accountText = 'Current account';
        this.balance = parsedStorage.currentBalance;
      } else if (this.accountType === 'SAVINGS') {
        this.accountText = 'Saving account';
        this.balance = parsedStorage.savingBalance;
      }
      console.log(parsedStorage);
      return true;
    } else {
      return false;
    }
  }

  ChangeAccount(type: any) {
    this.accountType = type;
    console.log('test33333');
  }
  ChangeAccountType() {
    this.ChangeAccount('SAVINGS');
  }

  LogOut() {
    this.loginService.logOut();

    this.router.navigate(['']);
  }
}
