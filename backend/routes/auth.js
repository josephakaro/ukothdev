const express = require('express');
const passport = require('passport');
const { addUser } = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await addUser(username, password);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: 'Error registering user' });
	}
});

router.post('/login', passport.authenticate('local'), (req, res) => {
	res.status(200).json(req.user);
});

router.get('/logout', (req, res) => {
	req.logout();
	res.status(200).json({ message: 'Logged out' });
});

module.exports = router;
