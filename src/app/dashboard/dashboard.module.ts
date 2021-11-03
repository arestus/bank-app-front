import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { PaymentComponent } from './components/payment/payment.component';
import { HistoryComponent } from './components/history/history.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MatTableModule } from '@angular/material/table' 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { TransferComponent } from './components/create-transaction/transfer/transfer.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, MatOption, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DepositComponent } from './components/create-transaction/deposit/deposit.component';
import { WithdrawComponent } from './components/create-transaction/withdraw/withdraw.component';



@NgModule({
  declarations: [
    PaymentComponent,
    HistoryComponent,
    WrapperComponent,
    UserlistComponent,
    CreateUserComponent,
    CreateTransactionComponent,
    TransferComponent,
    DepositComponent,
    WithdrawComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports:[
    MatToolbarModule,
    MatTableModule
    
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
})
export class DashboardModule { }
