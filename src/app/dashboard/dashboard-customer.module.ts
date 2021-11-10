import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingCustomerModule } from './dashboard-routing-customer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingCustomerModule,
    MatSelectModule,
    FormsModule,
  ],
  
})
export class DashboardCustomerModule {}
