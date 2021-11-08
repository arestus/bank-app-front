import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper-user',
  templateUrl: './wrapper-user.component.html',
  styleUrls: ['./wrapper-user.component.css']
})
export class WrapperComponentUser implements OnInit {

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
