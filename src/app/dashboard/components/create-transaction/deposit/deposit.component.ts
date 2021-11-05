import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm = new FormGroup({
    to: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.max(1000), Validators.min(2)]),
    desc: new FormControl('', Validators.required)
  });

  get to(): any {
    return this.depositForm.get('to');
  }
  get amount(): any {
    return this.depositForm.get('amount');
  }
  get desc(): any {
    return this.depositForm.get('desc');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formDirective: FormGroupDirective){
    console.log('To:' + this.depositForm.get('to')!.value);
    console.log('Amount:' + this.depositForm.get('amount')!.value);
    console.log('Description:' + this.depositForm.get('desc')!.value);
    formDirective.resetForm();
    this.reset();
  }

  reset = () => {
    this.depositForm.reset();
  }
}
