import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public platform: Platform, 
  ) {}

  play(e){
    console.log(e.target.innerText);
    let button = e.target.innerText;
    switch(button){
      case "C" :
            this.playPianoNote("/assets/notes/C.mp3");
            break;
      case "D" :
            this.playPianoNote("/assets/notes/D.mp3");
            break;
      case "E" :
              this.playPianoNote("/assets/notes/E.mp3");
              break;
      case "F" :
              this.playPianoNote("/assets/notes/F.mp3");
              break;
      case "G" :
            this.playPianoNote("/assets/notes/G.mp3");
            break;
      case "A" :
            this.playPianoNote("/assets/notes/A.mp3");
            break;
      case "B" :
            this.playPianoNote("/assets/notes/B.mp3");
            break;
      default : 
            console.log("default");
            break;      
    }
  }

  playPianoNote(note){
    let audio = new Audio();
    audio.src=note;
    audio.load();
    audio.play();
  }
  

}
