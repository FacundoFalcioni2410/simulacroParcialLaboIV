import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/classes/movie';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cantidadPublico: ['', Validators.required],
      tipo: ['', Validators.required],
      fechaEstreno: ['', Validators.required],
      actor: ['', Validators.required],
      file: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  recibirActor(actor: any): void {
    this.form.get('actor')?.setValue(`${actor.nombre} ${actor.apellido}`);
  }

  agregarPelicula(){
    let pelicula = new Movie(0, this.form.get('nombre')?.value,this.form.get('tipo')?.value,this.form.get('fechaEstreno')?.value, this.form.get('cantidadPublico')?.value, this.form.get('file')?.value, this.form.get('actor')?.value);
    this.firestore.agregarPelicula({...pelicula});
    this.form.reset();
  }
}