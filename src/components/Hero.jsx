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

	const handleScroll = (e, targetId) => {
		e.preventDefault();
		document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
	};

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
		<section className="relative font-magnolia-bold" id="homePage">
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-0">
				<div className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] md:min-h-screen">
					{/* Left Content - made full width on mobile */}
					<div className="order-2 md:order-1 w-full lg:w-2/3 flex items-center text-center md:text-left md:mt-0">
						<div className="w-full">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
								<span className="text-[#b3b3ff] block text-left text-3xl sm:text-4xl lg:text-5xl mb-1 md:mb-3">
									Hi, I'm
								</span>
								<span className="text-[#7df9ff] font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl  text-left transition-all duration-500 block font-orbitron-400 drop-shadow-[0_0_8px_rgba(125,249,255,0.4)]">
									{displayedText}
									<span className="text-[#7df9ff] animate-blink text-2xl sm:text-3xl md:text-5xl lg:text-7xl">
										|
									</span>
								</span>
							</h1>

							<p className="mt-4 sm:mt-6 mb-6 md:mb-0 md:mt-8 text-left text-sm sm:text-lg md:text-xl lg:text-2xl text-[#e0e0ff] max-w-2xl mx-auto md:mx-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
								Building modern and responsive web applications with creativity and
								passion.
							</p>
							<div className="mt-4 sm:mt-6 md:mt-8">
								<a
									href="#contactPage"
									onClick={(e) => handleScroll(e, `contactPage`)}
									className="inline-block w-full md:w-fit px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#4af2fd] to-[#3388ff] hover:from-[#5afcff] hover:to-[#4498ff] text-[#111] font-semibold rounded-lg transition-all duration-300 font-orbitron text-xs sm:text-sm shadow-lg hover:shadow-[0_0_20px_rgba(74,242,253,0.5)]"
								>
									Get In Touch
								</a>
							</div>
						</div>
					</div>

					{/* Right Content - Profile Image - made smaller on mobile */}
					<div className="order-1 md:order-2 w-full lg:w-1/3 flex justify-center md:justify-end items-center mb-6 md:mb-0">
						<div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4af2fd]/30 to-[#3388ff]/30 blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
							<div className="relative w-full h-full rounded-full border-2 border-[#7df9ff]/50 group-hover:border-[#7df9ff] overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(125,249,255,0.2)]">
								<img
									src="./DP6.png"
									alt="Profile"
									className="w-full h-full group-hover:scale-105 object-cover transition-transform duration-500"
									loading="lazy"
								/>
							</div>
							<div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#4af2fd]/20 to-[#3388ff]/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
							<div className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#3388ff]/20 to-[#4a00e0]/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
