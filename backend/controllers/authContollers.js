const bcrypt = require('bcryptjs');
const User = require('../models/user');

const register = async (req, res) => {
	const { username, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({ username, password: hashedPassword });
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: 'Error registering user' });
	}
};

const login = (req, res) => {
	res.status(200).json(req.user);
};

const logout = (req, res) => {
	req.logout();
	res.status(200).json({ message: 'Logged out' });
};

module.exports = { register, login, logout };
