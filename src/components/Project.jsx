import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
	const projects = [
		{
			title: "Taxi Trip Data Analysis",
			description:
				"Performed end-to-end analysis on NYC taxi trip data by cleaning, engineering features, and visualizing patterns to identify statistically significant differences in payment-based passenger behavior.",
			technologies: ["Python", "Pandas", "Seaborn", "SciPy", "Statsmodels"],
			githubLink: "https://github.com/Prince-Saxena/Taxi-Trip-Data-Analysis",
			// Add if available: githubLink: "#", liveLink: "#"
		},
		{
			title: "Movie Recommendation System",
			description:
				"Developed a content-based recommender using TF-IDF and cosine similarity, deployed with an interactive Streamlit interface.",
			technologies: ["Python", "Pandas", "scikit-learn", "Streamlit"],
			githubLink: "https://github.com/Prince-Saxena/Movie-Suggestion-Streamlit-App",
		},
		{
			title: "Vendor Sales Performance Analysis",
			description:
				"Analyzed real-world vendor sales data and built interactive Power BI dashboards to visualize KPIs and uncover actionable sales insights.",
			technologies: ["Power BI", "Excel", "Python"],
		},
		{
			title: "Sentiment Analysis on Product Reviews",
			description:
				"Built a machine learning model to classify product reviews into positive/negative categories using NLP techniques and Logistic Regression.",
			technologies: ["Python", "NLP", "scikit-learn", "NLTK"],
		},
	];

	return (
		<section id="project" className="pb-12 px-4 sm:px-6 lg:px-8 text-white">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex justify-start mb-12 lg:mb-16 relative">
					<div className="flex items-center w-full">
						{/* Left gradient line (extended to edge of container) */}
						{/* <span className="hidden md:block w-16 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-[#16f2b3]"></span> */}

						{/* Project title with glow effect */}
						<span className="bg-[#0d1224] border border-[#16f2b3]/50 w-fit text-white p-2 px-6 font-mono text-xl md:text-2xl rounded-md mx-2 md:mx-4 relative group">
							<span className="absolute inset-0 rounded-md bg-[#16f2b3] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
							Projects
						</span>

						{/* Right gradient line (full width) */}
						<span className="flex-1 h-[1px] bg-gradient-to-r from-[#16f2b3] via-[#16f2b3]/70 to-transparent ml-2 md:ml-4"></span>
					</div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d1224] to-[#0a0d37]"
						>
							<div className="flex flex-row">
								<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
								<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
							</div>
							<div className="px-4 lg:px-8 py-3 ">
								<div className="flex flex-row space-x-2">
									<div className="h-3 w-3 rounded-full bg-red-400"></div>
									<div className="h-3 w-3 rounded-full bg-orange-400"></div>
									<div className="h-3 w-3 rounded-full bg-green-200"></div>
								</div>
							</div>
							<div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative h-full 0 backdrop-blur-sm border-t-[1px] border-t-[#1b2c68] p-6  transition-all duration-300">
								<h3 className="text-xl font-semibold text-[#16f2b3] mb-2">
									{project.title}
								</h3>
								<p className="text-gray-300/90 mb-4 text-sm">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="mb-4">
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech, i) => (
											<span
												key={i}
												className="text-xs text-[#16f2b3] bg-[#16f2b3]/10 px-3 py-1 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Links - Add your actual links when available */}
								<div className="flex gap-3 mt-auto pt-2">
									{project.githubLink && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-sm text-gray-200 hover:text-pink-300 transition-colors"
										>
											<FaGithub className="mr-1" /> Code
										</a>
									)}
									{project.liveLink && (
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-sm text-[#16f2b3] hover:text-[#16f2b3]/80 transition-colors"
										>
											<FaExternalLinkAlt className="mr-1" /> Live Demo
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
