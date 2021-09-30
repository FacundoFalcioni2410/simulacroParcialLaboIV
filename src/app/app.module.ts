import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
