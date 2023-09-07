import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/service/presupuesto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ing-gastos',
  templateUrl: './ing-gastos.component.html',
  styleUrls: ['./ing-gastos.component.css']
})
export class IngGastosComponent {

  //variables
  nombregasto:string;
  cantidad:number;

  //constructor
  constructor(private _presupuestoService: PresupuestoService){
    this.nombregasto='';
    this.cantidad=0;
  };

  //metodos
  agregargasto(){
    //validar que el gasto no se mayor al presupuesto
    if(this.cantidad > this._presupuestoService.restante){
      Swal.fire({
        icon: 'error',
        title: 'No puedes :(',
        text: 'El gasto es mayor a tu presupuesto',
      })
      return;
    }

    //validar que todo este lleno
    if(this.nombregasto == '' || this.cantidad <= 0){
      this.nombregasto='';
      this.cantidad=0;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre o la cantidad son invalidas',
      })
    }else{
      //creamos un objeto
      const GASTO={
        nombre:this.nombregasto,
        cantidad:this.cantidad
      }

      //enviamos el objeto via subjet
      this._presupuestoService.addgasto(GASTO);
      //reseteamos formulario
      this.nombregasto='';
      this.cantidad=0;
    }
  };
}
