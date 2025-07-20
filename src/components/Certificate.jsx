import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
	{
		title: "ReactJS Bootcamp",
		issuer: "LetsUpgrade",
		date: "Apr 2025",
		description:
			"Built scalable web applications using React, managing state, hooks, and component lifecycles for production-level interfaces.",
		link: "https://www.linkedin.com/posts/prince-saxena1_certificate-activity-7321912729064120321-UmDv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
	{
		title: "Frontend Developer(ReactJS)",
		issuer: "HackerRank",
		date: "Nov 2024",
		description:
			"Certified in frontend development with React, mastering UI building, routing, and responsive layout techniques.",
		link: "https://www.linkedin.com/posts/prince-saxena1_im-happy-to-share-that-ive-obtained-a-new-activity-7284779475131621377-UTYb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
	{
		title: "Web Development Bootcamp",
		issuer: "IBM SkillsBuild",
		date: "Jan 2025",
		description:
			"Completed a bootcamp focused on full-stack fundamentals including HTML, CSS, JavaScript, and responsive design principles.",
		link: "https://www.linkedin.com/posts/prince-saxena1_webdevelopment-ibm-certification-activity-7303269161898549248-FJat?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
	{
		title: "ReactJs",
		issuer: "HackerRank",
		date: "Feb 2024",
		description:
			"Demonstrated proficiency in building responsive React components, handling props, states, and managing events.",
		link: "https://www.linkedin.com/posts/prince-saxena1_i-am-thrilled-to-announce-that-i-have-activity-7238162002328584192-0N57?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
	{
		title: "Prompt Engineering for ChatGPT",
		issuer: "Great Learning",
		date: "Sep 2024",
		description:
			"Learned how to design effective prompts for ChatGPT to improve accuracy, creativity, and task-specific responses.",
		link: "https://www.linkedin.com/posts/prince-saxena1_prompt-engineering-for-chatgpt-course-completion-activity-7236563814937223168-wgob?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
	{
		title: "Virtual Internship in Web Development",
		issuer: "System Tron",
		date: "Jan 2024",
		description:
			"Worked on web-based mini projects applying HTML, CSS, and JavaScript with a focus on layout design and interactivity.",
		link: "https://www.linkedin.com/posts/prince-saxena1_webdevelopment-internship-learning-activity-7292413500851683331-_J8o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQqJSoBH9EMdD8jZfdwg5eTIS_OlEkbb2I",
	},
];

const Certificate = () => {
	const secRef = useRef(null);

	useEffect(() => {
		// ... (keep your existing GSAP animations)
	}, []);

	return (
		<section
			className="py-12 px-4 sm:px-6 lg:px-8 text-white"
			ref={secRef}
			id="certifications"
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex justify-center my-8 lg:my-12">
					<div className="flex items-center">
						<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
						<span className="bg-[#0d1224] border border-[#16f2b3]/50 w-fit text-white p-2 px-6 font-mono text-xl md:text-2xl rounded-md mx-4">
							Certifications
						</span>
						<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
					</div>
				</div>

				{/* Certificates Grid */}
				<div className="cert-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{certifications.map((cert, i) => (
						<div className="cert-card group relative" key={i}>
							<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/30 to-violet-600/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative h-full bg-[#0a0d37]/70 backdrop-blur-sm border border-[#1b2c68]/50 rounded-xl p-6 transition-all duration-300 group-hover:border-[#16f2b3]/30 hover:shadow-[0_0_15px_-3px_rgba(22,242,179,0.2)]">
								<div className="flex flex-col h-full">
									<div className="flex-grow">
										<h3 className="text-lg font-semibold text-[#16f2b3] mb-1">
											{cert.title}
										</h3>
										<div className="flex justify-between items-center mb-3">
											<p className="text-sm text-pink-400/80">
												{cert.issuer}
											</p>
											<p className="text-xs text-gray-400/80">{cert.date}</p>
										</div>
										<p className="text-sm text-gray-300/90 mb-4">
											{cert.description}
										</p>
									</div>

									{cert.link && (
										<a
											href={cert.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-xs text-pink-400/80 hover:text-pink-300 transition-colors duration-200 mt-auto group/link"
										>
											<span className="group-hover/link:underline">
												View Credential
											</span>
											<FaExternalLinkAlt className="ml-2 text-[0.7rem]" />
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Experience Cards */}
				{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
					{[
						{
							role: "Data Analyst Intern",
							company: "Dynapt Solutions Private Ltd.",
							period: "Apr 2024 - Oct 2024",
						},
						{
							role: "Data Analyst Intern",
							company: "Edulyt - India's Leading Education Management Firm",
							period: "Jun 2023 - Jul 2023",
						},
					].map((exp, i) => (
						<div
							key={i}
							className="relative bg-[#0a0d37]/70 backdrop-blur-sm border border-[#1b2c68]/50 rounded-xl p-6 hover:shadow-[0_0_15px_-3px_rgba(22,242,179,0.2)] transition-shadow duration-300"
						>
							<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
							<div className="flex items-center gap-6">
								<div className="text-pink-500/80">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 24 24"
										height="36"
										width="36"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
									</svg>
								</div>
								<div>
									<p className="text-[#16f2b3] text-lg font-medium mb-1">
										{exp.role}
									</p>
									<p className="text-sm text-gray-300/90">{exp.company}</p>
									<p className="text-xs text-pink-400/80 mt-1">{exp.period}</p>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Certificate;
