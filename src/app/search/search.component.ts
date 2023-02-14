import { Component, OnInit } from '@angular/core';
import { ApartmentModel } from '../models/apartment-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from '../Services/apartment.service';
import { map } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  checkinDate: Date;
  checkoutDate: Date;
  public isWorking = false;
  public apartmentList: ApartmentModel[];
  public searchExecuted = false;
  checkinDateControl: UntypedFormControl;
  checkoutDateControl: UntypedFormControl;

  basicValue = '';
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  constructor(private route: ActivatedRoute, private router: Router, private apartmentService: ApartmentService) {}

  ngOnInit() {
    this.searchExecuted = false;
    const c_in = this.route
      .queryParamMap
      .pipe(map(params => params.get('checkin')));

    const c_out = this.route
      .queryParamMap
      .pipe(map(params => params.get('checkout')));

      c_in.subscribe(value => {
        if (value) {
          this.checkinDate = new Date(value);
          this.checkinDateControl = new UntypedFormControl(this.checkinDate);

          if (this.checkinDate && this.checkoutDate) {
            this.doSearch(this.checkinDate.toISOString(), this.checkoutDate.toISOString(), true);
          }
        } else {
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);

          this.checkinDateControl = new UntypedFormControl(tomorrow);
          this.checkinDate = tomorrow;
        }
      });

      c_out.subscribe(value => {
        if (value) {
          this.checkoutDate = new Date(value);
          this.checkoutDateControl = new UntypedFormControl(this.checkoutDate);
          if (this.checkinDate !== undefined && this.checkoutDate !== undefined) {
            this.doSearch(this.checkinDate.toISOString(), this.checkoutDate.toISOString(), true);
          }
        } else {
          const suggest_cout = new Date();
          suggest_cout.setDate(suggest_cout.getDate() + 8);

          this.checkoutDateControl = new UntypedFormControl(suggest_cout);
          this.checkoutDate = new Date(suggest_cout);
        }
      });
  }

  isValidDate(d: any) {
    const isnan = isNaN(d);
    return d instanceof Date && !isnan;
  }

  doSearch(checkin: any, checkout: any, redirect = false) {
    this.isWorking = true;
    if (redirect) {

    }

    this.apartmentService.searchAvailable(checkin, checkout).subscribe(data => {
      this.apartmentList = data;
      this.isWorking = false;
    });
  }

  onSearch() {
    if (!this.isValidDate(this.checkinDate) || !this.isValidDate(this.checkoutDate)) {
      return;
    }

    this.doSearch(this.checkinDate.toISOString(), this.checkoutDate.toISOString(), false);
  }

  onApartmentSelect(item: any) {
    this.router.navigate(['apartment', item.apartmentId]);
  }

}
