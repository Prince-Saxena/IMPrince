import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
	const texts = ["Prince Saxena", "a Frontend Developer", "an AI/ML Enthusiast"];
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const typingSpeed = isDeleting ? 100 : 130;
		const nextText = texts[index % texts.length];

		const typeEffect = setTimeout(() => {
			if (!isDeleting && charIndex < nextText.length) {
				setDisplayedText(nextText.slice(0, charIndex + 1));
				setCharIndex((prev) => prev + 1);
			} else if (isDeleting && charIndex > 0) {
				setDisplayedText(nextText.slice(0, charIndex - 1));
				setCharIndex((prev) => prev - 1);
			} else {
				if (!isDeleting) {
					setTimeout(() => setIsDeleting(true), 1000);
				} else {
					setIsDeleting(false);
					setIndex((prev) => (prev + 1) % texts.length);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(typeEffect);
	}, [charIndex, isDeleting, index]);

	return (
		<section className="relative min-h-screen font-magnolia-bold" id="homePage">
			{/* Content with higher z-index */}
			<div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-20 py-12 md:py-0">
				<div className="flex flex-col md:flex-row items-center justify-around min-h-[calc(100vh-96px)] md:min-h-screen">
					{/* Left Content */}
					<div className="order-2 md:order-1 flex-1 flex items-center text-center md:text-left mt-8 md:mt-0">
						<div className="w-full">
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
								<span className="text-[#b3b3ff] block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">
									Hi, I'm
								</span>
								<span className="text-[#7df9ff] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-500 block font-orbitron-400 drop-shadow-[0_0_8px_rgba(125,249,255,0.4)]">
									{displayedText}
									<span className="text-[#7df9ff] animate-blink text-4xl sm:text-5xl md:text-6xl">
										|
									</span>
								</span>
							</h1>

							<p className="mt-6 sm:mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-[#e0e0ff] max-w-2xl mx-auto md:mx-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
								Building modern and responsive web applications with creativity and
								passion.
							</p>
							<div className="mt-6 sm:mt-8 md:mt-10">
								<a
									href="#contact"
									className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#4af2fd] to-[#3388ff] hover:from-[#5afcff] hover:to-[#4498ff] text-[#111] font-semibold rounded-lg transition-all duration-300 font-orbitron text-sm sm:text-base shadow-lg hover:shadow-[0_0_20px_rgba(74,242,253,0.5)]"
								>
									Get In Touch
								</a>
							</div>
						</div>
					</div>

					{/* Right Content - Profile Image */}
					<div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end items-center w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
						<div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
							{/* Decorative Ring */}
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4af2fd]/30 to-[#3388ff]/30 blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
							{/* Image Container */}
							<div className="relative w-full h-full rounded-full border-2 border-[#7df9ff]/50 group-hover:border-[#7df9ff] overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(125,249,255,0.2)]">
								<img
									src="./DP6.png"
									alt="Profile"
									className="w-full h-full group-hover:scale-105 object-cover transition-transform duration-500"
									loading="lazy"
								/>
							</div>
							{/* Decorative Elements */}
							<div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#4af2fd]/20 to-[#3388ff]/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
							<div className="absolute -bottom-4 -left-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#3388ff]/20 to-[#4a00e0]/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
