import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor(private http:HttpClient) { }
  private="http://localhost:3000/usuarios"
  getUsuarios():Observable <any>{
   return this.http.get(this.API_USER)
  }
  
  postUser():Observable<any>{
    return this.http.post(this.API_USER.Mesero)
  }
}
