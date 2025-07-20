import { a } from "framer-motion/m";
import React from "react";
import { motion } from "framer-motion";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Hero() {
	const handleScroll = (e, targetId) => {
		e.preventDefault();
		document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
	};
	const coder = {
		name: "PRINCE SAXENA",
		title: "Aspiring Data Analyst || AI/ML Enthusiast",
		location: "Aligarh, Uttar Pradesh, India",
		education: "B.Tech in Computer Science & Engineering (Pursuing)",
		focus: `Data Analytics || AI/ML`,
		projects: [
			"Sales Data Dashboard",
			"Customer Churn Prediction",
			"COVID-19 Data Analysis",
			"IPL Match Insights",
			"Text Sentiment Analyzer",
			"Chatbot using LangChain",
		],
		hireable: true,
	};

	return (
		<section className="relative font-magnolia-bold" id="home">
			<div className="relative z-10 mx-auto px-2 sm:px-4 pt-20 md:pt-0 lg:px-6 xl:px-16 py-8 md:py-0">
				<div className="flex flex-col md:flex-row items-center justify-between min-h-[75vh] md:min-h-screen w-full max-w-7xl mx-auto gap-8">
					{/* Text Content - Takes more space on larger screens */}
					<div className="w-full md:w-1/3 lg:w-5/12 order-2 md:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
						<h1 className="text-3xl my-12 font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
							Hello, <br />
							I'm <span className="text-pink-500">PRINCE SAXENA </span>, Aspiring
							<span className="text-[#16f2b3]"> Data Analyst</span>
						</h1>

						{/* <div className="my-12 h-3/5 flex items-center gap-5">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Prince-Saxena"
								className="transition-all border border-[#333] p-2 rounded-full text-white hover:scale-125 duration-300"
							>
								<FaGithub />
							</a>

							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/prince-saxena1/"
								className="transition-all border border-[#0077b5] p-2 rounded-full text-[#0077b5] hover:scale-125 duration-300"
							>
								<FaLinkedinIn />
							</a>

							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.instagram.com/blooming_techie/"
								className="transition-all border border-[#FFA116] p-2 rounded-full text-[#FFA116] hover:scale-125 duration-300"
							>
								<FaInstagram />
							</a>

							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://x.com/saxena_pri37542"
								className="transition-all border border-[#1DA1F2] p-2 rounded-full text-[#1DA1F2] hover:scale-125 duration-300"
							>
								<FaTwitter />
							</a>
						</div> */}
						<div className="flex h-2/5 flex-wrap items-center gap-3">
							{/* Contact Me Button */}
							<motion.a
								href="#contact"
								className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full"
								whilehover={{ scale: 1.05 }}
								whiletap={{ scale: 0.95 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								<button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white uppercase tracking-wider font-medium md:font-semibold flex items-center gap-1 group">
									<span className="transition-all duration-300 group-hover:translate-x-1">
										Contact me
									</span>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 24 24"
										height="24"
										width="24"
										className="transition-all duration-300 transform group-hover:translate-x-1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M10 17l5-5-5-5v10z"></path>
									</svg>
								</button>
							</motion.a>

							{/* Get Resume Button */}
							<motion.a
								target="_blank"
								rel="noopener noreferrer"
								href="https://drive.google.com/file/d/1CUPNKa6nxD3zp0JUb3vUzNBjPjOTw3Sr/view?usp=sharing"
								className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white"
								whilehover={{ scale: 1.05 }}
								whiletap={{ scale: 0.95 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								<span className="flex items-center gap-1 group">
									<span className="transition-all duration-300 group-hover:translate-x-1">
										Get Resume
									</span>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 24 24"
										height="16"
										width="16"
										className="transition-all duration-300 transform group-hover:translate-x-1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
									</svg>
								</span>
								<span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
							</motion.a>
						</div>
					</div>

					{/* Info Card - Fixed width that won't shrink other elements */}
					<div className="w-full md:w-3/5 lg:w-7/12 order-1 md:order-2 from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37]">
						<div className="flex flex-row">
							<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
							<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
						</div>
						<div className="px-4 lg:px-8 py-5">
							<div className="flex flex-row space-x-2">
								<div className="h-3 w-3 rounded-full bg-red-500"></div>
								<div className="h-3 w-3 rounded-full bg-orange-400"></div>
								<div className="h-3 w-3 rounded-full bg-green-400"></div>
							</div>
						</div>
						<div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
							<pre className="font-mono text-xs md:text-sm lg:text-base text-white overflow-x-auto">
								<div className="font-mono text-xs md:text-sm lg:text-base text-white whitespace-pre-wrap break-words w-full max-w-full">
									<div>
										<span className="text-white">const </span>
										<span className="text-blue-300">coder</span>
										<span className="text-white"> = {"{"}</span>
									</div>
									{Object.entries(coder).map(([key, value]) => (
										<div key={key} className="ml-8 mb-1">
											<span className="text-pink-400">"{key}"</span>
											<span className="text-white">: </span>
											{Array.isArray(value) ? (
												<>
													<span className="text-white">[</span>
													<div className="ml-8">
														{value.map((item, i) => (
															<div key={i}>
																<span className="text-green-400">
																	"{item}"
																</span>
																<span className="text-white">
																	{i < value.length - 1
																		? ","
																		: ""}
																</span>
															</div>
														))}
													</div>
													<span className="text-white">],</span>
												</>
											) : typeof value === "string" ? (
												<span className="text-yellow-300">"{value}",</span>
											) : typeof value === "boolean" ? (
												<span className="text-purple-400">
													{value.toString()},
												</span>
											) : (
												<span className="text-blue-300">{value},</span>
											)}
										</div>
									))}
									<div>{"};"}</div>
								</div>
							</pre>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
