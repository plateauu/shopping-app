import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'This is a test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Moroccan_Fish_Recipe.jpg'),
    new Recipe(
      'test2 recipe',
      'This is a second test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAD38JwVqlmEHhGGaA2Xf22l4AEqOReI-uzA&usqp=CAU')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
