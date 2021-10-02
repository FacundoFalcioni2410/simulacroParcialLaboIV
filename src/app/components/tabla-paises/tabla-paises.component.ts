import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: any;
  @Input() paisRecibido: any = [];
  @Output() paisEnviar: EventEmitter<any> = new EventEmitter();

  constructor(private api: ApiService) {
    this.paises = [];
  }

  ngOnInit(): void {
    this.api.getCountries().subscribe( (val: any) =>{

      if(!this.paisRecibido)
      {
        for(let item of val)
        {
          this.paisRecibido.push(item);
        }
      }
    })
  }

  enviar(pais: any){
    this.paisEnviar.emit(pais);
  }

}
