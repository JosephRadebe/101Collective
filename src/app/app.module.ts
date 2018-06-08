import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AccordionModule } from "ng2-accordion";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MusicArtistsComponent } from './music-artists/music-artists.component';
import { routes } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    MusicArtistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
