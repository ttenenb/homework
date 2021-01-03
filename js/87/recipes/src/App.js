import './App.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import RecipesList from './RecipesList';
import RecipeDetails from './RecipeDetails';
import Header from './Header';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>

        <Route path='/recipes'>
          PCS Recipes &copy;
         <RecipesList />
        </Route>

        <Route path='/recipe/:recipeId'>
          <RecipeDetails/>
        </Route>
        <Route path='/addRecipe'>
          <AddRecipe/>
        </Route>

        <Redirect to='/recipes' />

      </Switch>

    </div>
  );
}

export default App;
