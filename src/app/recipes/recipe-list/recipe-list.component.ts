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
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Moroccan_Fish_Recipe.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
