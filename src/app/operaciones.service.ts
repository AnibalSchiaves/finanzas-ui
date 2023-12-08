import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operacion } from './activos';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService { 

  constructor(
    private http: HttpClient
  ) { }

  getOperaciones(ticker: string) {
    let response = this.http.get<Operacion[]>('/assets/operaciones/'+ticker+'.json');
    return response;
  }
}
