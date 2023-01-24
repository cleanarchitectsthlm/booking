import { Component } from '@angular/core';
// import { APARTMENTS } from '../data/apartments';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentModel } from '../models/apartment-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private sub: any;
  public apartmentList: ApartmentModel[];
  // apartments = APARTMENTS;
  basicValue = '';
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient){}

  ngOnInit(): void {
    this.sub = this.route.data
      .subscribe(value => {
          this.apartmentList = value['apartmentList'];
        }
      );
    // this.apartments = this.route.snapshot.data['apartments'];
  }

  public goToApartment(apartmentId: number) {
    this.router.navigate([`/apartment/${apartmentId}`]);
  }
}
