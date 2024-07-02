import React from 'react';
import { Link } from 'react-router-dom';

import bgHero from '../assets/bghero.jpg';
import hero from '../assets/hero.jpg';

import {
	BiHdd,
	BiBadgeCheck,
	BiCodeAlt,
	BiChevronRight,
	BiDollar,
} from 'react-icons/bi';
import { TbUserPentagon } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa';

function landing() {
	return (
		<div className="flex-auto sm:min-w-full min-w-md h-full pt-10 lg:pt-10">
			<section
				className="hero min-h-screen"
				style={{
					backgroundImage: 'url(' + bgHero + ')',
				}}
			>
				<div className="hero-overlay bg-opacity-80"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-xlg">
						<h1 className="mb-5 text-3xl lg:text-5xl font-bold">
							Welcome to UkotHost
						</h1>
						<p className="mb-5">
							Empower Your Digital Presence with Innovative Web
							Solutions
						</p>
						<div className="join">
							<input
								className="input join-item sm:min-w-full"
								placeholder="Email"
							/>
							<button className="btn join-item font-semibold">
								Sign Up
							</button>
						</div>
						<p className="text-slate-500 text-sm mt-4">
							By clicking Sign Up you're confirming that you agree
							with our Terms and Conditions.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full">
				<div className="flex-1 text-center p-4 mt-16 mb-16 sm:w-[50vw]">
					<h1 className="mb-4 font-bold">Innovative</h1>
					<h2 className="text-3xl lg:text-5xl font-bold mb-4">
						Discover Our Core Services and Solutions
					</h2>
					<p>
						We offer a range of cutting-edge web development,
						hosting, SEO, and marketing solutions to empower your
						online presence. Learn more about how we can help you
						achieve your digital goals.
					</p>
				</div>
				<div className="mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
						<div className="card">
							<div className="card-body">
								<BiCodeAlt className="text-5xl text-center sm:text-left min-w-full mb-4" />
								<h2 className="card-title">
									Web Development Services
								</h2>
								<p>
									Our team of expert developers creates
									stunning websites that are tailored to your
									unique needs and objectives.
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<BiHdd className="text-5xl text-center sm:text-left min-w-full mb-4" />
								<h2 className="card-title">
									Hosting Solutions
								</h2>
								<p>
									Experience reliable and secure hosting
									services that ensure your website is always
									up and running smoothly.
								</p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<BiBadgeCheck className="text-5xl text-center sm:text-left min-w-full mb-4" />
								<h2 className="card-title">
									SEO & Marketing Strategies
								</h2>
								<p>
									Boost your online visibility and drive more
									traffic to your website with our effective
									SEO and marketing strategies.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex sm:flex-row flex-col sm:gap-4 gap-2 sm:mt-2 sm:mb-4 mb-2">
					<Link to="/services" className="btn btn-squared mt-10">
						Learn More
					</Link>
					<Link to="/services" className="btn btn-ghost mt-10">
						Get Started
						<BiChevronRight className="text-3xl" />
					</Link>
				</div>
			</section>
			<section className="flex flex-col-reverse sm:flex sm:flex-row sm:mt-10 mt-96 items-center h-full">
				<div className="flex-auto text-start lg:px-8 md:mt-16 px-8 mb-8 sm:w-full">
					<h1 className="mb-4 font-bold">Unique</h1>
					<h2 className="text-3xl lg:text-5xl font-bold mb-4">
						Why Choose Us: Key Differentiators
					</h2>
					<p className="sm:mb-12 mb-8">
						With our expertise, customer-focused approach, and
						competitive pricing, we deliver cutting-edge web
						development and hosting solutions that empower your
						digital presence.
					</p>
					<ul className="flex flex-col gap-4 mt-4">
						<li className="flex flex-row gap-2 align-middle justify-start">
							<FaUserTie className="text-2xl" />
							Expertise
						</li>
						<li className="flex flex-row gap-2 align-middle justify-start">
							<TbUserPentagon className="text-2xl" />
							Customer Focus
						</li>
						<li className="flex flex-row gap-2 align-middle justify-start">
							<BiDollar className="text-2xl" />
							Competitive Pricing
						</li>
					</ul>
					<Link to="/services" className="btn btn-squared mt-10">
						Discover More
						<BiChevronRight className="text-3xl" />
					</Link>
				</div>
				<div className="flex-auto sm:w-[40vw] w-[60vw] mr-8">
					<img
						src={hero}
						alt="hero"
						className="w-[400px] mask mask-squircle"
					/>
				</div>
			</section>
			<section className="flex flex-col items-center w-full lg:p-8 gap-4">
				<div className="flex-auto w-full text-center p-4 sm:mt-12 lg:mt-0 sm:mb-12 sm:w-[50vw] lg:w-full">
					<h2 className="mt-4 sm:text-3xl text-2xl lg:text-5xl font-bold mb-4">
						Customer testimonials
					</h2>
					<p>See what our clients have to say</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 gap-x-4 gap-y-8 w-full">
					<div className="card border-2 sm:max-w-[350px] sm:max-h-[350px] overflow-hidden">
						<div className="card-body hover:bg-slate-100 rounded-md">
							<div className="rating mb-2">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									defaultChecked
								/>
							</div>
							<p className="mb-2">
								"Working with the Web Development and Hosting
								Agency has been a game-changer for our
								business."
							</p>
							<div className="avatar flex flex-row gap-4">
								<div className="flex-none w-12 h-12 rounded-full">
									<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
								<div className="flex-1">
									<h2 className="text-md font-bold">
										Jane Doe
									</h2>
									<p className="text-sm font-light">
										CEO, ABC Company
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="card border-2 max-w-[350px] max-h-[350px] overflow-hidden">
						<div className="card-body hover:bg-slate-100 rounded-md">
							<div className="rating mb-2">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									defaultChecked
								/>
							</div>
							<p className="mb-2">
								"Working with the Web Development and Hosting
								Agency has been a game-changer for our
								business."
							</p>
							<div className="avatar flex flex-row gap-4">
								<div className="flex-none w-12 h-12 rounded-full">
									<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
								<div className="flex-1">
									<h2 className="text-md font-bold">
										Jane Doe
									</h2>
									<p className="text-sm font-light">
										CEO, ABC Company
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="card border-2 max-w-[350px] max-h-[350px] overflow-hidden">
						<div className="card-body hover:bg-slate-100 rounded-md">
							<div className="rating mb-2">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									defaultChecked
								/>
							</div>
							<p className="mb-2">
								"Working with the Web Development and Hosting
								Agency has been a game-changer for our
								business."
							</p>
							<div className="avatar flex flex-row gap-4">
								<div className="flex-none w-12 h-12 rounded-full">
									<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
								<div className="flex-1">
									<h2 className="text-md font-bold">
										Jane Doe
									</h2>
									<p className="text-sm font-light">
										CEO, ABC Company
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="card border-2 max-w-[350px] max-h-[350px] overflow-hidden">
						<div className="card-body hover:bg-slate-100 rounded-md">
							<div className="rating mb-2">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-orange-400"
									defaultChecked
								/>
							</div>
							<p className="mb-2">
								"Working with the Web Development and Hosting
								Agency has been a game-changer for our
								business."
							</p>
							<div className="avatar flex flex-row gap-4">
								<div className="flex-none w-12 h-12 rounded-full">
									<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
								</div>
								<div className="flex-1">
									<h2 className="text-md font-bold">
										Jane Doe
									</h2>
									<p className="text-sm font-light">
										CEO, ABC Company
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default landing;
