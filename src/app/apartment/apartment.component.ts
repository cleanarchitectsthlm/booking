import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  public apartment: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apartment = this.route.snapshot.data['apartment'];
  }
}
