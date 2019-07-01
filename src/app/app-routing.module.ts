import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultacurpComponent } from './consultacurp/consultacurp.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'consultarfc',component:ConsultaComponent},
  {path:'consultacurp',component:ConsultacurpComponent},
  {path:'bitacora',component:BitacoraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
