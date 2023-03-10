import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { TransferComponent } from './transfer/transfer.component';
import { ContactusComponent } from './contactus/contactus.component';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ApartmentComponent } from './apartment/apartment.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentsResolver } from './resolvers/apartments.resolver';
import { ApartmentService } from './Services/apartment.service';
import { ConfigurationService } from './Services/configuration.service';
import { SessionService } from './Services/session.service';
import { SearchComponent } from './search/search.component';
import { ReservationsComponent } from './reservations/reservations.component';

export class MyModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ExcursionsComponent,
    TransferComponent,
    ContactusComponent,
    ApartmentComponent,
    SearchComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    NgbCarouselModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApartmentsResolver,
    ApartmentService,
    ConfigurationService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

