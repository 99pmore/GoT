import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.interface';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  public cities!: City[]

  public selectedCity!: City

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.getCities()
  }

  private getCities(): void {
    this.cityService.getCities().subscribe(
      {
        next: (response) => {
          this.cities = response
        }
    })
  }

  public receiveCity(city: City) {
    this.selectedCity = city
  }

}
