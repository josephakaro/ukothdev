import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className=" bg-blue-950 h-[50vh] w-full p-4 text-white border-t-2 border-t-blue-100">
			<nav className="flex flex-row gap-8">
				<div className="flex-start w-[300px]">
					<Link to={'/'} className="text-xl font-bold mb-4">
						UKOTHOST
					</Link>
					<p className="text-wrap">
						Ukothost is the best web development and hosting agency
						in south sudan
					</p>
				</div>
				<ul className="flex-auto">
					<span className="text-2xl font-bold">Services</span>
					<li>
						<Link>Home</Link>
					</li>
					<li>
						<Link>About</Link>
					</li>
					<li>
						<Link>Conact</Link>
					</li>
					<li>
						<Link>Blog</Link>
					</li>
				</ul>

				<ul className="flex-auto">
					<span className="text-2xl font-bold">Company</span>
					<li>
						<Link>About Us</Link>
					</li>
					<li>
						<Link>Team</Link>
					</li>
					<li>
						<Link>Testimonial</Link>
					</li>
					<li>
						<Link>Blog</Link>
					</li>
				</ul>

				<div className="flex-end flex flex-col gap-1">
					<h1 className="text-2xl font-bold">Contact</h1>
					<p>Gudele one block 8, Juba South Sudan</p>
					<p>+211920710777</p>
					<p>info@ukothost.com</p>
				</div>
			</nav>
			<div className="mt-24 flex flex-row">
				<div className="flex flex-row gap-4 flex-auto">
					<a href={'facebook.com'}>Facebook</a>
					<a href={'instagram.com'}>Instagram</a>
					<a href={'x.com'}>Twitter</a>
					<a href={'linkendin.com'}>LinkendIn</a>
				</div>
				<span>Copyright&copy;2024 UKOTHOST. All right reservered.</span>
			</div>
		</footer>
	);
}
export default Footer;
