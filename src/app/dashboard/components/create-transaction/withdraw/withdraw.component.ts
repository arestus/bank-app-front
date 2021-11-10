import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/transactions/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  transaction!: Transaction;

  currentAcc = 0;
  savingAcc = 0;
  
  currentAccBal = 0;
  savingAccBal = 0;

  defaultValue = 0;
  selectedValue = 0;

  withdrawForm = new FormGroup({
    from: new FormControl(String(this.GetAccNumber()), Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(1000), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get from(): any {
    return this.withdrawForm.get('from');
  }
  get amount(): any {
    return this.withdrawForm.get('amount');
  }
  get desc(): any {
    return this.withdrawForm.get('desc');
  }

  constructor(
    private router: Router, private transactionService: TransactionService, private accountService: AccountService) {
   }

  ngOnInit(): void {
    if (localStorage.getItem('induk-bank-user')) {
      let storage = localStorage.getItem('induk-bank-user');
      let parsedStorage = JSON.parse(storage as string);
      this.currentAcc = parsedStorage.currentAccount;
      this.savingAcc = parsedStorage.savingAccount;
      this.savingAccBal = parsedStorage.savingBalance;
      this.currentAccBal = parsedStorage.currentBalance;
    }
  }

  onFormSubmit() {
    const type = "Withdraw";
    const account = this.withdrawForm.get('from')!.value;
    const accountId = Number(account)
    const amount = this.withdrawForm.get('amount')!.value;
    const descriptions = this.withdrawForm.get('desc')!.value;
    
    const currentTransaction = new Transaction(type, accountId, amount, descriptions)

    this.transactionService.setNewTransaction(currentTransaction);
    
    this.router.navigate(["customer/confirmation"]);
  }
  GetAccNumber(){ 
    if (localStorage.getItem('induk-bank-user')) {
    let storage = localStorage.getItem('induk-bank-user');
    let parsedStorage = JSON.parse(storage as string);
    this.currentAcc = parsedStorage.currentAccount;
    this.savingAcc = parsedStorage.savingAccount;
    this.savingAccBal = parsedStorage.savingBalance;
    this.currentAccBal = parsedStorage.currentBalance;
  }
     this.defaultValue = this.accountService.selectedAccount;
      if (this.defaultValue === this.currentAcc) {
        this.selectedValue = this.currentAcc
      } else {
        this.selectedValue = this.savingAcc
      }
    return this.selectedValue 
  }

  reset = () => {
    this.withdrawForm.reset();
  }

}
