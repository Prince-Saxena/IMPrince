import React, { useEffect } from "react";
import gsap from "gsap";

const Background = () => {
	useEffect(() => {
		// GSAP Animation for Floating Particles
		const particles = document.querySelectorAll(".particle");
		particles.forEach((particle) => {
			gsap.to(particle, {
				x: Math.random() * 200 - 100, // Random horizontal movement
				y: Math.random() * 200 - 100, // Random vertical movement
				duration: Math.random() * 5 + 3, // Random duration between 3-8 seconds
				repeat: -1, // Infinite loop
				yoyo: true, // Reverse animation
				ease: "power1.inOut",
			});
		});

		// GSAP Animation for Pulsating Glow
		gsap.to(".glow", {
			opacity: 0.8,
			scale: 1.2,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<div className="fixed inset-0 z-[-1] overflow-hidden">
			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>

			{/* Glowing Overlay */}
			<div className="absolute inset-0 bg-black/50 blur-xl animate-pulse"></div>

			{/* Floating Particles */}
			{[...Array(20)].map((_, i) => (
				<div
					key={i}
					className="particle absolute w-2 h-2 rounded-full bg-white/50"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 2}s`,
					}}
				></div>
			))}

			{/* Central Glow Effect */}
			<div className="glow absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30 blur-3xl"></div>
		</div>
	);
};

export default Background;
