import { GuestUserModel } from "./guestuser-model";

export class ReviewModel {
    reviewId: number;
    guestId: number;
    apartmentId: number;
    grade: number;
    date: Date;
    note: string;
    guest: GuestUserModel;
}
