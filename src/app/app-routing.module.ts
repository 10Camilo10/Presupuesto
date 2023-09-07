import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarpresupuestoComponent } from './components/ingresarpresupuesto/ingresarpresupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path: 'ingresarpresupuesto',component: IngresarpresupuestoComponent },
  { path: 'gastos',component: GastosComponent },
  { path: '',redirectTo: '/ingresarpresupuesto',pathMatch: 'full' },
  { path: '**',redirectTo: '/ingresarpresupuesto',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
