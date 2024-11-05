import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentCreateComponent } from './components/payment-create/payment-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
