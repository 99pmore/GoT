import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house.interface';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  public houses!: House[]
  public isMobile: boolean = false

  public selectedHouse!: House

  constructor(
    private houseService: HouseService,
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.getHouses()
    this.getIsMobile()
  }

  private getHouses(): void {
    this.houseService.getHouses().subscribe(
      {
        next: (response) => {
          this.houses = response
        }
    })
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.isMobile = result.matches ? true : false
    })
  }

  public receiveHouse(house: House) {
    this.selectedHouse = house
  }

}
