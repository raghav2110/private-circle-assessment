import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({    
    selector:'app-navaiagation-bar',    
    templateUrl:'./navigation-bar.component.html',    
    styleUrls:['./navigation-bar.component.css']    
    })
    
export class NavigationBarComponent  implements OnInit  
{      
    searchText:string=''
    searchInput = ""
    @Output() event = new EventEmitter<string>()
    ngOnInit(){}

    sendSearch(search:any){
        this.searchInput= search
        this.event.emit(this.searchInput)
    }
}