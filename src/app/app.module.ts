import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { LoginFormModule } from './modules/login-form/module/login-form/login-form.module';
import { HeaderModule } from './modules/header/header-module/header/header.module';
import { PruevasModule } from './pruebasYdocumentacion/pruevas/pruevas.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LoginModule,
    LoginFormModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    PruevasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
