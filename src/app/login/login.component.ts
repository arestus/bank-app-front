import { Component, OnInit } from '@angular/core';
interface Role {
  value: string;
  viewValue: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  selected = 'Customer';

  selectedValue: string='';
  selectedCar: string='';
  constructor() { }
LogIn( name:any, pass:any, role:any){
  console.log(name.value);
  console.log(pass.value);
  console.log(role);
  
}
  ngOnInit(): void {
  }

}
