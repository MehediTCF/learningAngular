import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesOf: Recipe[] = [
    new Recipe('Ice', 'Hi', 'https://minimalistbaker.com/wp-content/uploads/2015/06/AMAZING-Vegan-Cherry-Pie-ICE-CREAM-10-ingredients-simple-methods-SO-delicious-vegan-recipe-icecream-dessert-cherry-summer-fruit-675x1024-1.jpg' ),
    new Recipe('Rice', 'Test', 'https://minimalistbaker.com/wp-content/uploads/2015/06/AMAZING-Vegan-Cherry-Pie-ICE-CREAM-10-ingredients-simple-methods-SO-delicious-vegan-recipe-icecream-dessert-cherry-summer-fruit-675x1024-1.jpg' )    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
