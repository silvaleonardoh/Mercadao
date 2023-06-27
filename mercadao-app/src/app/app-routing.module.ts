
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TiComponent } from './pages/estatisticas/ti/ti.component';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'estatisticas',
        component: EstatisticasComponent
    },
    {
        path: 'ti',
        component: TiComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
