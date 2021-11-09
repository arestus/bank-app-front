
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { environment } from 'src/environments/environment';
import axios from 'axios';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required] }),
    toDate: new FormControl(null, { validators: [Validators.required] })
  });

  displayedColumns: string[] = [
    'transactionId',
    'transactionDate',
    'transactionType',
    'fromAccount',
    'toAccount',
    'amount',
    'transactionStatus'];
  constructor(private router: Router,public tableService: TableService) {
    
   }

  ngOnInit(): void {
  }

  applyDateFilter() {
    //console.log(this.form);
    // this.refreshTransactions();
    this.tableService.dataSource = this.tableService.dataSource.filter(e => 
      // console.log(e.transactionDate, 'e.transactionDate');
      // console.log(this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, ""), 'this.form.value.fromDate');
      // console.log(this.form.value.toDate.toISOString().replace(/.\d+Z$/g, ""), 'this.form.value.toDate');
      e.transactionDate >= this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, "") && e.transactionDate <= this.form.value.toDate.toISOString().replace(/.\d+Z$/g, "")
    );
    console.log(this.tableService.dataSource, 'this.tableService.dataSource');
  }

}
