import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageBodyComponent } from './components/main-page-body/main-page-body.component';
import { PruevasComponent } from './pruebasYdocumentacion/pruevas/pruevas.component';
import { SectionItemComponent } from './components/section-item/section-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ButtonComponent } from './components/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageBodyComponent,
    PruevasComponent,
    SectionItemComponent,
    ItemListComponent,
    ButtonComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
