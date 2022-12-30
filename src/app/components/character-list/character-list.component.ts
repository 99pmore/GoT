import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters!: Character[]

  public selectedCharacter!: Character

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  private getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      {
        next: (response) => {
          this.characters = response
        }
    })
  }

  public receiveCharacter(character: Character) {
    this.selectedCharacter = character
  }

}
