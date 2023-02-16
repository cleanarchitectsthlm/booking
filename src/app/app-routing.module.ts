import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { TransferComponent } from './transfer/transfer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentsResolver } from './resolvers/apartments.resolver';
import { ApartmentResolver } from './resolvers/apartment.resolver';
import { SearchComponent } from './search/search.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { apartmentList: ApartmentsResolver }
  },
  {
    path: 'apartment/:id',
    component: ApartmentComponent,
    resolve: {
      apartmentSelected: ApartmentResolver
    }
  },
  {
    path: 'search',
    component: SearchComponent
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
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ApartmentsResolver, ApartmentResolver]
})
export class AppRoutingModule { }
