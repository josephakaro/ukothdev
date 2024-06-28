import React, { useState } from 'react';
import axios from 'axios';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:3000/auth/login',
				{
					username,
					password,
				},
				{ withCredentials: true }
			);

			// Handle successful login
			console.log('Logged in:', response.data);
		} catch (err) {
			setError('Login failed. Please check your username and password.');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button type="submit">Login</button>
			{error && <p>{error}</p>}
		</form>
	);
}

export default Login;
// In this code snippet, we have a simple login form component that allows users to log in to the application. The component uses the useState hook to manage the form input values and error state.
