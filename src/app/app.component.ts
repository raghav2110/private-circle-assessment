import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message:any = ''
    receiveMessage($event:any){
        this.message=$event
    }

  _opened: boolean = true;
  welcome : string;
  details="";
  games : any
  constructor(){
      this.welcome = "Display List using ngFor in Angular 2"

      this.games = [{
          game : "Deus Ex: Mankind Divided",
          platform: "0",
          release : "Aug 23"
      },
      {
          game : "Hue",
          platform: "0",
          release : "Aug 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "100",
          release : "Aug 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "100",
          release : "Aug 23"
      }]
  };
  _toggleSidebar() {
    this._opened = true
   }

   detailsClick(detail:any){
       this.details = detail
   }
}
