import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="flex-1 flex flex-row w-full sm:max-h-[100px] gap-4 p-4 bg-white text-blue-950 justify-center text-xl shadow-2xl fixed top-0 left-0">
			<div className="flex-1 font-bold">
				<Link to={'/'}>UKOTHOST</Link>
			</div>

			<ul className="list-none flex flex-row flex-end mr-32 gap-4 font-semibold">
				<li className="hover:text-blue-500">
					<Link to={'/'}>Home</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>About</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Services</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Portfolio</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Reviews</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Team</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Contact</Link>
				</li>
				<li className="hover:text-blue-500">
					<Link to={'/'}>Blog</Link>
				</li>
			</ul>
			<Link
				to={'/register'}
				className="w-[100px] h-[35px] border-2 border-blue-950 rounded-md p-x-2 p-y-2 bg-white text-blue-950 transition duration-100 flex-none text-center"
			>
				Sign Up
			</Link>
			<Link
				to={'/login'}
				className="w-[100px] h-[35px] border-2 border-blue-950 rounded-md p-x-2 p-y-2 bg-blue-950 text-white transition duration-100 flex-none text-center"
			>
				Log In
			</Link>
		</nav>
	);
};

export default Navbar;
