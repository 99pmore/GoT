import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'houses', component: HousesComponent},
  { path: 'cities', component: CitiesComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
