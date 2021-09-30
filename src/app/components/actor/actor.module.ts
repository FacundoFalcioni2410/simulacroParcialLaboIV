import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AltaComponent,
    ActorPeliculaComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
