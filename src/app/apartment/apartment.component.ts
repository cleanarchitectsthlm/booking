import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentModel } from '../models/apartment-model';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  public apartment: ApartmentModel;
  private sub: any;

  constructor(private route: ActivatedRoute, public sessionService: SessionService) {}
  ngOnInit(): void {
    this.sub = this.route.data
      .subscribe(value => {
        this.sessionService.session.apartmentSelected = value['apartmentSelected'];
        console.log(this.sessionService.session.apartmentSelected);

      }
    )
  }
}
