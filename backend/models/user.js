const bcrypt = require('bcryptjs');

let users = [];

const findUserByUsername = (username) =>
	users.find((user) => user.username === username);

const findUserById = (id) => users.find((user) => user.id === id);

const addUser = async (username, password) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = {
		id: Date.now().toString(),
		username,
		password: hashedPassword,
	};
	users.push(user);
	return user;
};

module.exports = { findUserByUsername, findUserById, addUser };
