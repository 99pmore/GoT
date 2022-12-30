import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character!: Character

  @Output() sendCharacter: EventEmitter<Character> = new EventEmitter<Character>()
  
  constructor() { }

  ngOnInit(): void {
  }

  public selectCharacter(character: Character) {
    this.sendCharacter.emit(character)
  }

}
