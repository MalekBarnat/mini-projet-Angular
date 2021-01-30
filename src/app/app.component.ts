import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageId:number=0;
  title = 'MalekSiwar';
  loadpage(pageId:number){
    this.pageId=pageId;
  }
}
