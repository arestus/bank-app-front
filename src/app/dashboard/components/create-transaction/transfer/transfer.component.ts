import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transactions/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transaction!: Transaction;

  currentAmount:number = 100;
  transferForm = new FormGroup({
    to: new FormControl('', Validators.required),
    from: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(this.currentAmount), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get to(): any {
    return this.transferForm.get('to');
  }
  get from(): any {
    return this.transferForm.get('from');
  }
  get amount(): any {
    return this.transferForm.get('amount');
  }
  get desc(): any {
    return this.transferForm.get('desc');
  }

  constructor(private router: Router, private transactionService: TransactionService) {}

  onFormSubmit(){
    const type = "transfer";
    const from = this.transferForm.get('from')!.value;
    const to = this.transferForm.get('to')!.value;
    const amount = this.transferForm.get('amount')!.value;
    const description = this.transferForm.get('desc')!.value;
    const currentTransaction = new Transaction(type, from, to, amount, description)

    this.transactionService.setNewTransaction(currentTransaction);
    this.router.navigate(["admin/confirmation"]);
  }


  ngOnInit(): void {
  }

  reset = () => {
    this.transferForm.reset();
  }

}
