export class GuestUserModel {
  public guestId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public mobile: string;
  public address: string;
  public zip: string;
  public city: string;
  public country: string;
  public confirmDate?: Date;
  public offers: boolean;
  public newsLetter: boolean;
  public isBookingManager: boolean;
  public note: string;
  public password: string;
  public externalGuestReference: string;
  public profilePictureUrl: string;
  public socialReferenceId: string;
  public socialProvider: string;
}
