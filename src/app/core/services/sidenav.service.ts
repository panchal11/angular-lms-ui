import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})


export class SidenavService{
    Datas=[
        {title:"c programming"},
        {title:"pyton programming"},
        {title:"java programming"},
        {title:"core programming"}
        

    ]

    getLocaleDateFormat(){
        return this.Datas;
    }

}