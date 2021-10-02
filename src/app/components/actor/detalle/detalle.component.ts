import { Actor } from './../../../classes/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() actor: Actor | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
