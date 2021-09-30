import { TablaPeliculaComponent } from './../components/tabla-pelicula/tabla-pelicula.component';
import { TablaPaisesComponent } from './../components/tabla-paises/tabla-paises.component';
import { TablaActorComponent } from './../components/tabla-actor/tabla-actor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TablaActorComponent, TablaPaisesComponent, TablaPeliculaComponent],
  exports: [TablaActorComponent, TablaPaisesComponent, TablaPeliculaComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
