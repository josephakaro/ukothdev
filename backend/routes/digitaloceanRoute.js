const express = require('express');
const {
	createDroplet,
	listDroplets,
} = require('../services/digitaloceanService');

const router = express.Router();

router.post('/droplets', async (req, res) => {
	const { name, region, size, image } = req.body;
	try {
		const droplet = await createDroplet(name, region, size, image);
		res.status(201).json(droplet);
	} catch (error) {
		res.status(500).json({ error: 'Error creating droplet' });
	}
});

router.get('/droplets', async (req, res) => {
	try {
		const droplets = await listDroplets();
		res.status(200).json(droplets);
	} catch (error) {
		res.status(500).json({ error: 'Error listing droplets' });
	}
});

module.exports = router;
