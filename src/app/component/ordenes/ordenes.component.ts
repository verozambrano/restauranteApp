import { Component, inject, OnInit } from '@angular/core';
import { AccesoService } from '../../services/acceso.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];

  constructor(private databaseService: UserActivation) {}
  servisio = inject(AccesoService)

  ngOnInit() {
   this.ordenes,getOrdenes().subscribe( u=>{
      this.ordenes = u;
    });
  }
}
function getOrdenes() {
  throw new Error('Function not implemented.');
}

