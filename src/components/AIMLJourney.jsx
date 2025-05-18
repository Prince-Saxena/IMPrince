import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		title: "🏠 House Price Predictor",
		description:
			"Built a regression model using scikit-learn to predict house prices based on location, size, and features.",
	},
	{
		title: "📷 Image Classifier",
		description:
			"Created a basic CNN using TensorFlow to classify images into categories like cats, dogs, and flowers.",
	},
	{
		title: "📝 Sentiment Analyzer",
		description:
			"Developed a model using Natural Language Processing to analyze sentiments of user reviews as positive or negative using scikit-learn.",
	},
];

function AIMLJourney() {
	const sectionRef = useRef(null);
	const cardsRef = useRef([]);

	useEffect(() => {
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 80 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
				},
			}
		);

		gsap.fromTo(
			cardsRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power2.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 75%",
				},
			}
		);
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative py-24 px-6 text-white overflow-hidden border-b"
		>
			{/* Floating Particles */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				{[...Array(25)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white opacity-10 animate-float"
						style={{
							width: `${Math.random() * 4 + 3}px`,
							height: `${Math.random() * 4 + 3}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 4}s`,
							animationDuration: `${Math.random() * 10 + 5}s`,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-5xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16  font-orbitron text-cyan-400">
					🧠 My AI/ML Journey
				</h2>
				<p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto text-justify ">
					I'm exploring the world of Artificial Intelligence and Machine Learning using
					tools like <b>TensorFlow, scikit-learn, Pandas, NumPy</b> and <b>Matplotlib</b>.
					Here's a look at the projects I've built along the way.
				</p>

				{/* Project Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							ref={(el) => (cardsRef.current[idx] = el)}
							className="bg-[#121212] p-6 rounded-xl border border-cyan-500 shadow-md hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-[1.04]"
						>
							<h3 className="text-xl font-semibold text-cyan-300 mb-2">
								{project.title}
							</h3>
							<p className="text-gray-400 text-sm text-justify ">
								{project.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AIMLJourney;
