import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
	const skills = [
		{ name: "Excel", icon: "excel.svg" },
		{ name: "SQL", icon: "mysql.svg" },
		{ name: "Python", icon: "python.svg" },
		{ name: "Pandas", icon: "pandas.svg" },
		{ name: "NumPy", icon: "numpy.svg" },
		{ name: "Matplotlib", icon: "matplotlib.svg" },
		{ name: "Seaborn", icon: "seaborn.svg" },
		{ name: "Power BI", icon: "powerbi.svg" },
		{ name: "Jupyter", icon: "jupyter.svg" },
		{ name: "SkLearn", icon: "scikit-learn.svg" },
		{ name: "Streamlit", icon: "streamlit.svg" },
		{ name: "Git", icon: "git.svg" },
		{ name: "VS", icon: "vscode.svg" },
		{ name: "MongoDB", icon: "mongoDB.svg" },
		{ name: "TensorFlow", icon: "tensorflow.svg" },
		{ name: "JavaScript", icon: "javascript.svg" },
		{ name: "React", icon: "react.svg" },
		{ name: "Java", icon: "java.svg" },
	];

	const marqueeRef = useRef(null);
	const controls = useAnimation();
	const [isHovered, setIsHovered] = useState(false);
	const [position, setPosition] = useState(0);
	const speed = 100; // px per second

	useEffect(() => {
		const marquee = marqueeRef.current;
		if (!marquee) return;

		const totalWidth = Array.from(marquee.children).reduce(
			(acc, child) => acc + child.offsetWidth,
			0
		);

		let animationFrame;
		let lastTime;

		const loop = (time) => {
			if (isHovered) {
				lastTime = time;
				animationFrame = requestAnimationFrame(loop);
				return;
			}

			if (lastTime !== undefined) {
				const delta = (time - lastTime) / 1000;
				let newX = position - speed * delta;
				if (newX <= -totalWidth) {
					newX = 0;
				}
				setPosition(newX);
				controls.set({ x: newX });
				lastTime = time;
			} else {
				lastTime = time;
			}

			animationFrame = requestAnimationFrame(loop);
		};
		
		

		animationFrame = requestAnimationFrame(loop);

		return () => cancelAnimationFrame(animationFrame);
	}, [isHovered, position, controls]);

	return (
		<section
			id="skills"
			className="relative z-40 min-h-[40vh] border-t my-12 lg:my-24 border-[#25213b]"
		>
			<div
				className="absolute inset-0 backdrop-blur-sm"
				style={{
					maskImage:
						"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0) 100%)",
					WebkitMaskImage:
						"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.45) 85%,rgba(0,0,0,0) 100%)",
				}}
			></div>

			<div className="w-[200px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[36%] translate-x-1/2 filter blur-3xl opacity-10"></div>

			<div className="relative z-10">
				<div className="flex justify-center -translate-y-[1px]">
					<div className="w-3/4">
						<div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full"></div>
					</div>
				</div>

				<div className="flex justify-center my-5 lg:py-8">
					<div className="flex items-center">
						<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
						<span className="bg-[#0d1224] border border-[#16f2b3]/50 w-fit text-white p-2 px-6 font-mono text-xl md:text-2xl rounded-md mx-4">
							Skills
						</span>
						<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
					</div>
				</div>

				<div className="w-full my-8 overflow-hidden">
					<motion.div
						className="flex"
						ref={marqueeRef}
						animate={controls}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{[...skills, ...skills].map((skill, index) => (
							<SkillCard
								key={`${skill.name}-${index}`}
								skill={skill}
								onHover={() => setIsHovered(true)}
								onLeave={() => setIsHovered(false)}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const SkillCard = ({ skill, onHover, onLeave }) => (
	<div
		className="flex-shrink-0 w-36 sm:w-40 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
		onMouseEnter={onHover}
		onMouseLeave={onLeave}
	>
		<div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-[#16f2b3] transition-all duration-500">
			<div className="flex -translate-y-[1px] justify-center">
				<div className="w-3/4">
					<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-3 p-4 text-center">
				<div className="h-10 w-10 flex items-center justify-center">
					<img
						src={`/${skill.icon}`}
						alt={skill.name}
						className="h-full w-full object-contain"
					/>
				</div>
				<p className="text-white text-sm md:text-base font-montserrat text-center break-words w-full px-1 leading-tight">
					{skill.name}
				</p>
			</div>
		</div>
	</div>
);

export default Skills;