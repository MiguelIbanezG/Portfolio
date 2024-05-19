import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ModalModule.forRoot()],
  exports: [RouterModule]
})

export class AppRoutingModule { }