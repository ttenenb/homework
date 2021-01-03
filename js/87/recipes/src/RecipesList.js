import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function RecipesList(props) {
    const [recipeList, setRecipes] = useState([]);

    useEffect(
         () => {
            fetch('data/recipes.json')
                .then(r => {
                    if (!r.ok) {
                        throw new Error(r.status);
                    }
                    return r.json();
                })
                .then(recipes => {
                    setRecipes(recipes);
                })
                .catch((e) => console.error(e))
        }
    ,[])
    return (
        <ul>
            {recipeList.map(r => <li key={ r.id}><Link to={`/recipe/${r.id}`}>{r.name}</Link></li>)}
        </ul>
    );
}

export default RecipesList;