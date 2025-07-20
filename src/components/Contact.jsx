import React from "react";
import { motion } from "framer-motion";
import {
	FiMail,
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiSend,
	FiMessageSquare,
	FiInstagram,
} from "react-icons/fi";

const Contact = () => {
	return (
		<section
			id="contact"
			className="relative border-t backdrop-blur-[3px] border-[#25213b] pt-16 lg:pt-24 overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						x: [0, 100, 0],
						y: [0, 50, 0],
						transition: { duration: 20, repeat: Infinity, ease: "linear" },
					}}
					className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
				></motion.div>
				<motion.div
					animate={{
						x: [0, -80, 0],
						y: [0, -30, 0],
						transition: { duration: 25, repeat: Infinity, ease: "linear" },
					}}
					className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"
				></motion.div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Contact header with animated underline */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
						Get In Touch
					</h2>
					<div className="flex justify-center">
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: "200px" }}
							transition={{ delay: 0.3, duration: 1 }}
							className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
						></motion.div>
					</div>
					<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-6">
						Have a project in mind or want to collaborate? Feel free to reach out!
					</p>
				</motion.div>

				{/* Contact cards grid with staggered animation */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Email card with floating animation */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						whilehover={{ y: -10 }}
						className="bg-gradient-to-br from-[#0d1224]/90 to-[#0a0d37]/90 border border-[#1b2c68a0] rounded-2xl p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
					>
						<div className="flex items-center mb-6">
							<motion.div
								animate={{
									rotate: [0, 10, -10, 0],
									transition: { duration: 5, repeat: Infinity },
								}}
								className="p-3 bg-cyan-900/20 rounded-lg border border-cyan-400/30 mr-4"
							>
								<FiMail className="text-cyan-400 text-2xl" />
							</motion.div>
							<h3 className="text-2xl font-semibold text-white">Email Me</h3>
						</div>
						<p className="text-gray-400 mb-8 text-lg">
							Send me a message and I'll get back to you within 24 hours.
						</p>
						<motion.a
							whilehover={{ scale: 1.05 }}
							whiletap={{ scale: 0.95 }}
							href="mailto:princesaxena202020@gmail.com"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
						>
							<FiSend className="mr-3 text-lg group-hover:animate-bounce" />
							<span className="text-lg">Send Email</span>
						</motion.a>
					</motion.div>

					{/* Social links card with interactive icons */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						whilehover={{ y: -10 }}
						className="bg-gradient-to-br from-[#0d1224]/90 to-[#0a0d37]/90 border border-[#1b2c68a0] rounded-2xl p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
					>
						<div className="flex items-center mb-6">
							<motion.div
								animate={{
									rotate: [0, 10, -10, 0],
									transition: { duration: 5, repeat: Infinity },
								}}
								className="p-3 bg-purple-900/20 rounded-lg border border-purple-400/30 mr-4"
							>
								<FiMessageSquare className="text-purple-400 text-2xl" />
							</motion.div>
							<h3 className="text-2xl font-semibold text-white">Connect With Me</h3>
						</div>
						<p className="text-gray-400 mb-8 text-lg">
							Find me on these platforms for more updates and networking.
						</p>
						<div className="flex flex-wrap gap-4">
							{[
								{
									icon: <FiGithub />,
									label: "GitHub",
									color: "gray",
									url: "https://github.com/Prince-Saxena",
								},
								{
									icon: <FiLinkedin />,
									label: "LinkedIn",
									color: "blue",
									url: "https://www.linkedin.com/in/prince-saxena1/",
								},
								{
									icon: <FiInstagram />,
									label: "Instagram",
									color: "pink",
									url: "https://www.instagram.com/blooming_techie/",
								},
							].map((social, index) => (
								<motion.a
									key={index}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6 + index * 0.1 }}
									whilehover={{ y: -5, scale: 1.05 }}
									whiletap={{ scale: 0.95 }}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`p-4 bg-gray-800 hover:bg-${social.color}-600 rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-${social.color}-500/30`}
									aria-label={social.label}
								>
									<span
										className={`text-xl`}
										style={{ color: `${social.color}` }}
									>
										{social.icon}
									</span>
									<span className="text-gray-300">{social.label}</span>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Enhanced footer with wave divider */}
			<div className="mx-auto px-6 sm:px-12 mt-8 bg-gradient-to-br from-[#0d1224]/90 to-[#0a0d37]/90 border-t border-[#8a9cdea0] py-6 lg:py-10">
				{/* Top gradient line */}
				<div className="flex justify-center -z-40">
					<div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-400">
						© Developed by{" "}
						<a
							href="https://www.linkedin.com/in/prince_saxena1/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#16f2b3]"
						>
							Prince S.
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
