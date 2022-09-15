import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Catagery } from '../catagery.model';
import { CatageryService } from './catagery.service';

@Component({
  selector: 'app-catagery-list',
  templateUrl: './catagery-list.component.html',
  styleUrls: ['./catagery-list.component.css']
})
export class CatageryListComponent implements OnInit {

  catageryData!: Catagery[];

  constructor(private catageryService: CatageryService) { }

  ngOnInit(): void {
    this.catageryData = this.catageryService.getCatagery();
    this.catageryService.Catagery.
    subscribe(
      (Catagery: Catagery[])=>{
        this.catageryData = Catagery;
      }
    )
  }
  // onclick(): void{
  //   this.catageryService.Catagery.emit(this.catageryData);
  //   console.log(this.catageryData)
  // }
  
  
}