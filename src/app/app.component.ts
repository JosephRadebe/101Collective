import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AccordionModule } from "ng2-accordion";
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.Component.css']
})
export class AppComponent implements OnInit {
  public title = 'Please select all that apply';

  constructor(private httpService: HttpClient,
    private router: Router) { }

  arrMusic: any[];
  artist:string;
  saveMusic: string[] = [];    //initialize the save selected array

  //retrieving the music
  ngOnInit() {
    this.httpService.get('./assets/music.json').subscribe(
      data => {
        this.arrMusic = data as string[];	 // Populate the array
        console.log(this.arrMusic);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    
  }


  //select artists
  clickMusic(id: any) {


    for (var i = 0; i < this.arrMusic.length; i++) {


      for (var x = 0; x < this.arrMusic[i].artists.length; x++) {

        if (id === this.arrMusic[i].artists[x].artist_id) {

          this.artist = this.arrMusic[i].artists[x].artist;

          //save the selected artist
          this.saveMusic.push(this.artist);

          console.log(this.saveMusic);
        }
      }
    }

  }


  //navigate to the artists component
  goToArtist() {

    localStorage.setItem('moveItems', JSON.stringify(this.saveMusic));
    // this.dArray.push(this.saveMusic);
    this.router.navigate([{ outlets: { artist: ['artists'] } }]); 
    // this.router.navigate(['artists']);
    console.log('go to artist');

  }

  //scriipts
  
  convertToScript() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
