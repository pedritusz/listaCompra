import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { HeaderModule } from './modules/header/header-module/header/header.module';
import { PruevasModule } from './pruebasYdocumentacion/pruevas/pruevas.module';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ErrorInterceptorInterceptor } from './interceptors/error-interceptor.interceptor';
import { DashboardModule } from './pages/dashboard/module/dashboard.module';
import { LoginOkGuard } from './guards/login-ok.guard';
@NgModule({
  declarations: [
    AppComponent,
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    HeaderModule,
    PruevasModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
    LoginOkGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
