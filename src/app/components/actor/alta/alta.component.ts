import { Actor } from './../../../classes/actor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  paisRecibido: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  recibirPais(pais: any): void {
    this.form.get('pais')?.setValue(pais.name);
  }

  agregarActor(){
    let actor: Actor = new Actor(this.form.get('nombre')?.value, this.form.get('apellido')?.value, this.form.get('pais')?.value);
    this.firestore.agregarActor({...actor});
    this.form.reset();
  }
}
