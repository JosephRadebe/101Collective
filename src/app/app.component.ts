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

  constructor (private httpService: HttpClient,
  private router:Router) { }

  arrMusic: any [];

  saveMusic: string[] = [];    //initialize the save selected array

  dArray: any[]=[];

  //retrieving the music
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


  clickMusic(id: any ) {
    

    for(var i=0; i < this.arrMusic.length; i++) {
      
      
      for (var x = 0; x < this.arrMusic[i].artists.length; x++) {

        if (id === this.arrMusic[i].artists[x].artist_id) {

          let name = this.arrMusic[i].artists[x];
          
          //save the selected artist
          this.saveMusic.push(name.artist);

          console.log(this.saveMusic);
        }
      }
    }

  }
  

  //navigate to the artists page
  goToArtist() { 
    
    this.dArray.push(this.saveMusic);
    
    if(this.dArray) {
      this.router.navigate(['artists']);
      console.log('go to artist');
    }else{
      console.log('Please select artist');
    }
  }
  
}
