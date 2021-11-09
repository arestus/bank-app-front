import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import axios from 'axios';
import { TransactionHistory } from '../models/transactionHistory';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  dataSource!: TransactionHistory[];

  constructor() { }

  getAll(id: string) {
    let transactions = axios.get(`${environment.apiURL + '/TransactionHistory/getTransactions/'}/${id}`, { params: { Accountid: id } })
    .then(res => { console.log(res.data, "resdata"), this.dataSource = res.data; });

    //console.log(transactions, 'transactions');
    // return transactions;
  }
}
