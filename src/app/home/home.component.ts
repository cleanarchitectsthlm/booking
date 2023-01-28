import { Component } from '@angular/core';
// import { APARTMENTS } from '../data/apartments';
import { ActivatedRoute, Router } from '@angular/router';
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

  public goToApartment(apartmentId: number) {
    this.router.navigate([`/apartment/${apartmentId}`]);
  }
}
