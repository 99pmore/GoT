import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { House } from 'src/app/models/house.interface';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent implements OnInit {

  @Input() house!: House

  @Output() sendHouse: EventEmitter<House> = new EventEmitter<House>()

  constructor() { }

  ngOnInit(): void {
  }

  public selectHouse(house: House) {
    this.sendHouse.emit(house)
  }

}
