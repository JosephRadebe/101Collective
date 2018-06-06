import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AccordionModule } from "ng2-accordion";

import { AppComponent } from './app.component';
import { MusicArtistsComponent } from './music-artists/music-artists.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicArtistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
