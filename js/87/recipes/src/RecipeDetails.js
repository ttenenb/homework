import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BulletLessList from './BulletLessList';

export default function RecipeDetails(props) {
  
  const [isImageShowing, setImageShowing] = useState({ imageShowing: true });
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  let { recipeId } = useParams();

  useEffect(() => {
    fetch(`/data/${recipeId}.json`)
      .then(r => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        return r.json();
      })
      .then(recDetail => {
        setName(recDetail.name);  
        setPicture(recDetail.picture);
        setIngredients(recDetail.ingredients);
        setDirections(recDetail.directions);
      })
      .catch(e => console.error(e));
  },[recipeId]);

  function togglePicture () {
 
    setImageShowing( !isImageShowing );
  }

  function getPictureElem(picture, name) {
  
    if (isImageShowing) {
      return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
    }

    return null;
  }

  const text = isImageShowing ? 'hide' : 'show';

  return (
    <div>
      <h2>{name}</h2>
      {getPictureElem(picture, name)}
      <br />
      <button onClick={togglePicture}>
        {text} picture
        </button>
      <h3>ingredients</h3>
      <BulletLessList list={ingredients} />
      <h3>directions</h3>
      <BulletLessList list={directions} />
    </div>
  )

}
