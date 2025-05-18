import React, { useEffect } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import Certificate from "./Certificate.jsx";
import Contact from "./Contact.jsx";
import AIMLJourney from "./AIMLJourney.jsx";
import Blogs from "./Blogs.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
	return (
		<>
			<div
				className=""
				style={{
					backgroundImage: `
					  linear-gradient(to bottom right, #338, #111, #000000, #111, #458),
					  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")
					`,
					backgroundRepeat: "repeat",
					backgroundBlendMode: "overlay",
				}}
			>
				<Hero />
				<About />
				<Certificate />
				{/* <Experience /> */}
				<Projects />
				<Skills />
				<AIMLJourney />
				<Blogs />
				<Contact />
				<Footer />
			</div>
			{/* <Background></Background> */}
		</>
	);
}

export default Home;
