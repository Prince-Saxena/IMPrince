import React, { useRef } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Experience = () => {
	const experiences = [
		{
			role: "Data Science Intern",
			company: "Hackveda",
			period: "JUL 2025 - Current",
			description: [
				"Applying machine learning techniques to solve real-world data problems",
				"Working with large datasets to extract meaningful insights",
				"Developing predictive models and data visualizations",
				"Collaborating with team members on AI/ML projects",
			],
			skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
		},
	];

	return (
		<section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex justify-start mb-12 lg:mb-16 relative">
					<div className="flex items-center w-full">
						{/* Left gradient line (extended to edge of container) */}
						<span className="flex-1 h-[1px] bg-gradient-to-l from-[#16f2b3] via-[#16f2b3]/70 to-transparent ml-2 md:ml-4"></span>

						{/* Project title with glow effect */}
						<span className="bg-[#0d1224] border border-[#16f2b3]/50 w-fit text-white p-2 px-6 font-mono text-xl md:text-2xl rounded-md mx-2 md:mx-4 relative group">
							<span className="absolute inset-0 rounded-md bg-[#16f2b3] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
							Experience
						</span>

						{/* Right gradient line (full width) */}
						{/* <span className="flex-1 h-[1px] bg-gradient-to-r from-[#16f2b3] via-[#16f2b3]/70 to-transparent ml-2 md:ml-4"></span> */}
					</div>

					{/* Floating accent dot */}
					{/* <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#16f2b3] rounded-full opacity-0 md:opacity-100"></div> */}
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					{/* Lottie Animation - Now larger */}
					<div className="w-full lg:w-1/2 flex justify-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
						>
							<DotLottieReact
								src="./Laptop.lottie"
								loop
								autoplay
								className="w-full h-full max-w-[500px] scale-180  hover:scale-200 transition-transform duration-300"
							/>
						</motion.div>
					</div>

					{/* Experience Card */}
					<div className="w-full lg:w-1/2">
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-[#0a0d37]/70 backdrop-blur-sm border border-[#1b2c68]/50 rounded-xl p-6 md:p-8 hover:shadow-[0_0_15px_-3px_rgba(22,242,179,0.2)] transition-all duration-300 group h-full"
						>
							{/* Rest of your card content remains the same */}
							<div className="flex flex-col h-full">
								<div className="flex items-center gap-4 mb-4">
									<div className="p-3 bg-[#16f2b3]/10 border border-[#16f2b3]/30 rounded-full text-[#16f2b3]">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth="0"
											viewBox="0 0 24 24"
											height="24"
											width="24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
										</svg>
									</div>
									<span className="text-xs text-pink-400/80 bg-pink-400/10 px-3 py-1 rounded-full">
										{experiences[0].period}
									</span>
								</div>

								<h3 className="text-xl font-semibold text-[#16f2b3] mb-1 group-hover:text-white transition-colors">
									{experiences[0].role}
								</h3>
								<p className="text-lg text-gray-300/90 mb-4">
									{experiences[0].company}
								</p>

								<ul className="space-y-3 mb-6">
									{experiences[0].description.map((item, index) => (
										<motion.li
											key={index}
											className="flex items-start"
											whilehover={{ x: 5 }}
										>
											<span className="text-[#16f2b3] mr-2 mt-1">▹</span>
											<span className="text-sm text-gray-300/90">{item}</span>
										</motion.li>
									))}
								</ul>

								{/* Skills */}
								<div className="mt-auto">
									<h4 className="text-sm text-gray-400 mb-2">
										Technologies Used:
									</h4>
									<div className="flex flex-wrap gap-2">
										{experiences[0].skills.map((skill, index) => (
											<motion.span
												key={index}
												className="text-xs text-[#16f2b3] bg-[#16f2b3]/10 px-3 py-1 rounded-full"
												whilehover={{ scale: 1.05 }}
											>
												{skill}
											</motion.span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
