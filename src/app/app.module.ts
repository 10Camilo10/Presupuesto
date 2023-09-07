import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngGastosComponent } from './components/gastos/ing-gastos/ing-gastos.component';
import { ListGastosComponent } from './components/gastos/list-gastos/list-gastos.component';
import { IngresarpresupuestoComponent } from './components/ingresarpresupuesto/ingresarpresupuesto.component';

//Modulos
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngGastosComponent,
    ListGastosComponent,
    IngresarpresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
