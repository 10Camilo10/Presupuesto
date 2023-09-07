import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  //variables
  presupuesto:number;
  restante:number;
  private gastos$ = new Subject<any>();

  //constructor
  constructor() { 
    this.presupuesto=0;
    this.restante=0;
  }

  addgasto(gasto:any){
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  getgasto(): Observable<any>{
    return this.gastos$.asObservable();
  }
}
