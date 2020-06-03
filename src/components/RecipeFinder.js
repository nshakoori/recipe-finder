import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchRecipes, fetchRecipeByName } from '../actions';
import SearchBar from "./SearchBar";
import RecipeList from './RecipeList';

class RecipeFinder extends Component {
    componentDidMount(){
        this.props.fetchRecipes();
    }
    
    handleOnSubmit = term => {
        this.props.fetchRecipeByName(term);
    }

    render() {
        const { recipes } = this.props;
        return (
            <div>
                <SearchBar onSubmit={this.handleOnSubmit} />
                <RecipeList recipes={recipes} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { recipes: state.recipes }
}

RecipeFinder.defaultProps = {
    recipes: []
}
export default connect(mapStateToProps, { fetchRecipes, fetchRecipeByName })(RecipeFinder);