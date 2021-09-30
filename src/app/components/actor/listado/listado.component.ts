import { Actor } from './../../../classes/actor';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

}
