import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly BASE_URL = 'https://api.got.show/api/show'

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.BASE_URL + '/characters')
  }
}
