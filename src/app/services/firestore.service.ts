import { Actor } from './../classes/actor';
import { Movie } from './../classes/movie';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  peliculasCollection: any;
  peliculas: any;
  actoresCollection: any;
  actores: any;

  constructor(private firestore: AngularFirestore) {
    this.peliculasCollection = this.firestore.collection<Movie>('peliculas');
    this.peliculas = this.peliculasCollection.valueChanges();
    this.actoresCollection = this.firestore.collection<Actor>('actor');
    this.actores = this.actoresCollection.valueChanges();
  }

  getPeliculas(){
    return this.peliculas;
  }

  getActores(){
    return this.actores;
  }

  agregarActor(object: Actor){
    this.firestore.collection('actor').add(object);
  }

  agregarPelicula(object: Movie){
    this.firestore.collection('peliculas').add(object);
  }
}
