import { Actor } from './actor';
import { Genero } from './genero';
export class Movie {
    id: number;
    nombre: string;
    tipo: Genero;
    fechaEstreno: string;
    cantidadPublico: number;
    foto: string;
    actor: string;

    constructor(id: number, nombre: string, tipo: Genero, fechaEstreno: string, cantidadPublico: number, foto: string, actor: string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno
        this.foto = foto;
        this.cantidadPublico = cantidadPublico;
        this.actor = actor;
    }
}
