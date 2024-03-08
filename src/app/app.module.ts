import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TareasGgtComponent } from './components/tareas-ggt/tareas-ggt.component';
import { NavbarGgtComponent } from './components/navbar-ggt/navbar-ggt.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasGgtComponent,
    NavbarGgtComponent
  ],
  imports: [
    BrowserModule,   
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
