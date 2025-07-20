import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
	const headingRef = useRef(null);
	const formRef = useRef(null);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	useEffect(() => {
		gsap.fromTo(
			headingRef.current,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.3,
				scrollTrigger: {
					trigger: "#contactPage",
					start: "top 70%",
					end: "top 40%",
					scrub: 1,
				},
			}
		);
		gsap.fromTo(
			formRef.current,
			{
				opacity: 0,
				clipPath: "inset(0% 100% 0% 100%)",
			},
			{
				opacity: 1,
				clipPath: "inset(0% 0% 0% 0%)",
				scrollTrigger: {
					trigger: formRef.current,
					start: "top 80%",
					end: "top 40%",
					scrub: true,
				},
			}
		);
		  
	}, []);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Message from ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);

		// Replace with your email
		window.location.href = `mailto:princesaxena202020@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<div
			id="contactPage"
			className="relative h-screen font-serif font-light text-white flex flex-col items-center px-8 overflow-hidden "
		>
			{/* Background Gradient */}
			{/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 blur-3xl opacity-60 animate-pulse"></div> */}

			{/* Floating Particles */}
			<div className="absolute inset-0">
				{[...Array(25)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white opacity-20 animate-float"
						style={{
							width: `${Math.random() * 4 + 1}px`,
							height: `${Math.random() * 4 + 1}px`,
							top: `${Math.random() * 90}%`,
							left: `${Math.random() * 90}%`,
							animationDelay: `${Math.random() * 3}s`,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="max-w-3xl w-full pt-28 z-10  ">
				<h2
					ref={headingRef}
					className="text-5xl font-orbitron text-cyan-400 bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 mb-12 animate-glow drop-shadow-lg text-center"
				>
					📬 Get In Touch
				</h2>

				<form
					ref={formRef}
					className="flex flex-col gap-6 text-xl bg-gray-900/50 bg-opacity-20 backdrop-blur-xs border border-cyan-800 p-8 rounded-xl shadow-lg"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleChange}
						required
						className="bg-transparent  border-b border-gray-400 px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-gray-400 transition"
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
						className="bg-transparent  border-b border-gray-400 px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-gray-400 transition"
					/>

					<textarea
						name="message"
						placeholder="Message"
						value={formData.message}
						onChange={handleChange}
						required
						className="bg-transparent border-b border-gray-400 px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-gray-400 resize-none transition"
					/>

					<button
						type="submit"
						className="w-full py-3 bg-gray-800 border border-gray-600 text-gray-300  shadow-md hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
