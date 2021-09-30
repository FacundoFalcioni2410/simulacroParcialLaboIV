import { Genero } from './genero';
export class Movie {
    id: number;
    nombre: string;
    tipo: Genero;
    fechaEstreno: string;
    cantidadPublico: number;
    foto: string;

    constructor(id: number, nombre: string, tipo: Genero, fechaEstreno: string, cantidadPublico: number, foto: string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno
        this.foto = foto;
        this.cantidadPublico = cantidadPublico;
    }
}
