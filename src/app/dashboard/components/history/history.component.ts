import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }
  test(){
    this.appComponent.ChangeAccount("SAVINGS")
    console.log("test");
    
  }
  test2(){
    this.appComponent.ChangeAccount("CURRENT")
    console.log("test");
    
  }
  ngOnInit(): void {
  }

}
