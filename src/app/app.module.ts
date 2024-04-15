import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuracion del local para sacar el idioma
import  localEs  from '@angular/common/locales/es';
import  localFrCa  from '@angular/common/locales/fr-CA';
import  {registerLocaleData}  from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFrCa);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'} // para poner como local español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
