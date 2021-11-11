import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountModel } from '../models/account';
import { EmployeeModel } from '../models/employee';
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
  errorTest:boolean = false;
  constructor(private loginService: LoginService, private router: Router) {
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

  

  LogIn(email: any, pass: any, role: string ) {
    this.customer.email = email.value;
    this.customer.password = pass.value;

    if (role == "Customer") {
      
      this.loginService.LoginAPI(this.customer).subscribe((dataAfterLogin) => {
        console.log(dataAfterLogin);
        
        let userAfterLogin: UserModel = dataAfterLogin as UserModel;
        this.loginService
          .GetUserById(userAfterLogin.customerID)
          .subscribe((dataAboutUser) => {
            let user: UserModel = dataAboutUser as UserModel;
            user.jwtToken = userAfterLogin.jwtToken;
            user.role = role;
            this.loginService
            .getAccountsByUser(
              userAfterLogin.customerID,
              userAfterLogin.jwtToken
              )
              .subscribe((data) => {
                (data as []).forEach((e) => {
                  let account = e as AccountModel;
                  if (account.accountType === 'SAVINGS') {
                    user.savingAccount = account.accountId;
                    user.savingBalance = account.balance;
                  } else if (account.accountType === 'CURRENT') {
                    user.currentAccount = account.accountId;
                    user.currentBalance = account.balance;
                  }
                });
                let userData1 = JSON.stringify(user);
                localStorage.setItem('induk-bank-user', userData1);
                this.router.navigate(['customer/user-account']);
              });
          });
      }, err => {
        if (err.error === "Invalid User") {
          this.errorTest= true
        }
      }
      );
    } else if (role == "Employee"){
      this.loginService.LoginAdminAPI(this.customer).subscribe(value=>{
        let employee:EmployeeModel = value as EmployeeModel;
        console.log(employee);
        employee.role = role;
        let employeeData = JSON.stringify(employee);
                localStorage.setItem('induk-bank-user', employeeData);
        this.router.navigate(['admin/user-list']);
      }, err => {
        if (err.error === "Invalid User") {
          this.errorTest= true
        }
      })
    }
  }
  
  ngOnInit(): void {}
}
