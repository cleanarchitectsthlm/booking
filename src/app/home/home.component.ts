import { Component } from '@angular/core';
import { APARTMENTS } from '../data/apartments';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apartments = APARTMENTS;
  basicValue = '';
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  constructor(private route: ActivatedRoute,
    private router: Router){}

  // ngOnInit(): void {
  //   this.apartments = this.route.snapshot.data['apartments'];
  // }

  public goToApartment(apartmentId: number) {
    this.router.navigate([`/apartment/${apartmentId}`]);
  }
}
