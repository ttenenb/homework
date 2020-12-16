import React from 'react';

export default function RecipeDetails(props) {
    return (
        <>
            <h2> {props.recipeDetails.ingredients}</h2 >
            <h2> {props.recipeDetails.instructions}</h2 >
            <img src={props.recipeDetails.image.src} alt='yummy food' />
        </>
    );

}