import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  selectedAccount = 0;

  constructor() { }

  savingAccount() {
    let storage = localStorage.getItem('induk-bank-user');
    let parsedStorage = JSON.parse(storage as string);
    this.selectedAccount = parsedStorage.savingAccount;
    return this.selectedAccount
  }
  currentAccount() {
    let storage = localStorage.getItem('induk-bank-user');
    let parsedStorage = JSON.parse(storage as string);
    this.selectedAccount = parsedStorage.currentAccount;
    return this.selectedAccount
  }
}
