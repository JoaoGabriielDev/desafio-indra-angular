import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HistoricoPrecosComponent } from './historico-precos/historico-precos.component';

const routes: Routes = [
  { path: '', component: TelaPrincipalComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'historico-preco', component: HistoricoPrecosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
