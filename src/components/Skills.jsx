import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
	{
		title: "MongoDB",
		image: "./mongodb.png",
		desc: "MongoDB is a NoSQL database that I use for building scalable and flexible backend systems.",
		tags: ["Schema Design", "CRUD Operations", "Aggregation Pipelines"],
	},
	{
		title: "Express.js",
		image: "./expres.png",
		desc: "Express.js is my go-to framework for building RESTful APIs and backend services.",
		tags: ["Middleware", "Routing", "Error Handling"],
	},
	{
		title: "React.js",
		image: "./react.png",
		desc: "React.js is my primary tool for building dynamic and responsive user interfaces.",
		tags: ["Hooks", "Context API", "Component Architecture"],
	},
	{
		title: "Node.js",
		image: "./nodejs.png",
		desc: "Node.js powers my backend development, enabling me to build scalable and efficient server-side applications.",
		tags: ["Event-Driven", "REST APIs", "File System"],
	},
];



const Skills = () => {
	const skillRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			skillRef.current,
			{ opacity: 0, y: 80 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: skillRef.current,
					start: "top 75%",
					end: "top 50%",
					scrub: 1,
				},
			}
		);

		gsap.fromTo(
			".skill-card",
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".skill",
					start: "top 80%",
				},
			}
		);
	}, []);

	const renderCards = (skills) =>
		skills.map((skill, idx) => (
			<div
				key={idx}
				className="skill-card relative p-6 rounded-xl border border-cyan-500 bg-[#121212] shadow-md hover:shadow-cyan-500/50 hover:scale-[1.03] transition-transform duration-300"
				style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
			>
				<div className="flex items-center gap-4 mb-4">
					<div className="w-16 h-16 bg-[#0d0d0d] rounded-lg flex items-center justify-center shadow-md border border-cyan-700">
						<img
							src={skill.image}
							alt={skill.title}
							className="w-12 h-12  transition duration-300"
						/>
					</div>
					<h2 className="text-xl font-bold text-cyan-400">{skill.title}</h2>
				</div>

				<p className="text-gray-300 text-sm mb-4">{skill.desc}</p>

				<div className="flex flex-wrap gap-2">
					{skill.tags.map((tag, i) => (
						<span
							key={i}
							className="px-3 py-1 text-xs bg-cyan-900 text-cyan-300 rounded-full font-medium tracking-tight border border-cyan-700 shadow-sm"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		));
	
	

	return (
		<div
			ref={skillRef}
			className="min-h-screen w-full  text-white py-12 px-4 "
			id="skillsPage"
		>
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16  font-orbitron text-cyan-400">
				🎮 My Skill Inventory
			</h1>

			{/* Web Dev Skills */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto skill">
				{renderCards(skillsData)}
			</div>

			
		</div>
	);
};

export default Skills;
