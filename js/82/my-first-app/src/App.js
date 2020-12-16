import React, { Component } from 'react';
import Recipes from './Recipes';
import './App.css';
import RecipeDetails from './RecipeDetails';
import latke from './images/latkes.jpg';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Latkes',
        recipeDetails: {
          ingredients: ['Potatoes ', 'Eggs and ', 'Oil'],
          instructions: 'Grate the potatoes, mix ingredients and fry for delicious latkes.'  ,
          image: {
            src: latke
          }
        }
      },
      {
        id: 2,
        name: 'Donuts',
        recipeDetails: {
          ingredients: ['Flour ', 'Sugar ', 'Water and ', 'Oil'],
          instructions: 'Mix the flour,sugar and water and fry in the oil for delicious donuts.'
        }
      }
    ],
    currentSelection(i) {
      return this.recipes[i];
    }
  }

  getRecipeList() {
    return this.state.recipes.map((recipe, id) => <Recipes recipe={recipe} key={id} />);
  }
  
  render() {
    return (
      <div className="App">
        { this.getRecipeList()}
        <RecipeDetails recipeDetails={this.state.currentSelection(0).recipeDetails} />
      </div>
    );
  }
}
export default App;
