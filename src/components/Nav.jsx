import React, { forwardRef, useState } from "react";

const Nav = forwardRef((prop, ref) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = (e, targetId) => {
		e.preventDefault();
		setIsMenuOpen(false); // Close mobile menu when a link is clicked
		document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			ref={ref}
			className="font-orbitron fixed bg-transparent w-full backdrop-blur-lg z-50 border-b border-white/20 shadow-lg"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-xl md:text-2xl pl-3 font-cyberbrush font-bold tracking-wide bg-gradient-to-r from-white to-[#458] text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
							PRINCE SAXENA
						</h1>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex space-x-6 lg:space-x-10">
						{["Home", "Projects", "Skills", "Contact"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}Page`}
								onClick={(e) => handleScroll(e, `${item.toLowerCase()}Page`)}
								className="relative px-2 py-1 text-sm lg:text-lg text-cyan-200 hover:text-white font-medium tracking-widest transition-all duration-300 ease-in-out group"
							>
								{item}
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
								<span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-100 origin-left"></span>
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{!isMenuOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									className="feather feather-x"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden ${
					isMenuOpen ? "block" : "hidden"
				} bg-transperant backdrop-blur-lg`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{["Home", "Projects", "Skills", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}Page`}
							onClick={(e) => handleScroll(e, `${item.toLowerCase()}Page`)}
							className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 border-b border-white/10"
						>
							{item}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
});

export default Nav;
