import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly BASE_URL = 'https://api.got.show/api/show'

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHouses(): Observable<House[]> {
    return this.httpClient.get<House[]>(this.BASE_URL + '/houses')
  }
}
