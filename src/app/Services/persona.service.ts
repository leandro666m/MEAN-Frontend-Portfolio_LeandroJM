import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
    
  URL = 'http://localhost:4000/';
  
  constructor( private httpCliente: HttpClient ) { }
  
  public getPersona(): Observable<any> {
    return this.httpCliente.get( this.URL + `getPersona`);
  }
  
  public editarPersona( id: number, persona: Persona ): Observable<any> {
    return this.httpCliente.put( this.URL + `editar/${id}`, persona );
  }
  
  /*  
  public editarPersona( id: number, persona: Persona ): Observable<any> {
    return this.httpCliente.put( this.URL + `editar/${id}`, persona );
  }
  */

  /*
  public getPersona(id: number): Observable<Persona> {
    return this.httpCliente.get<Persona>( this.URL + `getPersonas/${id}`);
  }
  
  
  
  /*-------------Experiencias------------------------------------------------------------
  
  public getExperiencias(): Observable<Experiencia[]> {
    return this.httpCliente.get<Experiencia[]>( this.URL + 'getExperiencias' );
  }
  
  public updateExperiencia( id: number, experiencia: Experiencia ): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `editarExp/${id}`, experiencia );
  }
  public deleteExp(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `borrarExp/${id}`);
  }
  
  //-------------Educacion------------------------------------------------------------
  
  public getEducacion(): Observable<Educacion[]> {
    return this.httpCliente.get<Educacion[]>( this.URL + 'getEducacion' );
  }
  public updateEducacion( id: number, educ: Educacion ): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `editarEduc/${id}`, educ );
  }
  
  public deleteEduc(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `borrarEduc/${id}`);
  }
  
  //-------------Skills------------------------------------------------------------
  
  public getSkills(): Observable<Skill[]> {
    return this.httpCliente.get<Skill[]>( this.URL + 'getSkills' );
  }
  public updateSkill( id: number, skill: Skill ): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `editarSkill/${id}`, skill );
  }
  public deleteSkill(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.URL + `borrarSkill/${id}`);
  }
  //-------------Proyectos------------------------------------------------------------
  
  /* public getProyectos(): Observable<Proyectos[]> {
    return this.httpCliente.get<Skill[]>( this.URL + 'getSkills' );
  }
  public updateProyectos( id: number, skill: Skill ): Observable<any> {
    return this.httpCliente.put<any>( this.URL + `editarSkill/${id}`, skill );
  } */
  
  
}
