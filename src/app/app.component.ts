import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from './Models/persona.model';
import { PersonaService } from './Services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAdmin = false;
  roles: string[]=[];
  persona: Persona[] = [];
  
  constructor(public personaServ: PersonaService,private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.cargarPersona();
    //this.cargarRoles();
  }

  public cargarPersona(): void {
    this.personaServ.getPersona().subscribe(
      { next: (data) => {
          this.persona = data;  },
        error: (e) => {
          this.toastr.error(e.error.mensaje, 'Error CARGAR PERSONA', {timeOut: 3000,positionClass: 'toast-top-center' });
          this.router.navigate(['/'])   }
      }
    );
  }


}
