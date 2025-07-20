import React from "react";
import { motion } from "framer-motion";

const RoadMap = () => {
	const phases = [
		{
			title: "Starting Point",
			items: ["Programming Fundamentals", "Basic Mathematics"],
			status: "completed",
		},
		{
			title: "Statistics",
			items: ["Descriptive Stats", "Probability", "Inferential Stats"],
			status: "completed",
		},
		{
			title: "Python",
			items: ["Pandas", "NumPy", "Data Cleaning"],
			status: "completed",
		},
		{
			title: "SQL",
			items: ["Queries", "Joins", "Database Design"],
			status: "completed",
		},
		{
			title: "Excel",
			items: ["Pivot Tables", "Formulas", "Data Analysis"],
			status: "completed",
		},
		{
			title: "Data Visualization",
			items: ["Matplotlib", "Seaborn", "Storytelling"],
			status: "current",
		},
		{
			title: "BI Tools",
			items: ["Power BI", "Tableau", "Dashboards"],
			status: "current",
		},
		{
			title: "GEN AI",
			items: ["Advanced ML", "NLP", "Generative AI"],
			status: "future",
		},
	];

	return (
		<>
			<section
				id="skills"
				className="relative container z-40 min-h-[40vh] border-t my-12 lg:my-24 border-[#25213b]"
			>
				<div
					className="absolute inset-0 backdrop-blur-sm"
					style={{
						maskImage:
							"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0) 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.45) 85%,rgba(0,0,0,0) 100%)",
					}}
				></div>
				<div className="h-[1px] relative bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full"></div>

				<div className="max-w-4xl mx-auto mt-14 border-[1px] relative border-[#4599ac] p-6 bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-xl  shadow-lg">
					<h2 className="text-2xl md:text-3xl z-41 font-bold text-center mb-8 text-cyan-400 relative">
						My Data Science Journey
					</h2>

					<div className="relative">
						{/* Cyber-style divider line */}
						<div className="absolute left-8 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-20"></div>
						<div className="absolute left-8 h-full w-0.5 border-l border-dashed border-cyan-400/50"></div>

						<div className="space-y-12 pl-16">
							{phases.map((phase, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									className="relative"
								>
									{/* Cyber node indicator */}
									<div
										className={`absolute -left-10 top-6 w-5 h-5 rounded-full flex items-center justify-center 
                ${
					phase.status === "completed"
						? "bg-green-500 ring-4 ring-green-500/20"
						: phase.status === "current"
						? "bg-cyan-400 ring-4 ring-cyan-400/30 pulse-animate"
						: "bg-purple-500/30 ring-4 ring-purple-500/10"
				}`}
									>
										{phase.status === "completed" && (
											<svg
												className="w-3 h-3 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={3}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										)}
										{phase.status === "current" && (
											<div className="w-2 h-2 bg-white rounded-full"></div>
										)}
									</div>

									{/* Cyber-themed phase card */}
									<div
										className={`p-6 rounded-lg border ${
											phase.status === "current"
												? "border-cyan-400/50 bg-cyan-900/10"
												: "border-gray-700"
										} 
                ${phase.status === "completed" ? "bg-green-900/5" : ""} 
                ${phase.status === "future" ? "bg-purple-900/5" : ""}`}
									>
										<h3
											className={`text-xl font-mono font-semibold mb-3 ${
												phase.status === "current"
													? "text-cyan-400"
													: "text-white"
											}`}
										>
											{phase.title}
											{phase.status === "current" && (
												<span className="ml-3 px-2 py-1 text-xs bg-cyan-400/20 text-cyan-300 rounded-full font-sans">
													CURRENT FOCUS
												</span>
											)}
										</h3>

										<div className="border-t border-gray-700 pt-3">
											<ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
												{phase.items.map((item, itemIndex) => (
													<li
														key={itemIndex}
														className="flex items-start"
													>
														<span
															className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 
                          ${
								phase.status === "completed"
									? "bg-green-400"
									: phase.status === "current"
									? "bg-cyan-400"
									: "bg-purple-400"
							}`}
														></span>
														<span className="text-gray-300 text-sm">
															{item}
														</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<style>{`
						.pulse-animate {
							animation: pulse 2s infinite;
						}
						@keyframes pulse {
							0% {
								transform: scale(1);
							}
							50% {
								transform: scale(1.1);
							}
							100% {
								transform: scale(1);
							}
						}
					`}</style>
				</div>
			</section>
		</>
	);
};

export default RoadMap;
