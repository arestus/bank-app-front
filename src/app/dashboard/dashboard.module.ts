import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HistoryComponent } from './components/history/history.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { CreateUserComponent } from './components/dialogs/create-user/create-user.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { TransferComponent } from './components/create-transaction/transfer/transfer.component';
import { DepositComponent } from './components/create-transaction/deposit/deposit.component';
import { WithdrawComponent } from './components/create-transaction/withdraw/withdraw.component';
import { ConfirmationPageComponent } from './components/create-transaction/confirmation-page/confirmation-page.component';



// import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [
    // LoginComponent,
    // PaymentComponent,
    // HistoryComponent,
    // WrapperComponent,
    // UserlistComponent,
    // CreateUserComponent,
    // CreateTransactionComponent,
    // TransferComponent,
    // DepositComponent,
    // WithdrawComponent,


  
    ConfirmationPageComponent,
  

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  
})
export class DashboardModule {}
