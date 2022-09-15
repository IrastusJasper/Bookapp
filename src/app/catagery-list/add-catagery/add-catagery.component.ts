import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Catagery } from 'src/app/catagery.model';
import { CatageryService } from '../catagery.service';

@Component({
  selector: 'app-add-catagery',
  templateUrl: './add-catagery.component.html',
  styleUrls: ['./add-catagery.component.css']
})
export class AddCatageryComponent implements OnInit {

  constructor(private addingCatagery: CatageryService) {}

  ngOnInit(): void {
  }

  onAddCatagery(Name: string, ImageUrl:any){
    this.addingCatagery.addCatagery(Name,ImageUrl)
      
  }
}
