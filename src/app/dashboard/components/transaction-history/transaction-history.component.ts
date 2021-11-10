
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
    this.tableService.dataSource = 
     this.tableService.dataSource.filter(e => 
      e.transactionDate >= this.form.value.fromDate.toISOString().replace(/.\d+Z$/g, "") && e.transactionDate <= this.form.value.toDate.toISOString().replace(/.\d+Z$/g, "")
    );
    
  }

}
