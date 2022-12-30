import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FilterArrayPipe } from './pipes/filter-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterListComponent,
    CharacterCardComponent,
    HomeComponent,
    HouseListComponent,
    HouseCardComponent,
    HousesComponent,
    CitiesComponent,
    CityListComponent,
    CityCardComponent,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
