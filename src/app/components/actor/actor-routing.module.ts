import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'alta',
    component: AltaComponent
  },
  {
    path: 'actorpelicula',
    component: ActorPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
