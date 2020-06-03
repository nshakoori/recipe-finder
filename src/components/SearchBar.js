import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    handleOnChange = event => {
        this.setState({
            term: event.target.value
        })
    }

    handleOnSubmit = event => {
        const { term } = this.state;

        event.preventDefault();
        this.props.onSubmit(term);
    }
    
    render() {
        const { term } = this.state;

        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Search Recipes</label>
                        <input type="text" value={term} onChange={this.handleOnChange}></input>
                    </div>
                </form>
            </div>
                
        )
    }
}

export default SearchBar;