import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivosListComponent } from './activos-list/activos-list.component';
import { OperacionesListComponent } from './operaciones-list/operaciones-list.component';
import { OperacionComponent } from './operacion/operacion.component';

const routes: Routes = [
  { path: '', component: ActivosListComponent },
  { path: 'operaciones/:activoId', component: OperacionesListComponent},
  { path: 'operacion/:activoId/:tipoOper', component: OperacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
