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

  recibirActor(pais: any): void {
    this.form.get('actor')?.setValue(pais.nombre);
  }

  onFileChange(event: any) {
    console.log(this.form.get('file')?.setValue(event.target.files[0].name));
  }

  agregarPelicula(){
    console.log(this.form.get('file')?.value);
    let pelicula = new Movie(this.form.get('nombre')?.value, this.form.get('nombre')?.value,this.form.get('tipo')?.value,this.form.get('fechaEstreno')?.value, this.form.get('cantidadPublico')?.value, this.form.get('file')?.value);
    // console.log(pelicula);
    this.firestore.agregarPelicula({...pelicula});
  }
}
