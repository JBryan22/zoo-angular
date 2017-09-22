import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AnimalListComponent } from './animal-list.component';
import { AnimalNewComponent } from './animal-new.component';
import { AnimalDetailComponent } from './animal-detail.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalNewComponent,
    AnimalDetailComponent
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
