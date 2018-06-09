import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-music-artists',
  template: `<h3>You have selected the following items </h3>
  <div *ngFor="let x of storedNames">
<h3>{{x}}</h3>
</div>
<br>
<button (click)="goBack()">Back</button>
`
})
export class MusicArtistsComponent implements OnInit {
  
  

  constructor(private route: Router, private location:Location) { }

  storedNames: string = JSON.parse(localStorage.getItem("moveItems"));

  ngOnInit() {
    console.log(this.storedNames);
  }

  //go back
  goBack() {
    this.location.back();
  }
  
}
