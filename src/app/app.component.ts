import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login-service/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  balance = null;
  title = 'bank-app';
  accountText = '';
  accountType = 'CURRENT';
  name = '';
  currency ='';
  constructor(private router: Router, private loginService: LoginService) {}
  ShowName() {
    if (localStorage.getItem('induk-bank-user') ) {
      let storage = localStorage.getItem('induk-bank-user');
      let parsedStorage = JSON.parse(storage as string);
      this.name = parsedStorage.name;
      if (this.accountType === 'CURRENT' && parsedStorage.role=="Customer") {
        this.accountText = 'Current account : available  balance: ';
        this.balance = parsedStorage.currentBalance;
        this.currency = 'currency_rupee';
        // return true;
      } else if (this.accountType === 'SAVINGS' && parsedStorage.role=="Customer") {
        this.accountText = 'Saving account : available  balance: ';
        this.balance = parsedStorage.savingBalance;
        this.currency = 'currency_rupee';
        // return true;
      }
      return true
      // console.log(parsedStorage);
    } else {
      return false;
    }
  }

  ChangeAccount(type: any) {
    this.accountType = type;
    console.log('test33333');
  }
  ChangeAccountType() {
    if (this.accountType === 'CURRENT') {
      this.ChangeAccount('SAVINGS') 
      localStorage.setItem('teste', this.accountType)
    } else {
      this.ChangeAccount('CURRENT') 
      localStorage.setItem('teste', this.accountType)
    }
  }

  LogOut() {
    this.loginService.logOut();

    this.router.navigate(['']);
  }
}
