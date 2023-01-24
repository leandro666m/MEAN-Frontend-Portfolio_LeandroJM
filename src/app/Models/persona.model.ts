export class Persona {
    _id?: string;
    nombre: string;
    comentario: string;
    telefono: string;
    ciudad: string;
    email: string;
    titulo: string;

    
    constructor( nombre: string, comentario: string, telefono: string, ciudad: string, email: string, titulo: string) {

        this.nombre = nombre;
        this.comentario=comentario;
        this.email = email;
        this.titulo = titulo;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.titulo = titulo;
    }
    
    
 }
