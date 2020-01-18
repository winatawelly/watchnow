import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/theme.css';
import Navbar from './Components/Layout/Navbar'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Recommend from './Components/Main/Recommend'
import Result from './Components/Main/Result'

import {Provider} from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>
                    <Route exact path='/' component={Header}/>
                    <Switch>
                        <Route exact path='/recommend' component={Recommend}/>
                        <Route exact path='/result' component={Result}/>
                    </Switch>
                    <Footer/>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
