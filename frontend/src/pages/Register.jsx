import React, { useState } from 'react';
import axios from 'axios';

function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:3000/auth/register',
				{
					username,
					password,
				}
			);
			setSuccess('Registration successful!');
			setError('');
		} catch (err) {
			setError('Registration failed. Please try again.');
			setSuccess('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center items-center w-[350px] h-[300px] bg-slate-200 rounded-sm shadow-md gap-4 p-4 mx-auto mt-4"
		>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
				required
				className="w-[300px] h-[40px] p-2 rounded-md border border-gray-300"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				required
				className="w-[300px] h-[40px] p-2 rounded-md border border-gray-300 mt-4"
			/>
			<button
				type="submit"
				className="btn h-[40px] w-[300px] p-2 rounded-md border bg-blue-500 text-white hover:bg-blue-600"
			>
				Register
			</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{success && <p style={{ color: 'green' }}>{success}</p>}
		</form>
	);
}

export default Register;
