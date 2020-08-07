import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		// add history={...} in <Router>
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
