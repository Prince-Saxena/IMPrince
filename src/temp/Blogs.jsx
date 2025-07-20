import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
	const blogPosts = [
		{
			id: 1,
			title: "🚀 My Journey into Tech",
			date: "2025-05-01",
			content:
				"My journey in tech began with admission to BTech. Before that, I didn’t know much about programming. But after joining, I developed a strong interest in making web applications and learning new things. Now, I am at an intermediate level in MERN stack and currently focusing on AIML.",
		},
		{
			id: 2,
			title: "💡 My First Big Project",
			date: "2025-05-10",
			content:
				"My first big project was ResumeIQ, a smart resume builder that gives suggestions using the Gemini API to improve resume content. I built it with the MERN stack. Users can create profiles with login and signup features, save their resumes on our server, and customize font size, colors, and styles. Finally, users can download their resumes as PDF files. I faced some problems during development, but I managed to handle them. This project was also my college submission in the 2nd year. It was an exciting and valuable learning experience.",
		},
	];

	const [expanded, setExpanded] = useState({});
	const sectionRef = useRef(null);

	useEffect(() => {
		const elements = sectionRef.current.querySelectorAll(".blog-card");

		elements.forEach((el, index) => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: index * 0.2,
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				}
			);
		});

		gsap.fromTo(
			"#blogHeading",
			{ opacity: 0, y: -40 },
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: "#blogHeading",
					start: "top 90%",
					end: "top 50%",
					
				},
			}
		);
	}, []);

	const toggleExpand = (id) => {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	const formatDate = (dateStr) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateStr).toLocaleDateString(undefined, options);
	};

	return (
		<section className="px-6 py-12 max-w-6xl mx-auto" id="blogsPage" ref={sectionRef}>
			<h2
				id="blogHeading"
				className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16  font-orbitron text-cyan-400"
			>
				📝 Blogs About Me
			</h2>

			<div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
				{blogPosts.map(({ id, title, date, content }) => {
					const isExpanded = expanded[id];

					return (
						<article
							key={id}
							className="blog-card bg-[#0f172a] h-fit text-white p-6 rounded-xl border border-cyan-600 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03]"
						>
							<h3 className="text-2xl font-bold text-cyan-300 mb-1">{title}</h3>
							<p className="text-sm text-gray-400 mb-3">{formatDate(date)}</p>

							<div
								className={`text-gray-300 overflow-hidden transition-all duration-500`}
								style={{
									maxHeight: isExpanded ? "500px" : "80px",
								}}
							>
								{isExpanded ? content : content.slice(0, 120) + "..."}
							</div>

							<button
								className="mt-4 text-cyan-400 hover:text-cyan-600 font-semibold"
								onClick={() => toggleExpand(id)}
							>
								{isExpanded ? "Show Less ▲" : "Read More ▼"}
							</button>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Blogs;
