import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RecipeFinder from './components/RecipeFinder';
import reducers from './reducers';

ReactDOM.render(
    <BrowserRouter> 
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Switch>
                {/* <div> */}
                    <Route exact path='/' component={RecipeFinder} />
                    {/* <Route path='/recipe/:id' component={RecipeModal} /> */}
                {/* </div> */}
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);