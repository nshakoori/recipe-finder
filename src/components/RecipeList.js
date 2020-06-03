import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeModal from './RecipeModal';

class RecipeList extends Component {

    state = { 
        recipe: null
    }

    onRecipeSelect = recipe => {
        this.setState({ recipe })
    }

    onModalClose = () => {
        this.setState({ recipe: null })
    }

    render() {
        const { recipes } = this.props;
        const { recipe } = this.state;

        return (
            <div>
                <h1>Recipes of the Day</h1>
                {
                    recipes.map(recipe => {
                        return <RecipeDetails key={recipe.idMeal} recipe={recipe} onRecipeSelect={this.onRecipeSelect}/>
                    })
                }
                {<RecipeModal recipe={recipe} onClose={this.onModalClose}/>}
            </div>
        )
    }
    
}

export default RecipeList;