import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-music-artists',
  template: `<h3>Artists</h3>
<h3>{{dArray}}</h3>
<br>
<button (click)="goBack()">Back</button>
`
})
export class MusicArtistsComponent {
  
  @Input() dArray: any;

  constructor(private route: Router, private location:Location) { }

  //go back
  goBack() {
    this.location.back();
  }
  
}
