import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'estatisticas', component: EstatisticasComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
