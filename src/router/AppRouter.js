import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {SearchScreen} from '../components/SearchScreen';
import {ResultsScreen} from '../components/ResultsScreen';
import {DetailsScreen} from '../components/DetailsScreen';




export const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path='/' component={ SearchScreen } />
                <Route exact path='/items?search=' component={ ResultsScreen} />
                <Route exact path='/items/:id' component={ DetailsScreen } /> 


                <Redirect to='/' />
            </Switch>  
        </div>
        </Router>
    )
}