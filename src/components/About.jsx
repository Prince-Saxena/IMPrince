import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const image = "./pro.png";

function About({ layout = "center" }) {
	const headingRef = useRef(null);
	const textRef = useRef(null);
	const imgRef = useRef(null);
	const particlesRef = useRef(null);

	const handleScroll = (e, targetId) => {
		e.preventDefault();
		document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		// Main animation timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#aboutPage",
				start: "top 75%",
				toggleActions: "play none none none",
			},
		});

		tl.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
		)
			.fromTo(
				imgRef.current,
				{ opacity: 0, scale: 0.8, rotation: -5 },
				{ opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
				"-=0.4"
			)
			.fromTo(
				textRef.current.querySelectorAll("p, li, div"),
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
				"-=0.6"
			);

		// Floating particles animation
		gsap.to(particlesRef.current.querySelectorAll("div"), {
			y: () => gsap.utils.random(-20, 20),
			x: () => gsap.utils.random(-20, 20),
			duration: () => gsap.utils.random(3, 6),
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		// Image hover effect
		const img = imgRef.current.querySelector("img");
		img.addEventListener("mouseenter", () => {
			gsap.to(img, {
				scale: 1.05,
				y: -10,
				boxShadow: "0 25px 50px -12px rgba(74, 222, 128, 0.25)",
				duration: 0.5,
			});
		});
		img.addEventListener("mouseleave", () => {
			gsap.to(img, {
				scale: 1,
				y: 0,
				boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				duration: 0.5,
			});
		});
	}, []);

	return (
		<section id="aboutPage" className="relative min-h-screen text-white overflow-hidden">
			{/* Animated Gradient Background */}
			{/* <div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-cyan-900 opacity-80"></div>
				<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
			</div> */}

			{/* Floating Particles */}
			<div
				ref={particlesRef}
				className="absolute inset-0 overflow-hidden pointer-events-none"
			>
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-cyan-400 opacity-20"
						style={{
							width: `${Math.random() * 6 + 2}px`,
							height: `${Math.random() * 6 + 2}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							filter: "blur(1px)",
						}}
					/>
				))}
			</div>

			{/* Content Container */}
			<div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32 h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
				{/* Image */}
				<div
					ref={imgRef}
					className={`relative w-full max-w-md ${layout === "right" ? "md:order-2" : ""}`}
				>
					<div className="relative group">
						<img
							src={image}
							alt="About"
							className="w-full max-w-xs sm:max-w-sm rounded-2xl border-2 border-cyan-400/30 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 group-hover:border-cyan-400/80 z-10 relative"
						/>
						{/* Glow effect */}
						<div className="absolute inset-0 bg-cyan-400 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl scale-95 group-hover:scale-105 transition-all duration-500"></div>
						{/* Decorative elements */}
						<div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-cyan-400/10 blur-lg z-0"></div>
						<div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cyan-400/10 blur-lg z-0"></div>
					</div>
				</div>

				{/* Text Content */}
				<div ref={textRef} className="w-full max-w-2xl space-y-6 md:space-y-8">
					<h2
						ref={headingRef}
						className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 mb-6"
					>
						<span className="inline-block mr-3">👋</span> About Me
					</h2>

					<p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
						I'm <span className="text-cyan-300 font-medium">Prince Saxena</span>, a
						passionate{" "}
						<span className="text-cyan-300 font-medium">Frontend Developer</span>{" "}
						specializing in building modern, interactive web experiences. Currently
						expanding my expertise into the fascinating world of{" "}
						<span className="text-cyan-300 font-medium">AI/ML</span>.
					</p>

					<ul className="space-y-3">
						{[
							"🚀 Skilled in React, Tailwind CSS, and modern JavaScript",
							"🧠 Learning Python and ML libraries (TensorFlow, PyTorch)",
							"🤖 Exploring neural networks and deep learning concepts",
							"💡 Passionate about creating intuitive user experiences",
						].map((item, index) => (
							<li
								key={index}
								className="flex items-start text-gray-300 text-base sm:text-lg"
							>
								<span className="inline-block mr-3 mt-1 text-cyan-400">•</span>
								{item}
							</li>
						))}
					</ul>

					<div className="flex flex-wrap gap-4 pt-4">
						<button
							onClick={(e) => handleScroll(e, "projectsPage")}
							className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center group"
						>
							<span>View Projects</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<a
							href="./resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center group"
						>
							<span>My Resume</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
