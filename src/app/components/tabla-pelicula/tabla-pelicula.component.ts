import { Actor } from './../../classes/actor';
import { FirestoreService } from './../../services/firestore.service';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculasActor: Movie[];
  @Output() seleccionada: EventEmitter<any> = new EventEmitter();

  constructor(private firestore: FirestoreService) {
    this.peliculasActor = [];
    this.firestore.getPeliculas().subscribe((val: any)=>{
      if(!this.peliculasActor.length)
      {
        for(let item of val)
        {
          this.peliculasActor.push(item);
        }
      }
    });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes.actorRecibido.currentValue !== changes.actorRecibido.previousValue)
  //   {
  //     this.cargarPeliculasActor(changes.actorRecibido.currentValue);
  //   }
  // }

  ngOnInit(): void {
  }

  peliculaSeleccionada(pelicula: Movie){
    this.seleccionada.emit(pelicula);
  }
}