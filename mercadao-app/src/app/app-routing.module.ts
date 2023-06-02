import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from './pages/estatisticas/estatisticas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { TiComponent } from './pages/estatisticas/areas/ti/ti.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'estatisticas', component: EstatisticasComponent
    },
    {
        path: 'sobre', component: SobreComponent
    },
    {
        path: 'ti', component: TiComponent
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
