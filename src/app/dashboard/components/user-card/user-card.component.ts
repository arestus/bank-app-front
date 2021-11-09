import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  state: any;
  id:number;
  dataSource :any;
  displayedColumns: string[] = ['transactionId', 'transactionDate', 'transactionType', 'fromAccount','toAccount','amount','transactionStatus'];
  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state;
    this.id = navigation?.extras.state?.customerID;
    console.log(this.state);
    this.refreshTransactions();

  }

  ngOnInit(): void {
  }

  refreshTransactions(){
    this.getAll(String(this.id)).then(res => { console.log(res.data, "resdata"), this.dataSource  = res.data; });
  }

  getAll(id: string) {
    let transactions = axios.get(`${environment.apiURL + '/TransactionHistory/getTransactions/'}/${id}`,{params:{Accountid :id}} )
  
    console.log(transactions, 'transactions')
  return transactions
}

  navigate(id: number) {
    this.router.navigate([`admin/transaction-history/${id}`,{state:id}]);
  }

}
