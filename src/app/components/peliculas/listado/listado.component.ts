import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  peliculas: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe( (val: any) =>{
      this.peliculas = val.results;
      for(let item of this.peliculas) {
        let poster = item.poster_path;
        item.poster_path = `https://image.tmdb.org/t/p/w500${poster}`
      }
    });
  }



}
