import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import routes from "./Routes";
import './App.less';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    {
                        routes.map(route => {
                            return (
                                <Route key={route.path}
                                       path={route.path}
                                       component={route.component}
                                       exact={route.exact}
                                />
                            )
                        })
                    }
                    <Redirect exact from='/' to={routes[0].path}/>
                    <Redirect to='/404'/>
                </Switch>

            </div>
        );
    }
}

export default App;
