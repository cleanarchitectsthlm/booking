import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { TransferComponent } from './transfer/transfer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ApartmentComponent } from './apartment/apartment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'apartment/:id',
    component: ApartmentComponent
  },
  {
    path: 'excursions',
    component: ExcursionsComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
