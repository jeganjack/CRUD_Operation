import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { NgxSpinnerModule } from "ngx-spinner";
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './page/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule, ToastModule 

  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
