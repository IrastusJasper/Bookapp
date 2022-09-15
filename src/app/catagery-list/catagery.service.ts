import { EventEmitter, Injectable } from '@angular/core';
import { Catagery } from '../catagery.model';

@Injectable({
  providedIn: 'root'
})
export class CatageryService {

  Catagery = new EventEmitter<Catagery[]>();
  private newCatagery: Catagery[] = [
    new Catagery(
      'Sample Catagery',
      'https://thumbs.dreamstime.com/b/new-career-text-concept-blue-arrow-flying-over-green-world-map-background-d-render-illustration-new-career-text-concept-101329527.jpg'
    )
  ]; 
  constructor() { }
 
 addCatagery(Name: string, ImageUrl: any){
    this.newCatagery.push(new Catagery(Name,ImageUrl));
    this.Catagery.emit(this.newCatagery.slice())
  }
  getCatagery(){
    return this.newCatagery.slice()
  }
}
