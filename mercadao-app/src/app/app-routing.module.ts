import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEstatisticasComponent } from './pagina-estatisticas/pagina-estatisticas.component';

const routes: Routes = [
    {
        path: '', component: PaginaHomeComponent
    },
    {
        path: 'estatisticas', component: PaginaEstatisticasComponent
    },
    {
        path: '', redirectTo: '/pagina-home', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
