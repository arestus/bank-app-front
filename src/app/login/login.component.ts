import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountModel } from '../models/account';
import { LoginModel } from '../models/login';
import { UserModel } from '../models/user-model';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  selected = 'Customer';
  customer: LoginModel;
  userProfile: UserModel;
  selectedValue: string = '';
  selectedCar: string = '';
  constructor(private loginServise: LoginService, private router: Router) {
    this.customer = new LoginModel();
    this.userProfile = new UserModel();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  LogIn(email: any, pass: any, role: any) {
    this.customer.email = email.value;
    this.customer.password = pass.value;
    this.loginServise.LoginAPI(this.customer).subscribe((dataAfterLogin) => {
      let userAfterLogin: UserModel = dataAfterLogin as UserModel;
      this.loginServise
        .GetUserById(userAfterLogin.customerID)
        .subscribe((dataAboutUser) => {
          let user: UserModel = dataAboutUser as UserModel;
          console.log(user);

          user.jwtToken = userAfterLogin.jwtToken;
          user.role = role;
          this.loginServise
          .getAccountsByUser(
            userAfterLogin.customerID,
            userAfterLogin.jwtToken
            )
            .subscribe((data) => {
              (data as []).forEach((e) => {
                let account = e as AccountModel;
                if (account.accountType === 'SAVINGS') {
                  user.savingAcount = account.accountId;
                  user.savingBalance = account.balance;
                } else if (account.accountType === 'CURRENT') {
                  user.currentAcount = account.accountId;
                  user.currentBalance = account.balance;
                }
                console.log(e);
              });
              let userData1 = JSON.stringify(user);
              console.log(userData1);
              localStorage.setItem('induk-bank-user', userData1);
              this.router.navigate(['customer']);
            });
        });
    });
  }

  ngOnInit(): void {}
}
