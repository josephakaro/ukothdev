const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user');

passport.use(
	new LocalStrategy(async (username, password, done) => {
		try {
			const user = await User.findOne({ where: { username } });
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		} catch (err) {
			return done(err);
		}
	})
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findByPk(id);
		if (user) {
			done(null, user);
		} else {
			done(new Error('User not found'));
		}
	} catch (err) {
		done(err);
	}
});
