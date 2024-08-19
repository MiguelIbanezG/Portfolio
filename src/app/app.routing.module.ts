import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { ExperiencieComponent } from './experiencie/experiencie.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProgrammingComponent } from './programming/programming.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'experiencie', component: ExperiencieComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),
            ModalModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
