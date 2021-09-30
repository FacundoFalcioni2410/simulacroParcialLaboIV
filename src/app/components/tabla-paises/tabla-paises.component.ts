import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: any;
  @Output() paisEnviar: EventEmitter<any> = new EventEmitter();

  constructor(private api: ApiService) {
    this.paises = [];
  }

  ngOnInit(): void {
    this.api.getCountries().subscribe( (val: any) =>{
      console.log(val);
      for(let item of val)
      {
        this.paises.push(item);
      }
    })
  }

  enviar(pais: any){
    this.paisEnviar.emit(pais);
  }

}
