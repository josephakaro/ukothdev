const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');

dotenv.config();

const app = express();

require('./config/passport');

app.use(
	cors({
		origin: 'http://127.0.0.1:5173', // Ensure this matches your frontend URL
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/auth'));
app.use('/digitalocean', require('./routes/digitaloceanRoute'));

sequelize
	.sync()
	.then(() => {
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', error);
	});
