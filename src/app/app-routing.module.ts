import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultacurpComponent } from './consultacurp/consultacurp.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path:'consultarfc',component:ConsultaComponent},
  {path:'consultacurp',component:ConsultacurpComponent},
  {path:'bitacora',component:BitacoraComponent},
  {path:'menu',component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
