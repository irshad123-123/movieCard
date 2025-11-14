import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../models/movies';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {
  @Input() movie! : Imovies
  baseUrl :string = 'https://image.tmdb.org/t/p/w500/'
  constructor() { }

  ngOnInit(): void {
  }

}
