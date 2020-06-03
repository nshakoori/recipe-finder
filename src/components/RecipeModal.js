import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RecipeModal.scss';

class RecipeModal extends Component  {

        render() { 
        const { recipe } = this.props;
        if (!recipe) {
            return null
        }
        return ( recipe &&
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={this.props.onClose}>&times;</span>
                    <p>{recipe.strMeal}</p>
                    <i className="fas fa-heart"></i>
                </div>

            </div>
        )
    }
}

export default connect()(RecipeModal);