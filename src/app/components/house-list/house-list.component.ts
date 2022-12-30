import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house.interface';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  public houses!: House[]

  public selectedHouse!: House

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.getHouses()
  }

  private getHouses(): void {
    this.houseService.getHouses().subscribe(
      {
        next: (response) => {
          this.houses = response
        }
    })
  }

  public receiveHouse(house: House) {
    this.selectedHouse = house
  }

}
