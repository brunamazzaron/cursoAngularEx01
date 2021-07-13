import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNomeComponent } from './input-nome/input-nome.component';
import { TituloComponent } from './titulo/titulo.component';
import { IdadeComponent } from './idade/idade.component';
import { DataNasciComponent } from './data-nasci/data-nasci.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNomeComponent,
    TituloComponent,
    IdadeComponent,
    DataNasciComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
