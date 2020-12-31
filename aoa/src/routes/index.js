import React, {Component} from 'react';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home, Login, Register, Product, Goods, List, NotFound} from '../containers';
// import routes from './Routes';

export  default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter keyLength={ 12 }>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/login' component={ Login }/>
                        <Route path='/register' component={ Register }/>
                        <Route path='/product' component={ Product }/>
                        <Route path='/product/:id' component={ Goods }/>
                        <Route path='/404' component={ NotFound }/>
                        <Redirect from='/*' to='/404'/>
                        {/*<Redirect to='/404'/>*/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
