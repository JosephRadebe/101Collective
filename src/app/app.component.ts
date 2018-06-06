import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private httpService: HttpClient) { }

  arrMusic: string [];

  ngOnInit () {
    this.httpService.get('./assets/music.json').subscribe(
      data => {
        this.arrMusic = data as string [];	 // Populate the array
        console.log(this.arrMusic);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
