import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
//id:number;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation?.extras.state,"state")
    //this.id = navigation?.extras.state;
   }

  ngOnInit(): void {
  }

}
