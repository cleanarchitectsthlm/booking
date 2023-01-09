import { Image } from './image-model';

export class ApartmentModel {
  public apartmentId: number;
  public title: string;
  public header: string;
  public picture: string;
  public images: Image[];
  public description: string;
}
