// export interface Apartment {
//   apartmentId: number;
//   title: string;
//   header: string;
//   picture: string;
//   images: string[];
//   description: string;
// }

import { ApartmentEquipment } from "./apartment-equipment-model";
import { Picture } from "./picture-model";
import { Price } from "./price-model";
import { Reservation } from "./reservation-model";

export class ApartmentModel {
  public apartmentId: number;
  public floor: number;
  public price: number;
  public name: string;
  public description: string;
  public equipments: ApartmentEquipment[];
  public prices: Price[];
  public pictures: Picture[];
  public reservations: Reservation[];
}
