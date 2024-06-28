import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import DigitalOcean from './pages/DigitalOcean';

function App() {
	return (
		<>
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/digitalocean" component={DigitalOcean} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
