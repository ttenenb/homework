import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <NavLink to='/recipes'>Recipes</NavLink> | <NavLink to='/addRecipe'>Add Recipe</NavLink>
        </header>
    );
}

export default Header;