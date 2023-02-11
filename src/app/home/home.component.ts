import { Component } from '@angular/core';
// import { APARTMENTS } from '../data/apartments';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApartmentModel } from '../models/apartment-model';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { ReviewModel } from '../models/review-model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private sub: any;
  public apartmentList: ApartmentModel[];
  checkinDate: Date;
  checkoutDate: Date;
  // apartments = APARTMENTS;
  basicValue = '';
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  private reviewResources$: Subject<ReviewModel[]> = new Subject();
  reviews: Observable<ReviewModel[]> | null = null;
  reviewList: ReviewModel[];
  selectedReview: ReviewModel;

  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient, config: NgbCarouselConfig, private userService: UserService) {
      // customize default values of carousels used by this component tree
      config.interval = 10000;
      config.wrap = false;
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.sub = this.route.data
      .subscribe(value => {
        this.apartmentList = value['apartmentList'];
        console.log(this.apartmentList);
        }
      );
    // this.apartments = this.route.snapshot.data['apartments'];
    this.userService.getTopSixReviews().subscribe(res => {
      this.reviewResources$.next(res);
    });

    this.reviews = this.reviewResources$;
    this.reviews.subscribe(revs => {
      this.reviewList = revs;
      console.log(this.reviewList)
    });
  }

  isValidDate(d: any) {
    const isnan = isNaN(d);
    return d instanceof Date && !isnan;
  }

  onSearch() {
    if (!this.isValidDate(this.checkinDate) || !this.isValidDate(this.checkoutDate)) {
      return;
    }

    // Set our navigation extras object
    // that contains our global query params and fragment
    const in_yy = this.checkinDate.getFullYear();
    const out_yy = this.checkoutDate.getFullYear();
    const in_mm = this.checkinDate.getMonth() + 1;
    const out_mm = this.checkoutDate.getMonth() + 1;
    const in_dd = this.checkinDate.getDate();
    const out_dd = this.checkoutDate.getDate();
    let in_mm_str = in_mm.toString();
    if (in_mm < 10) {
      in_mm_str = '0' + in_mm.toString();
    }
    let out_mm_str = out_mm.toString();
    if (out_mm < 10) {
      out_mm_str = '0' + out_mm.toString();
    }
    const navigationExtras: NavigationExtras = {
      queryParams: { 'checkin': in_yy + '-' + in_mm_str + '-' + in_dd, 'checkout': out_yy + '-' + out_mm_str + '-' + out_dd },
      fragment: 'anchor'
    };

    this.router.navigate(['search'], navigationExtras);
  }
  goToApartment(item: any) {
    this.router.navigate(['apartment', item.apartmentId]);
}
}
