import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component'
import {ProductFormComponent} from './components/product-form/product-form.component'
import {ClientsListComponent} from './components/clients-list/clients-list.component'
import {ClientProfilComponent} from './components/client-profil/client-profil.component'
import {OrderComponent} from './components/order/order.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },

  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'clients',
    component: ClientsListComponent
  },

  {
    path: 'products/add',
    component: ProductFormComponent
  },

  {
    path: 'products/edit/:id',
    component: ProductFormComponent
  },

  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'profil',
    component: ClientProfilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
