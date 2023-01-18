import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  public apartment: any;
  title = 'angular-app';
  images = [
    {title: 'First Slide', desc: 'First Slide Description', src: "https://picsum.photos/id/102/900/500"},
    {title: 'Second Slide', desc: 'Second Slide Description', src: "https://picsum.photos/id/1020/900/500"},
    {title: 'Third Slide', desc: 'Third Slide Description', src: "https://picsum.photos/id/1024/900/500"}
  ];
  constructor(private route: ActivatedRoute, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    this.apartment = this.route.snapshot.data['apartment'];
  }
}
