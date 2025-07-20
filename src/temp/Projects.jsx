import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import gsap from "gsap";
import { useEffect } from "react";

const Projects = () => {

	useEffect(() => {
		gsap.fromTo('.cards', { opacity: 0, y: 50 }, {
			opacity: 1,
			y: 0,
			stagger: 0.2,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".cards",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none none",
			},
		});
	}, []);

	const projects = [
		{
			title: "Resume Builder (ResumeIQ)",
			img: "./ResumeIQ.png",
			desc: (
				<>
					A resume builder that helps users create professional resumes quickly with
					authentication.
					<ul className="list-disc list-inside mt-2 text-gray-400 text-sm">
						<li>Create and customize resumes easily with multiple templates.</li>
						<li>User authentication to save and manage resumes securely.</li>
						<li>Download resumes in PDF format instantly.</li>
						<li>Responsive design for desktop and mobile use.</li>
						<li>Built with React, Node.js, and MongoDB backend.</li>
					</ul>
				</>
			),
			technology: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "GSAP"],
		},
		{
			title: "AI Code Reviewer (Gemini)",
			img: "./AICodeReviewer.png",
			desc: (
				<>
					An AI-powered code review tool that improves code quality by suggesting changes.
					<ul className="list-disc list-inside mt-2 text-gray-400 text-sm">
						<li>Analyzes code for bugs, style, and performance issues.</li>
						<li>Provides real-time suggestions and explanations.</li>
						<li>Supports multiple programming languages.</li>
						<li>User-friendly interface for easy code input and results display.</li>
						<li>Backend uses AI models hosted on Node.js server.</li>
					</ul>
				</>
			),
			technology: ["React", "Tailwind CSS", "Node.js", "Express.js"],
		},
		{
			title: "Portfolio Website",
			img: "./portfolio.png",
			desc: (
				<>
					A personal portfolio website showcasing projects and skills with smooth
					animations.
					<ul className="list-disc list-inside mt-2 text-gray-400 text-sm">
						<li>Clean, modern design highlighting projects clearly.</li>
						<li>Uses GSAP for smooth scroll and hover animations.</li>
						<li>Mobile-friendly and responsive across devices.</li>
						<li>Easy navigation with sections for About, Skills, and Contact.</li>
						<li>Built with React and styled with Tailwind CSS.</li>
					</ul>
				</>
			),
			technology: ["React", "Tailwind CSS", "GSAP"],
		},
	];
	  

	return (
		<div
			className="min-h-screen w-full flex flex-col items-center justify-center  relative overflow-hidden px-6 py-16"
			id="projectsPage"
		>
			{/* Background Gradient Glow */}
			{/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-30 blur-2xl animate-pulse z-0"></div> */}

			{/* Floating Particles */}
			{/* <div className="absolute inset-0 z-0 pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute h-2 w-2 bg-pink-400 rounded-full opacity-40 animate-float"
						style={{
							top: `${Math.random() * 95}%`,
							left: `${Math.random() * 95}%`,
							animationDelay: `${Math.random() * 3}s`,
						}}
					></div>
				))}
			</div> */}

			{/* Section Title */}
			<h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-orbitron text-cyan-400 font-semibold mb-16 text-center">
				🧠 My Code Canvas
			</h1>

			{/* Project Grid */}
			<div className="relative cards z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, idx) => (
					<ProjectCard
						key={idx}
						title={project.title}
						img={project.img}
						desc={project.desc} // Now accepts JSX with list items
						technology={project.technology}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
