import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  correo:any=""
  contrasenia:any=""
    
  servisio =Inject(AccesoService)
  ngOnInit(){

    this.servisio.ge
  }
   login(form: NgForm){
    console.log(form.value)
   }
}
