import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Output() enviarActor: EventEmitter<any> = new EventEmitter()
  actores: Actor[] = [];
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.firestore.getActores().subscribe( (val: any) =>{
      for(let actor of val)
      {
        this.actores.push(actor);
      }
    })
  }

  enviar(actor: any){
    this.enviarActor.emit(actor);
  }

}
