import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  balance = 4654;
  title = 'bank-app';
  name = 'As';
  ShowName(){
    if  (localStorage.getItem("token")!=null){
      console.log(localStorage.getItem("BankToken"));
      
      return true;
    } else return false;

  }
}
