import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
		gsap.fromTo(
			secRef.current,
			{ opacity: 0, y: 80 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: secRef.current,
					start: "top 85%",
					end: "top 50%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(
			".cert-card",
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".cert-container",
					start: "top 75%",
					toggleActions: "play none none none",
				},
			}
		);
	}, []);

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8  text-white" ref={secRef}>
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cyan-400 mb-8 md:mb-12 text-center">
					Verified & Certified
				</h2>
				
				<div className="cert-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{certifications.map((cert, i) => (
						<div
							className="cert-card flex items-stretch transition-transform duration-300 hover:scale-[1.02]"
							key={i}
						>
							<div className="w-full bg-[#121212] border border-cyan-500/50 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 p-4 sm:p-5 flex flex-col">
								<div className="flex-grow">
									<h3 className="text-base sm:text-lg font-semibold text-cyan-300">
										{cert.issuer}
									</h3>
									<div className="flex justify-between items-center mt-1 sm:mt-2">
										<h4 className="text-sm sm:text-base md:text-lg text-cyan-100">
											{cert.title}
										</h4>
										<p className="text-xs sm:text-sm text-gray-400 ml-2 whitespace-nowrap">
											{cert.date}
										</p>
									</div>
									<p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3">
										{cert.description}
									</p>
								</div>

								{cert.link && (
									<a
										href={cert.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block mt-3 sm:mt-4 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
										aria-label={`View ${cert.title} certificate`}
									>
										<span className="flex items-center">
											View Certificate
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4 ml-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</span>
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificate;
