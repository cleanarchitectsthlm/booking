import { ApartmentModel } from './apartment-model';
export class Price {
  public priceId: number;
  public apartmentId: number;
  public priceEur: number;
  public priceHrk: number;
  public startDate: Date;
  public endDate: Date;
  public apartment: ApartmentModel;
}
