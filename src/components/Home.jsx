import React, { useEffect } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Project from "./Project.jsx";
import Certificate from "./Certificate.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.jsx";
import RoadMap from "./RoadMap.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";


function Home() {
	return (
		<>
			<div
				className=""
				style={{
					backgroundImage: `
					  linear-gradient(to bottom right, #0f1327, #0f1327, #0d1224, #111),
					  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")
					`,
					backgroundRepeat: "repeat",
					backgroundBlendMode: "overlay",
				}}
			>
				<div className="min-h-screen">
					<Hero />
				</div>
				<ScrollToTopButton />
				<About />
				<Experience />
				<Skills />
				<Project />
				<Certificate />
				<RoadMap />
				<Contact />
				{/* <Blogs />
				<Footer /> */}
			</div>
		</>
	);
}

export default Home;
