import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ListarClientComponent } from './Client/listar-client/listar-client.component';
import { DeleterClientComponent } from './Client/deleter-client/deleter-client.component';
import { EditClientComponent } from './Client/edit-client/edit-client.component';
import { AddCuentaComponent } from './Cuenta/add-cuenta/add-cuenta.component';
import { ListarCuentaComponent } from './Cuenta/listar-cuenta/listar-cuenta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './Client/Services/client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarOperacionesComponent } from './Operaciones/listar-operaciones/listar-operaciones.component';
import { ConsignacionComponent } from './Operaciones/consignacion/consignacion.component';
import { RetiroComponent } from './Operaciones/retiro/retiro.component';
import { TransferenciaComponent } from './Operaciones/transferencia/transferencia.component';
import { EditCuentaComponent } from './Cuenta/edit-cuenta/edit-cuenta.component';
import { HeaderComponent } from './Core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListarClientComponent,
    DeleterClientComponent,
    EditClientComponent,
    AddCuentaComponent,
    ListarCuentaComponent,
    ListarOperacionesComponent,
    ConsignacionComponent,
    RetiroComponent,
    TransferenciaComponent,
    EditCuentaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
