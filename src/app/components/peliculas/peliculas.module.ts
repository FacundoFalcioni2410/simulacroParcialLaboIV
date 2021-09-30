import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from '../../components/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    AltaComponent,
    ListadoComponent,
    TablaActorComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PeliculasRoutingModule,
  ]
})
export class PeliculasModule { }
