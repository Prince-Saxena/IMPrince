import React, { useState, useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage.jsx";
import gsap from "gsap";
import "./App.css";

function App() {
	const [isActive, setIsActive] = useState(false);
	const lettersRef = useRef([]);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check screen size on mount and resize
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		// Animation timeline
		const tl = gsap.timeline();

		// Set initial styles
		tl.to(["#N", "#S", "#A", "#X", "#E"], {
			opacity: 1,
			fontFamily: "Orbitron",
			duration: 0.3,
			ease: "power4.out",
		});

		// Letter fade out sequence
		tl.to("#N", { opacity: 0, duration: 0.3, ease: "power4.inOut" }, 0.2)
			.to("#S", { opacity: 0, duration: 0.3, ease: "power4.inOut" }, 0.4)
			.to("#A", { opacity: 0, duration: 0.3, ease: "power4.inOut" }, 0.6)
			.to("#X", { opacity: 0, duration: 0.3, ease: "power4.inOut" }, 0.8)
			.to("#E", { opacity: 0, duration: 0.3, ease: "power4.inOut" }, 1);

		// Letter style transformations
		tl.to(["#N", "#S", "#A", "#X", "#E"], {
			opacity: 1,
			fontFamily: "sans",
			duration: 0.3,
			ease: "power4.out",
		});

		// Individual font styling
		tl.to(
			"#N",
			{
				fontFamily: "cyberbrush",
				duration: 0.3,
				ease: "power4.out",

				color: "#16f2b3",
			},
			0.2
		)
			.to(
				"#S",
				{
					fontFamily: "Orbitron",
					duration: 0.3,
					ease: "power4.out",

					color: "#16f2b3",
				},
				0.4
			)
			.to(
				"#A",
				{
					fontFamily: "sans-serif",
					duration: 0.3,
					ease: "power4.out",
					color: "#16f2b3",
				},
				0.6
			)
			.to(
				"#X",
				{
					fontFamily: "cyberbrush",
					duration: 0.3,
					ease: "power4.out",

					color: "#16f2b3",
				},
				0.8
			)
			.to(
				"#E",
				{
					fontFamily: "Orbitron",
					duration: 0.3,
					ease: "power4.out",
					color: "#16f2b3",
				},
				1
			);

		// Bounce effect
		tl.to(["#N", "#S", "#A", "#X", "#E"], {
			scale: 1.2,
			fontFamily: "cyberbrush",
			duration: 0.3,
			ease: "bounce.out",

		}).to(["#N", "#S", "#A", "#X", "#E"], {
			scale: 1,
			duration: 0.2,
			ease: "power4.out",
		});

		// Activate main content
		tl.add(() => setIsActive(true), "+=0.5");

		return () => {
			window.removeEventListener("resize", checkIfMobile);
			tl.kill(); // Clean up GSAP timeline
		};
	}, [isMobile]);

	return (
		<>
			{!isActive && (
				<div className="full-screen-fix w-full flex justify-center items-center relative bg-[#0d1225] overflow-hidden px-4">
					{/* Glow effects matching your theme */}
					<div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-1/4 left-1/4 filter blur-3xl opacity-10"></div>
					<div className="w-[150px] h-[150px] bg-[#16f2b3] rounded-full absolute bottom-1/4 right-1/4 filter blur-3xl opacity-10"></div>

					<h1
						className={`relative text-center ${
							isMobile ? "text-4xl" : "text-8xl"
						} font-cyberbrush font-extralight text-white ${
							isMobile ? "tracking-normal" : "tracking-widest"
						}`}
					>
						PRINCE&nbsp;
						<p
							className={`font-cyberbrush ${
								isMobile ? "text-4xl" : "text-8xl"
							} name inline-block ${
								isMobile ? "tracking-normal" : "tracking-widest"
							} sirname`}
						>
							{["S", "A", "X", "E", "N", "A"].map((char, index) => (
								<span
									key={index}
									ref={(el) => (lettersRef.current[index] = el)}
									className="inline-block"
									id={char}
								>
									{char}
								</span>
							))}
						</p>
					</h1>
				</div>
			)}
			{isActive && <LandingPage />}
		</>
	);
}

export default App;
