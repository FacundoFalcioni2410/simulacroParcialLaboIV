import { FirestoreService } from './../../services/firestore.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  peliculas: Movie[];
  @Output() seleccionada: EventEmitter<any> = new EventEmitter();

  constructor(private firestore: FirestoreService) {
    this.peliculas = [];
  }

  ngOnInit(): void {
    this.firestore.getPeliculas().subscribe((val: any)=>{
      for(let item of val) {
        this.peliculas.push(item);
      }
      console.log(this.peliculas);
    })
  }

  peliculaSeleccionada(pelicula: Movie){
    this.seleccionada.emit(pelicula);
  }
}
