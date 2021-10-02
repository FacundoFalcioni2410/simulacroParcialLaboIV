import { ApiService } from './../../../services/api.service';
import { FirestoreService } from './../../../services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  actorSeleccionado: any;
  paisSeleccionado: any;
  peliculasActor: any;

  constructor(private firestore: FirestoreService, private api: ApiService) {

  }

  ngOnInit(): void {
  }

  recibirActor(actor: any)
  {
    this.actorSeleccionado = actor;
    this.firestore.getPeliculas().subscribe( (val: any) =>{
      this.peliculasActor = val.filter( (item: any) =>{
        return `${actor?.nombre} ${actor?.apellido}` === item?.actor;
      });
    });

    this.api.getCountries().subscribe( (val: any) =>{
      this.paisSeleccionado = val.filter( (item: any) =>{
        return actor.pais === item.name;
      });
    });
  }

  borrarPeliculasActor(){
    this.peliculasActor = null;
  }

  borrarPaisActor(){
    this.paisSeleccionado = null;
  }

  borrarActor(){
    this.actorSeleccionado = null;
  }


}
