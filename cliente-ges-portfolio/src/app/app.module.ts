import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormAltaComponent } from './form-alta/form-alta.component';
import { FormBajaComponent } from './form-baja/form-baja.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAltaComponent,
    FormBajaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
