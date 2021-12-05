import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ListarPersonaComponent } from './persona/listar-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { EliminarPersonaComponent } from './persona/eliminar-persona.component';
import { ListarBeneficiarioComponent } from './beneficiario/listar-beneficiario/listar-beneficiario.component';
import { ListarPedidoOracionComponent } from './pedido-oracion/listar-pedido-oracion.component';


//-------se importo-------------------------------
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YourComponentNameComponent } from './your-component-name/your-component-name.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PedidoComponent } from './pedido/pedido.component';
//-----------------------

@NgModule({
  declarations: [
    AppComponent,
    ComentarioComponent,
    ListarPersonaComponent,
    NuevoPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    ListarBeneficiarioComponent,
    ListarPedidoOracionComponent,
    YourComponentNameComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      //-------
      HttpClientModule,//se puso
      FormsModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
      //////------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
