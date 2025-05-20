import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	const handleScroll = (e, targetId) => {
		e.preventDefault();
		if (targetId === "#aboutmaPage") {
			targetId = "aboutPage";
		}
		document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
	};

	const footerRef = useRef(null);

	useEffect(() => {
		// GSAP Animation for Footer Entrance
		gsap.fromTo(
			footerRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				ease: "power3.out",
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top 90%",
					end: "bottom 50%",
					scrub: true,
					// markers: true,
				},
			}
		);
	}, []);

	return (
		<footer
			ref={footerRef}
			className="w-full text-white uppercase bg-opacity-70 backdrop-blur-md"
			style={{
				background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
				borderTop: "2px solid rgba(0,255,255,0.2)",
				boxShadow: "0 0 40px rgba(0, 255, 255, 0.05)",
			}}
		>
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-y border-cyan-900 py-10">
					{/* Quick Links */}
					<div>
						<h3 className="text-xl sm:text-2xl font-orbitron font-semibold mb-4 text-cyan-400">
							Quick Links
						</h3>
						<ul className="space-y-2 text-gray-300">
							{["Home", "Skills", "About Me", "Blogs"].map((item, i) => (
								<li key={i}>
									<a
										href={`#${item.toLowerCase().replace(" ", "")}Page`}
										onClick={(e) =>
											handleScroll(
												e,
												`${item.toLowerCase().replace(" ", "")}Page`
											)
										}
										className="hover:text-cyan-400 transition"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* About Me */}
					<div>
						<h3 className="text-xl sm:text-2xl font-orbitron font-semibold mb-4 text-cyan-400">
							About Me
						</h3>
						<ul className="space-y-2 text-gray-300">
							<li>
								<a
									href={`#aboutPage`}
									onClick={(e) => handleScroll(e, `aboutPage`)}
									className="hover:text-cyan-400 transition"
								>
									My Story
								</a>
							</li>
							<li>
								<a
									href={`#skillsPage`}
									onClick={(e) => handleScroll(e, `skillsPage`)}
									className="hover:text-cyan-400 transition"
								>
									My Skills
								</a>
							</li>
							<li>
								<a
									href={`#projectPage`}
									onClick={(e) => handleScroll(e, `projectsPage`)}
									className="hover:text-cyan-400 transition"
								>
									My Project
								</a>
							</li>
						</ul>
					</div>

					{/* Social & Blogs */}
					<div>
						<h3 className="text-xl sm:text-2xl font-orbitron font-semibold mb-4 text-cyan-400">
							Digital Footprint
						</h3>
						<div className="flex gap-5 mb-6 text-3xl">
							<a
								href="https://www.linkedin.com/in/prince-saxena1/"
								target="_blank"
								rel="noreferrer"
								className="text-[#0077B5] hover:text-[#00A0DC] transition-all duration-300 transform hover:scale-125 hover:drop-shadow-lg"
								aria-label="LinkedIn Profile"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="https://github.com/Prince-Saxena"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:drop-shadow-lg"
								aria-label="GitHub Profile"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=100045317312569"
								target="_blank"
								rel="noreferrer"
								className="text-[#4267B2] hover:text-[#1877F2] transition-all duration-300 transform hover:scale-125 hover:drop-shadow-lg"
								aria-label="Facebook Profile"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://www.instagram.com/blooming_techie/"
								target="_blank"
								rel="noreferrer"
								className="text-[#E1306C] hover:text-[#F56040] transition-all duration-300 transform hover:scale-125 hover:drop-shadow-lg"
								aria-label="Instagram Profile"
							>
								<FaInstagram />
							</a>
						</div>

						{/* Optional Blog Links - Uncomment if needed */}
						{/* <h3 className="text-xl sm:text-2xl font-orbitron font-semibold mb-3 text-cyan-400 mt-6">
    Latest Writings
  </h3>
  <div className="space-y-3">
    <a href="#blogPage" className="block group">
      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 flex items-center">
        <FaPen className="mr-2 text-sm" />
        My Tech Journey
      </span>
    </a>
    <a href="#blogPage" className="block group">
      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 flex items-center">
        <FaCode className="mr-2 text-sm" />
        First Project Experience
      </span>
    </a>
  </div> */}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
