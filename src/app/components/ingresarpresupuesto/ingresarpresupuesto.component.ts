import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-ingresarpresupuesto',
  templateUrl: './ingresarpresupuesto.component.html',
  styleUrls: ['./ingresarpresupuesto.component.css']
})
export class IngresarpresupuestoComponent {

  //variables
  cantidad: number;

  //constructor
  constructor(private _presupuestoService:PresupuestoService, private router:Router){
    this.cantidad=0;
  };

  //metodos
  agregar(){
    if(this.cantidad > 0){
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gastos']);
    }else{
      this.cantidad=0;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El numero debe ser mayor a 0',
      })
    }
  };

}
