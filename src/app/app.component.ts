import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput:any = ''
    receivesearchInput($event:any){
        this.searchInput=$event
    }

  _opened: boolean = true;
  details="";
  games : any
  constructor(){

      this.games = [{
          name : "Deus Ex: Mankind Divided",
          entities: "0",
          date : "Jul 26",
          description: "This is description for : Deus Ex: Mankind Divided"
      },
      {
          name : "Hue",
          entities: "0",
          date : "Jul 27",
          description: "This is description for : Hue"
      },
      {
          name : "The Huntsman: Winter's Curse",
          entities: "0",
          date : "Aug 03",
          description: "This is description for : The Huntsman: Winter's Curse"
      },
      {
          name : "Age of Empires",
          entities: "28",
          date : "Aug 05",
          description: "This is description for : Age of Empires"
      },
      {
        name : "Baldur’s Gate",
        entities: "100",
        date : "Aug 11",
        description: "This is description for : Baldur’s Gate"
      },
      {
        name : "Call of Duty",
        entities: "24",
        date : "Aug 12",
        description: "This is description for : Call of Duty"
      },
      {
        name : "Far Cry",
        entities: "34",
        date : "Aug 15",
        description: "This is description for : Far Cry"
      },
      {
        name : "Winter's Curse",
        entities: "100",
        date : "Aug 17",
        description: "This is description for : Winter's Curse"
      },
      {
        name : "Romance of the Three Kingdoms",
        entities: "70",
        date : "Aug 20",
        description: "This is description for : Romance of the Three Kingdoms"
      },
      {
        name : "Super Mario Bros.",
        entities: "59",
        date : "Aug 23",
        description: "This is description for : Super Mario Bros"
      },
      {
        name : "Unreal Tournament",
        entities: "44",
        date : "Aug 25",
        description: "This is description for : Unreal Tournament"
      },
      {
        name : "Space Invaders",
        entities: "40",
        date : "Aug 27",
        description: "This is description for : Space Invaders"
    }]
  };
  _toggleSidebar() {
    this._opened = true
   }

   detailsClick(detail:any){
       this.details = detail
   }
}
