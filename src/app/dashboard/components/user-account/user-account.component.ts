import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  userID:number=0;
  currentBalance = 4654;
  savingBalance =5245; 
  constructor(private _router:Router, public tableService: TableService ) { }
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
    let storage = localStorage.getItem('induk-bank-user');
    this.userID= JSON.parse(storage as string).customerID;
    this.tableService.getAll(String(this.userID));
 
  }

}
