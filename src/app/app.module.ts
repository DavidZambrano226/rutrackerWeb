import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//rutas
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';

//servicios






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
