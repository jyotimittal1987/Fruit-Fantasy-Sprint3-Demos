import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruit-list';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit {
  fruits = FRUITS;
  displayNoRecords: boolean = false;
  searchValue: string = '';
  temp: Fruit[] = this.fruits;
  constructor() { }

  ngOnInit(): void {
  }
  onSearchTextChanged(searchValue: string) {
    this.searchValue = searchValue;
    
   if (searchValue === '') {
      this.displayNoRecords = false;
      this.fruits = [...this.temp];
    }
    else{
      this.fruits = this.temp.filter((result) =>
        result?.name?.startsWith(searchValue)
      );
      this.displayNoRecords = false;
    }
    if (this.fruits.length == 0) {
      this.displayNoRecords = true;
    }
 

}
}
