import { Component } from '@angular/core';
import { APARTMENTS } from '../data/apartments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apartments = APARTMENTS;
  basicValue = '2023-01-01';
}
