import { EmailDto } from "./Dtos/emailDto";

export class Reservation {
  public bookingReservationId?: number;
  public apartmentId: number;
  public bookingId?: number;
  public guestId?: number;
  public statusId: number;
  public occupiedDate: Date;
  public isCheckinDate: boolean;
  public isCheckoutDate: boolean;
  public FromDate: string;
  public ToDate: string;
  public emailDto: EmailDto;
  public note: string;
  public guestCount: number;
  public sumPaid: number;
}
