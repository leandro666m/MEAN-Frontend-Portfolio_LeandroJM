import { Component, Input, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/Models/persona.model';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  //@Input() isAdmin: boolean;
  @Input() persona: any;
  //@Input() id: number;
  
  constructor( public personaServ: PersonaService, public offcanvasService: NgbOffcanvas, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  openAbout( aboutEdit: any  ): void{
    this.offcanvasService.open( aboutEdit , { position: 'end'});
  }
/*
  onUpdateAcerca( ): void{
    this.personaServ.updatePersona( this.id, this.persona ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }
*/

}






