import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { CharacterService } from 'src/app/services/character.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters!: Character[]
  public isPhone: boolean = false

  public selectedCharacter!: Character

  constructor(
    private characterService: CharacterService,
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.getCharacters()

    this.responsive.observe([
      Breakpoints.XSmall     
      ])
      .subscribe(result => {

        this.isPhone = false

        if (result.matches) {
          this.isPhone = true
        }
    })
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
