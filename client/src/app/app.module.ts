import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientProfilComponent } from './components/client-profil/client-profil.component';
import { OrderComponent } from './components/order/order.component';

import {ProductsService} from './services/products.service'
import {ClientsService} from './services/clients.service';
import { ClientsListComponent } from './components/clients-list/clients-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ClientFormComponent,
    LoginFormComponent,
    NavigationComponent,
    ClientProfilComponent,
    OrderComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
