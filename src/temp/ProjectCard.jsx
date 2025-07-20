import React, { useEffect, useState } from "react";
import gsap from "gsap";

const ProjectCard = ({ title, img, desc, technology }) => {
	const [hoverImg, setHoverImg] = useState({ show: false, x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const x = e.clientX;
		const y = e.clientY;
		setHoverImg({ show: true, x, y });
	};

	const handleMouseLeave = () => {
		setHoverImg({ ...hoverImg, show: false });
	};

	const handleTouchStart = (e) => {
		const touch = e.touches[0];
		setHoverImg({ show: true, x: touch.clientX + 20, y: touch.clientY + 20 });
	};

	const handleTouchEnd = () => {
		setHoverImg({ ...hoverImg, show: false });
	};

	useEffect(() => {
		const preview = document.getElementById("preview");
		if (preview) {
			gsap.to("#preview", {
				left: hoverImg.x,
				top: hoverImg.y,
				duration: 1,
				ease: "back.out",
			});
		}
	}, [hoverImg.x, hoverImg.y]);
	

	return (
		<div
			className="relative p-6 w-full max-w-md sm:max-w-xs md:max-w-sm bg-[#121212] border border-cyan-500 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-transform duration-300 font-sans"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
		>
			{/* Title */}
			<h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-cyan-400 mb-3 tracking-wide">
				{title}
			</h2>

			{/* Description */}
			<div className="text-gray-200 text-base sm:text-sm md:text-base leading-relaxed mb-4">
				{desc}
			</div>

			{/* Floating Image */}
			{hoverImg.show && (
				<img
					src={img}
					id="preview"
					alt="preview"
					className="fixed hidden md:block w-96 h-54 object-cover rounded-lg border-2 transform -translate-x-1/2 -translate-y-1/2 border-cyan-400 shadow-lg z-50 pointer-events-none"
				/>
			)}

			{/* Technology tags */}
			<div className="mt-2 flex flex-wrap gap-3">
				{technology.map((tech, i) => (
					<span
						key={i}
						className="bg-cyan-700 text-cyan-200 text-xs sm:text-[10px] md:text-xs px-3 py-1 rounded-full font-medium tracking-tight"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
