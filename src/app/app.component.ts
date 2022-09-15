import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookapp';

  loadedFeature = 'addCatagery';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  load = 'addBook';
  onSelect(feature: string){
    this.load = feature;
  }
  afterLogin = 'booklist';
  onCorrect(after: any){
    this.afterLogin = after;
  }
}
