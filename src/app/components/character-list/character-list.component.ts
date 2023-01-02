import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { CharacterService } from 'src/app/services/character.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters!: Character[]
  public isMobile: boolean = false

  public selectedCharacter!: Character

  constructor(
    private characterService: CharacterService,
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.getCharacters()
    this.getIsMobile()
  }

  private getCharacters(): void {
    this.characterService.getCharacters().subscribe(
      {
        next: (response) => {
          this.characters = response
        }
    })
  }

  private getIsMobile() {
    this.breakpointService.getIsMobile().subscribe(result => {
      this.isMobile = result.matches ? true : false
    })

    // this.breakpointService.isHandset$.subscribe(isHandset => {
    //   this.isMobile = isHandset;
    // })
  }

  public receiveCharacter(character: Character) {
    this.selectedCharacter = character
  }

}
