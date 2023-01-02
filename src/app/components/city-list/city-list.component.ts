import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.interface';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  public cities!: City[]
  public isMobile: boolean = false

  public selectedCity!: City

  constructor(
    private cityService: CityService,
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.getCities()
    this.getIsMobile()
  }

  private getCities(): void {
    this.cityService.getCities().subscribe(
      {
        next: (response) => {
          this.cities = response
        }
    })
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.isMobile = result.matches ? true : false
    })
  }

  public receiveCity(city: City) {
    this.selectedCity = city
  }

}
