import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<div className="flex flex-col items-center justify-center h-screen w-screen">
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/dashboard" element={<Dashboard />} />
					{/* Add more routes as needed */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
