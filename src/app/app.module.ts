import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './shared/component/movies/movies.component';
import { MoviesCardComponent } from './shared/component/movies-card/movies-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
