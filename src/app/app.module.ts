import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HistoricoPrecosComponent } from './historico-precos/historico-precos.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    ListaUsuariosComponent,
    HistoricoPrecosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
