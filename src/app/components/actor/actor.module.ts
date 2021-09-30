import { TablaPaisesComponent } from './../tabla-paises/tabla-paises.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    AltaComponent,
    TablaPaisesComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
