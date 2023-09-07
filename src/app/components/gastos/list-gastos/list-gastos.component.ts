import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-list-gastos',
  templateUrl: './list-gastos.component.html',
  styleUrls: ['./list-gastos.component.css']
})
export class ListGastosComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  presupuesto:number;
  restante:number;
  listgastos:any[]=[];

  constructor(private _presupuestoServices: PresupuestoService){
    this.presupuesto=0;
    this.restante=0;

    this.subscription = this._presupuestoServices.getgasto().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listgastos.push(data);
    })
  }

  cambiarcolor(){
    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-primary'
    }
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoServices.presupuesto;
    this.restante = this._presupuestoServices.restante;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
