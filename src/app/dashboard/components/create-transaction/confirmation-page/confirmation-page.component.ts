import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { ConfirmationService } from 'src/app/services/transactions/confirmation.service';
import { TransactionTransfer } from 'src/app/models/transactionTransfer';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { LoginService } from 'src/app/services/login-service/login.service';
import { AccountModel } from 'src/app/models/account';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  currentTransaction!: TransactionTransfer;

  constructor(
    private transactionService: TransactionService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private _location: Location,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.currentTransaction = this.transactionService.currentTransaction;
  }

  confirmTransaction() {
    this.confirmationService
      .transferTransaction(this.currentTransaction)
      .subscribe((transData) => {
        console.log(transData);
      });
    if (localStorage.getItem('induk-bank-user')) {
      let storage = localStorage.getItem('induk-bank-user');
      let parsedStorage = JSON.parse(storage as string);
      this.loginService
        .getAccountsByUser(parsedStorage.customerID, parsedStorage.jwtToken)
        .subscribe((data) => {
          console.log(data);
          (data as []).forEach((e) => {
            let account = e as AccountModel;
            if (account.accountType === 'SAVINGS') {
              parsedStorage.savingAccount = account.accountId;
              parsedStorage.savingBalance = account.balance;
            } else if (account.accountType === 'CURRENT') {
              parsedStorage.currentAccount = account.accountId;
              parsedStorage.currentBalance = account.balance;
            }
          });
          let userData1 = JSON.stringify(parsedStorage);
          localStorage.setItem('induk-bank-user', userData1);
          this.router.navigate(['customer/confirmation-result']);
        });
    }
  }
  goBack() {
    this._location.back();
  }
}
