import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
