import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import axios from 'axios';
import { TransactionHistory } from '../models/transactionHistory';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  dataSource!: TransactionHistory[];
  state: any;
  filteredDate: any;
  constructor() { }

  getAll(id: string) {
    let transactions = axios.get(`${environment.apiURL + '/TransactionHistory/getTransactions/'}/${id}`, { params: { Accountid: id } })
    .then(res => {console.log(res,'get all res') 
      this.dataSource = res.data
      this.filteredDate = res.data
    }  );

    //console.log(transactions, 'transactions');
    // return transactions;
  }

  applyDateFilter(fromDate: any,toDate: any) {

    console.log("filter")
    this.filteredDate = this.dataSource.filter(
      (e) =>
        e.transactionDate >=
          fromDate &&
        e.transactionDate <=
          toDate

    );
    
  }
}
