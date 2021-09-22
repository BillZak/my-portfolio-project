import React from 'react';
// import dependencies
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import page components
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About';
import Contacts from '../Pages/Contacts/Contacts';
import Projects from '../Pages/Projects/Projects';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
