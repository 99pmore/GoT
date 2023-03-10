import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/models/city.interface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() city!: City

  @Output() sendCity: EventEmitter<City> = new EventEmitter<City>()

  constructor() { }

  ngOnInit(): void {
  }

  public selectCity(city: City) {
    this.sendCity.emit(city)
  }

}
