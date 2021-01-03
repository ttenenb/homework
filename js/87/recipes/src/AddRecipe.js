import { useState } from 'react';

import React from 'react';
function AddRecipe(props) {
    // const [name, setName] = useState('');
    // const [ingredients, setIngredients] = useState([]);
    // const [directions, setDirections] = useState([]);

    const [allValues, setValues] = useState({ name: '', ingredients: [], directions: [] });

    function handleSubmit(e) {
        e.preventDefault();
        // alert(`name: ${name}`);
        // alert(`ingredients: ${ingredients}`);
        // alert(`directions: ${directions}`);
        Object.keys(allValues).forEach(key => {
            alert(`${key}: ${allValues[key]}`);
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            {/* <input placeholder='Enter recipe name' name='name' onChange={e => setName(e.target.value)} /> */}
            <input placeholder='recipe name' name='name2' onChange={e => setValues({...allValues,name:e.target.value})} />
            <hr />
            {/* <textarea placeholder='Enter ingredients' name='ingredients' onChange={e => setIngredients(e.target.value)} /> */}
            <textarea placeholder='Enter ingredients' name='ingredients2' onChange={e => setValues({...allValues, ingredients: e.target.value })} />
            <br />
            {/* <textarea placeholder='Enter directions' name='directions' onChange={e => setDirections(e.target.value)} /> */}
            <textarea placeholder='Enter directions' name='directions' onChange={e => setValues({...allValues,  directions: e.target.value })} />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default AddRecipe;