import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
	{
		role: "Intern - Web Developer",
		company: "Startup Hub",
		year: "2020 - 2021",
		description:
			"Built responsive landing pages and optimized website performance for a better user experience.",
	},
	{
		role: "Junior Developer",
		company: "Tech Solutions",
		year: "2021 - 2022",
		description:
			"Developed interactive web applications using React and integrated APIs for dynamic content.",
	},
];

const Experience = () => {
	const expRef = React.useRef(null);

	useEffect(() => {
		gsap.fromTo(
			expRef.current,
			{
				clipPath: "inset(0% 0% 0% 100%)",
			},
			{
				clipPath: "inset(0% 0% 0% 0%)",
				scrollTrigger: {
					trigger: expRef.current,
					start: "top 80%",
					end: "top 40%",
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div
			ref={expRef}
			className="h-screen relative w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden p-8"
			id="expPage"
		>
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black blur-3xl opacity-50 animate-pulse z-0"></div>

			{/* Title */}
			<h1 className="text-7xl font-orbitron text-zinc-50  uppercase mb-16 tracking-wide z-10">
				Experience
			</h1>

			{/* Experience Cards */}
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 z-10" id="cards">
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="relative p-6 w-96 h-96 bg-gray-800 border border-gray-500 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
					>
						{/* Pulsing Border */}
						<div className="absolute inset-0 rounded-xl border-2 border-gray-400 opacity-20 animate-pulse"></div>

						{/* Role */}
						<h2 className="text-2xl font-semibold text-white mb-2">{exp.role}</h2>

						{/* Company */}
						<p className="text-gray-400 text-lg mb-1">{exp.company}</p>

						{/* Year */}
						<p className="text-gray-500 text-sm mb-4">{exp.year}</p>

						{/* Description */}
						<p className="text-gray-300 mt-2 line-clamp-4">{exp.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
