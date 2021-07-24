import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({    
    selector:'app-navaiagation-bar',    
    templateUrl:'./navigation-bar.component.html',    
    styleUrls:['./navigation-bar.component.css']    
    })
    
export class NavigationBarComponent  implements OnInit  
{      
    searchh:string=''
    message = ""
    @Output() event = new EventEmitter<string>()
    ngOnInit(){}

    sendSearch(search:any){
        this.message= search
        this.event.emit(this.message)
    }
}