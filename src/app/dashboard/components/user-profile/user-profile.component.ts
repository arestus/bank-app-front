import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  customerID: number = 0;
  email:string ='';
  savingAccount:number =0;
  currentAccount:number =0;
  savingBalance:number =0;
  currentBalance:number =0;
  name:string ='';
  password:string ='';
  phone:string ='';
  address:string ='';
  paNnumber:string ='';
  aadhaarnumber:string ='';
  dateOfBirth:string ='';
  //jwtToken:string ='';
  //role:string ='';
  constructor() { }

  ngOnInit(): void {
  }

  ShowUserProfile() {
    if (localStorage.getItem('induk-bank-user')) {
      let storage = localStorage.getItem('induk-bank-user');
      let parsedStorage = JSON.parse(storage as string);
      this.customerID = parsedStorage.customerID; 
      this.name = parsedStorage.name;
      this.dateOfBirth=parsedStorage.dateOfBirth;    
      this.email =parsedStorage.email;
      this.password = parsedStorage.password;     
      this.phone = parsedStorage.phone;
      this.address = parsedStorage.address;
      this.paNnumber = parsedStorage.paNnumber;
      this.aadhaarnumber = parsedStorage.aadhaarnumber;      
      console.log(parsedStorage);
      return true;
    } else {
      return false;
    }
  }


}
