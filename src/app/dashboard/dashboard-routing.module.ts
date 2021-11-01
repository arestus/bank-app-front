
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CreateUserComponent } from './components/create-user/create-user.component';
import { HistoryComponent } from './components/history/history.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'user-list',
        component: UserlistComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
