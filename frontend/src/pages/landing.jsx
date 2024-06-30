import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import serverImg from '../assets/Server.jpg';
import featuresImg from '../assets/m-black.png';

function landing() {
	return (
		<div className="overflow-x-auto flex flex-col w-screen h-screen">
			<section className="flex flex-col w-full h-[100vh] p-8 bg-blue-950">
				<div className="flex flex-col items-center mt-64 my-auto gap-4 h-screen">
					<h1 className="font-bold text-4xl text-white">
						Welcome to Ukothost
					</h1>
					<p className="font-semibold text-white text-xl">
						Ukothost is the best a web development and Hosting
						Agency in South Sudan
					</p>
					<div className="flex flex-row items-center gap-4">
						<Link
							to={'/blog'}
							className="w-[100px] h-[35px] py-1 rounded-md text-center bg-white hover:bg-slate-100 text-blue-950 font-bold"
						>
							Learn More
						</Link>
						<Link
							to={'/blog'}
							className="w-[100px] h-[35px] py-1 rounded-md text-center bg-white hover:bg-slate-100 text-blue-950 font-bold"
						>
							Get trial
						</Link>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-white">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-blue-950 font-bold">
						About Us
					</h1>
					<p className="text-1xl font-bold text-blue-800">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>

				<div className="flex flex-row gap-28 w-full mb-8">
					<img
						src={serverImg}
						alt="Server Connection image"
						width={300}
						className="bg-cover flex-none p-4"
					/>
					<div className="flex-1 text-blue-950 flex flex-col gap-4">
						<h1 className="text-xl font-bold mb-4">What we do?</h1>
						<div className="flex flex-row gap-4">
							<img src={featuresImg} alt="features" />
							<div>
								<h2 className="font-bold">Web Development</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<img src={featuresImg} alt="features" />
							<div>
								<h2 className="font-bold">Web Hosting</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<img src={featuresImg} alt="features" />
							<div>
								<h2 className="font-bold">
									Search Engine Optimization (SEO)
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<img src={featuresImg} alt="features" />
							<div>
								<h2 className="font-bold">
									Social Media Management
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-blue-950">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-white font-bold">Services</h1>
					<p className="text-1xl font-bold text-white">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<div className="flex flex-col sm:flex sm:flex-row justify-between gap-4 mb-24 w-full h-screen">
					<div className="w-[300px] h-[300px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="w-[300px] h-[300px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="w-[300px] h-[300px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="w-[300px] h-[300px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[50vh] p-8 bg-white">
				<div className="flex flex-row justify-between w-full h-full mb-8 gap-4">
					<div className="flex flex-col items-center gap-4 w-[100px] h-[100px]">
						<h1 className="text-3xl font-bold text-blue-950">
							644+
						</h1>
						<img src={featuresImg} alt="features" />
					</div>
					<div className="flex flex-col items-center gap-4 w-[100px] h-[100px]">
						<h1 className="text-3xl font-bold text-blue-950">
							99.9%
						</h1>
						<img src={featuresImg} alt="features" />
					</div>
					<div className="flex flex-col items-center gap-4 w-[100px] h-[100px]">
						<h1 className="text-3xl font-bold text-blue-950">
							764k
						</h1>
						<img src={featuresImg} alt="features" />
					</div>
					<div className="flex flex-col items-center gap-4 w-[100px] h-[100px]">
						<h1 className="text-3xl font-bold text-blue-950">
							460
						</h1>
						<img src={featuresImg} alt="features" />
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-full p-4 bg-blue-950">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-white font-bold">Portfolio</h1>
					<p className="text-1xl font-bold text-white">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<div className="sm:grid sm:grid-cols-4 py-16 gap-4 w-full h-full">
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-white">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-blue-950 font-bold">
						Testimonials
					</h1>
					<p className="text-1xl font-bold text-blue-950">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<div className="sm:grid sm:grid-cols-3 py-8 gap-4 w-full h-screen">
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-blue-950">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-white font-bold">News</h1>
					<p className="text-1xl font-bold text-white">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<div className="sm:grid sm:grid-cols-3 py-8 gap-4 w-full h-screen">
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-white">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-blue-950 font-bold">
						Get In touch
					</h1>
					<p className="text-1xl font-bold text-blue-950">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<form className="flex flex-col justify-between w-[50vw] h-[50vh] bg-blue-950 rounded-md shadow-sm p-4">
					<div className="flex flex-row justify-between gap-4 w-full">
						<input
							type="text"
							id="firstname"
							placeholder="First name"
							className="w-[50%] h-8 pl-4 rounded-md outline-none"
						/>
						<input
							type="text"
							id="lastname"
							placeholder="Last name"
							className="w-[50%] h-8 pl-4 rounded-md outline-none"
						/>
					</div>
					<input
						type="email"
						id="email"
						placeholder="Email Address"
						className="w-full h-8 pl-4 rounded-md outline-none"
					/>
					<textarea
						type="text"
						id="message"
						placeholder="Enter message..."
						className="w-full h-[200px] p-4 rounded-md outline-none"
					/>
					<button className="w-full h-8 rounded-md text-blue-950 font-bold bg-white hover:bg-slate-200">
						Send
					</button>
				</form>
			</section>
			<section className="flex flex-col items-center w-full h-[100vh] p-8 bg-blue-950">
				<div className="flex flex-col items-center mb-4">
					<h1 className="text-3xl text-white font-bold">Our Team</h1>
					<p className="text-1xl font-bold text-white">
						We are dedicated to Server and protect your web
						infrastrucure
					</p>
				</div>
				<div className="sm:grid sm:grid-cols-3 py-8 gap-4 w-full h-screen">
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
					<div className="col-span-1 w-[300px] h-[400px] bg-slate-400 rounded-md hover:bg-slate-300 transition duration-200"></div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

const heroSection = ({ title, paragraph, buttons }) => (
	<section className="w-full sm:h-[100vh] h-[50vh] flex flex-col bg-blue-800 sm:p-8 p-4">
		<div className="flex flex-col">
			<h1 className="text-center text-4xl text-slate-200">{title}</h1>
			<p>{paragraph}</p>
		</div>
		<div>{buttons}</div>
	</section>
);

const sectionTitle = ({ title, paragraph }) => (
	<div>
		<h2>{title}</h2>
		<p>{paragraph}</p>
	</div>
);

const Section = ({ title, paragraph, Content }) => (
	<section>
		<div>
			<h2>{title}</h2>
			<p>{paragraph}</p>
		</div>
		<div>{Content}</div>
	</section>
);

const Button = ({ text }) => <Button>{text}</Button>;

export default landing;
