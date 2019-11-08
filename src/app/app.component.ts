import { Component, Inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

vconInfo:Object[]

  constructor(@Inject(HttpClient) public ht){

this.ht.get("./assets/new 5.txt").subscribe((dt)=>{
  //alert(dt)
  this.vconInfo=(dt)
})
}
}
