import {  Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CreateUserComponent } from '../dialogs/create-user/create-user.component';
import { UserlistService } from 'src/app/services/userlist.service';
import { UserModel } from 'src/app/models/user-model';
import { EditUserComponent } from '../dialogs/edit-user/edit-user.component';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})



export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'fullname', 'dateOfBirth', 'email', 'address', 'phoneNumber', 'aadhaarnumber', 'actions'];
  users!: UserModel[];
  dataSource!: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    public service: UserlistService,
    public tableService: TableService,
    public router: Router) {


  }

  ngOnInit(): void {
    this.service.getAll().then(res => {
      this.users = res

      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  refreshList() {
    this.service.getAll().then(res =>  this.users = res);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(CreateUserComponent, dialogConfig);
  }

  startEdit(index: any, item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { index, item };
    this.dialog.open(EditUserComponent, dialogConfig);
    this.refreshList();
  }

  // deleteUser(id: string) {
  //   // this.service.delete(id);
  //   // this.refreshList();
  // }

  navigate(id: number) {
    // this.tableService.state = item;
    
    this.router.navigate([`admin/user-customer/${id}`]
    ,{queryParams:{id}}
    );
    this.tableService.getAll(String(id));
  }

  

}

