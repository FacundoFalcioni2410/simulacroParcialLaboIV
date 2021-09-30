import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  
  mostrar: boolean = false;
  peliculaSeleccionada: Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVista(){
    if(this.mostrar)
    this.mostrar = false;
    else
    this.mostrar = true;
  }

  recibirPelicula(pelicula: any){
    this.peliculaSeleccionada = pelicula;
  }

  borrarPelicula(){
    this.peliculaSeleccionada = undefined;
  }

}
