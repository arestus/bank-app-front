import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      this.loginServise.GetUserById(userAfterLogin.customerID).subscribe((dataAboutUser) => {
        let user: UserModel = dataAboutUser as UserModel;
        user.jwtToken = userAfterLogin.jwtToken;
        user.role = role;
        let token = JSON.stringify(user);
        // console.log(token);
        localStorage.setItem('induk-bank-user', token);
      });
    });
    this.router.navigate(['admin']);

  }
 
  ngOnInit(): void {}
}
