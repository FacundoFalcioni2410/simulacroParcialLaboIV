import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: 'busqueda',
    component: BusquedaComponent
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./components/peliculas/peliculas.module').then(m=> m.PeliculasModule)
  },
  {
    path: 'actor',
    loadChildren: () => import('./components/actor/actor.module').then(m=> m.ActorModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
