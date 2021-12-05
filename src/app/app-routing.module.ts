import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonaComponent } from './persona/listar-persona.component';
import { ListarPedidoOracionComponent } from './pedido-oracion/listar-pedido-oracion.component';
import { ComentarioComponent } from './comentario/comentario.component';
const routes: Routes = [
//   {path: '', component: ListarPersonaComponent},
  //{path: '', component: ListarPedidoOracionComponent},
  {path: '', component: ComentarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
