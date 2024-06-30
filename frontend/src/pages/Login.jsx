import React, { useState } from 'react';
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
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center mt-4 w-[350px] h-[300px] mx-auto gap-4 p-4 bg-slate-200 rounded-lg shadow-md"
		>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
				className="h-[40px] w-[300px] p-2 rounded-md border border-gray-300"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				className="h-[40px] w-[300px] p-2 rounded-md border border-gray-300"
			/>
			<button
				type="submit"
				className="btn h-[40px] w-[300px] p-2 rounded-md border bg-blue-500 text-white hover:bg-blue-600"
			>
				Login
			</button>
			{error && <p className="text-red-500">{error}</p>}
		</form>
	);
}

export default Login;
// In this code snippet, we have a simple login form component that allows users to log in to the application. The component uses the useState hook to manage the form input values and error state.
