import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MusicArtistsComponent } from './music-artists/music-artists.component';


export const routes: Routes = [
    {path: 'home', component: AppComponent},
    { path: 'artists', component: MusicArtistsComponent},
    { path: '', redirectTo: '/home', pathMatch:'full'}
];