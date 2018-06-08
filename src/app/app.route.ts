import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MusicArtistsComponent } from './music-artists/music-artists.component';


export const routes: Routes = [
    { path: 'artists', component: MusicArtistsComponent}
];