import {Component, OnInit} from '@angular/core';
import {Ingridient} from '../shared/indgridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingridient[] = [
    new Ingridient('Apples', 2),
    new Ingridient('Tomatoes', 1)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
