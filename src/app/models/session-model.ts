import { ApartmentModel } from './apartment-model';
import { GuestUserModel } from './guestuser-model';

export class SessionModel {
  DateFormat: string;
  CurrencyIso: string;
  LanguageCode: string;
  apartmentSelected: ApartmentModel;
  loggedInGuest: GuestUserModel;
}
