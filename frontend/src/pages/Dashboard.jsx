import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DigitalOcean() {
	const [droplets, setDroplets] = useState([]);

	useEffect(() => {
		const fetchDroplets = async () => {
			const response = await axios.get('/digitalocean/droplets');
			setDroplets(response.data);
		};
		fetchDroplets();
	}, []);

	return (
		<div>
			<h1 className="text-center text-3xl text-blue-500">
				Digital Ocean Droplets
			</h1>
			<ul>
				{droplets.map((droplet) => (
					<li key={droplet.id}>{droplet.name}</li>
				))}
			</ul>
		</div>
	);
}

export default DigitalOcean;
