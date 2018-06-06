import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AccordionModule } from "ng2-accordion";


@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.Component.css']
})
export class AppComponent implements OnInit {
  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor (private httpService: HttpClient) { }

  arrMusic: string [];

  //retrieving the music genres
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
