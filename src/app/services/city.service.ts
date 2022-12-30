import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private readonly BASE_URL = 'https://api.got.show/api/show'

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.BASE_URL + '/cities')
  }
}
