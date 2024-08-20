
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/*Componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperiencieComponent } from './experiencie/experiencie.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ContactComponent } from './contact/contact.component';


/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    ExperiencieComponent,
    ProgrammingComponent,
    ProyectsComponent,
    SocialNetworkComponent,
    ContactComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CommonModule,
    RouterModule,
    ModalModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports:[
    SocialNetworkComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
