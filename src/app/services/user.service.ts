import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // form: FormGroup = new FormGroup({
  //   $key: new FormControl(null),
  //   fullName: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  //   gender: new FormControl('1'),
  //   dob: new FormControl(''),
  //   address: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   email: new FormControl('', [Validators.required,
  //   Validators.email]),
  //   accNo: new FormControl(''),
  // });

  constructor() {
  }
}
