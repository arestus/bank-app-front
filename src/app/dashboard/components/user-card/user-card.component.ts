import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  state: any;
  id: number;
  form = new FormGroup({
    fromDate: new FormControl(null, { validators: [Validators.required] }),
    toDate: new FormControl(null, { validators: [Validators.required] })
  });

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'transactionId',
    'transactionDate',
    'transactionType',
    'fromAccount',
    'toAccount',
    'amount',
    'transactionStatus'];
  constructor(private router: Router,
    private formBuilder: FormBuilder, public tableService: TableService) {

    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state;
    this.id = navigation?.extras.state?.customerID;
    //console.log(this.state);
    // this.refreshTransactions();

  }

  ngOnInit(): void {
  }

  // refreshTransactions() {
  //   this.tableService.getAll(String(this.id)).then(res => { console.log(res.data, "resdata"), this.dataSource = res.data; });
  // }

  // getAll(id: string) {
  //   let transactions = axios.get(`${environment.apiURL + '/TransactionHistory/getTransactions/'}/${id}`, { params: { Accountid: id } });

  //   console.log(transactions, 'transactions');
  //   return transactions;
  // }


  navigate(id: number) {
    this.router.navigate([`admin/transaction-history/${id}`, { state: id }]);
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

  // doFilter(filterValue: string) {
  //   this.tableService.getAll(String(this.id)).then(res => { console.log(res.data, "resdata"), this.dataSource = res.data; });
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }














  // onFormSubmitPeriod() {
  //   console.log('Is Form Invalid', this.dateRangeForm.invalid);
  //   console.log(this.dateRangeForm.value.fromDate, 'date');
  //   // this.dataSource = this.dataSource.filter((e: { transactionDate: number; date: number; }) => e.transactionDate >= this.dateRangeForm.value.fromDate && e.date <= this.dateRangeForm.value.toDate);
  // }

}
