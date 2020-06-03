import React from 'react';

// import { Link } from 'react-router-dom'
import './RecipeDetails.scss'

const RecipeDetails = ({ recipe, onRecipeSelect }) => {
    return (
        <div className="recipe-details" onClick={() => onRecipeSelect(recipe)}>
            {/* <Link to={`/recipe/${recipe.idMeal}`}> */}
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p> {recipe.strMeal} </p>
            {/* </Link> */}
        </div>
    )
}

export default RecipeDetails;