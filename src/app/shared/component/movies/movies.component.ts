import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../models/movies';
import { moviesArr } from '../../consts/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesArr : Array<Imovies> = moviesArr
  constructor() { }

  ngOnInit(): void {
  }

}
