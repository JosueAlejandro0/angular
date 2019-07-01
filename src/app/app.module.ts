import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { ConsultacurpComponent } from './consultacurp/consultacurp.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    LoginComponent,
    ConsultacurpComponent,
    BitacoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
