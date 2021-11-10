import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  currentBalance = 4654;
  savingBalance =5245; 
  constructor(private _router:Router) { }
  ShowBalance(){
    {
      if (localStorage.getItem('induk-bank-user')) {
        let storage = localStorage.getItem('induk-bank-user');
        let parsedStorage = JSON.parse(storage as string);
        this.currentBalance = parsedStorage.currentBalance;             
        this.savingBalance= parsedStorage.savingBalance;   
        console.log(parsedStorage);
        return true;
      } else {
        return false;
      }
    }
  }

  ngOnInit(): void {
  
 
  }

}
