import React from 'react';
import { Link } from 'react-router-dom';

import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
	return (
		<nav className="flex-none min-w-full min-h-[50px] navbar bg-base-100 fixed top-0 left-0 z-[1] shadow-lg">
			<div className="navbar-start">
				<div className="dropdown">
					{/** Hidden Navigation on large screen, shown in small screen */}
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost text-2xl lg:hidden"
					>
						<BiMenu />
					</div>
					{/** List show on click on md-xsm */}
					<ul
						tabIndex={0}
						className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
					>
						<li>
							<Link to={'/About'}>About Us</Link>
						</li>
						<li>
							<Link to={'/services'}>Services</Link>
						</li>
						<li>
							<Link to={'/testimonial'}>Testimonial</Link>
						</li>
						<li>
							<a>More</a>
							<ul className="p-2">
								<li>
									<Link to={'/web-development'}>
										Web Development
									</Link>
								</li>
								<li>
									<Link to={'/hosting'}>Hosting</Link>
								</li>
								<li>
									<Link to={'/seo'}>SEO</Link>
								</li>
								<li>
									<Link to={'/marketing'}>Marketing</Link>
								</li>
							</ul>
						</li>
						<div className="flex flex-col gap-4 p-4 sm:hidden">
							<Link
								to={'/login'}
								className="btn btn-ghost border-slate-300 text-md font-bold"
							>
								Log In
							</Link>
							<Link
								to={'/register'}
								className="btn btn-ghost text-base-content border-slate-300 bg-slate-300 text-md font-bold"
							>
								Sign Up
							</Link>
						</div>
					</ul>
				</div>
				<Link to={'/'} className="btn btn-ghost text-xl font-bold">
					UKOTHOST
				</Link>
			</div>
			<div className="navbar-center">
				<ul className="menu menu-horizontal px-1 text-xl font-semibold">
					<li>
						<Link to={'/about'}>About Us</Link>
					</li>
					<li>
						<details>
							<summary>Services</summary>
							<ul className="p-2">
								<li className="w-56">
									<Link to={'/web-development'}>
										Web Development
									</Link>
								</li>
								<li>
									<Link to={'hosting'}>Hosting</Link>
								</li>
								<li>
									<Link to={'/seo'}>SEO</Link>
								</li>
								<li>
									<Link to={'/marketing'}>Marketing</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to={'/testimonial'}>Testimonials</Link>
					</li>
					<li>
						<Link to={'/portfolio'}>Portfolio</Link>
					</li>
					<li>
						<Link to={'/pricing'}>Pricing</Link>
					</li>
				</ul>
			</div>
			<div className="sm:navbar-end sm:mr-4 hidden sm:flex sm:flex-row sm:gap-4">
				<Link
					to={'/login'}
					className="btn btn-ghost border-slate-300 text-md font-bold"
				>
					Log In
				</Link>
				<Link
					to={'/register'}
					className="btn btn-ghost text-base-content border-slate-300 bg-slate-300 text-md font-bold"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
