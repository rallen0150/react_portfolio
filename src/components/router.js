import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import Technologies from './Technologies';

const Main = () => (
    <Switch>
        {/* <Route exact path="/" component={Homepage}></Route> */}
        <Route exact path="/" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/technologies" component={Technologies}></Route>
    </Switch>
)

export default Main;