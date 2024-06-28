const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { findUserByUsername, findUserById } = require('../models/user');

passport.use(
	new LocalStrategy(async (username, password, done) => {
		const user = findUserByUsername(username);
		if (!user) {
			return done(null, false, { message: 'Incorrect username.' });
		}
		const match = await bcrypt.compare(password, user.password);
		if (!match) {
			return done(null, false, { message: 'Incorrect password.' });
		}
		return done(null, user);
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = findUserById(id);
	if (user) {
		done(null, user);
	} else {
		done(new Error('User not found'));
	}
});
