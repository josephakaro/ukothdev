const axios = require('axios');

const doAxios = axios.create({
	baseURL: 'https://api.digitalocean.com/v2/',
	headers: {
		Authorization: `Bearer ${process.env.DO_API_TOKEN}`,
	},
});

const createDroplet = async (name, region, size, image) => {
	const response = await doAxios.post('/droplets', {
		name,
		region,
		size,
		image,
	});
	return response.data;
};

const listDroplets = async () => {
	const response = await doAxios.get('/droplets');
	return response.data;
};

module.exports = { createDroplet, listDroplets };
