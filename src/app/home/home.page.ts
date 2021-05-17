import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  keyboardElement : any;
  @ViewChild('keyboard', { static: false }) keyboard: any;
  saveX : number;
  saveY : number;

  constructor(
    public platform: Platform, 
  ) {}

  ngAfterViewInit(){
      this.keyboardElement = this.keyboard.nativeElement;
      this.keyboardElement.width = this.platform.width() + '';
      this.keyboardElement.height = 200;
      console.log(this.keyboardElement);
  }

  play(note : string){
    switch(note){
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
      case "AS" : 
            this.playPianoNote("/assets/notes/AS.mp3");
            break;
      case "GS" : 
            this.playPianoNote("/assets/notes/GS.mp3");
            break;
      case "FS" : 
            this.playPianoNote("/assets/notes/FS.mp3");
            break;
      case "DS" : 
            this.playPianoNote("/assets/notes/DS.mp3");
            break;
      case "CS" : 
            this.playPianoNote("/assets/notes/CS.mp3");
            break;
      default : 
            console.log("default");
            break;      
    }
  }

  playPianoNote(note){
    let audio = new Audio(note);
    audio.play();
  }

  getPosition(ev){
    let keyboardPosition = this.keyboardElement.getBoundingClientRect();
    this.saveX = ev.pageX - keyboardPosition.x;
    this.saveY = ev.pageY - keyboardPosition.y;
    console.log(this.saveX+"---"+this.saveY);

  }

  moved(event){
      console.log(event.pageX+"----"+event.pageY);

      
  }
  

}
