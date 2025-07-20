import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileDownload, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Nav = () => {
	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#project" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	const socialLinks = [
		{
			icon: <FaGithub />,
			href: "https://github.com/Prince-Saxena",
			color: "hover:text-gray-400",
		},
		{
			icon: <FaLinkedinIn />,
			href: "https://www.linkedin.com/in/prince-saxena1/",
			color: "hover:text-blue-500",
		},
		{
			icon: <FaInstagram />,
			href: "https://www.instagram.com/blooming_techie/",
			color: "hover:text-blue-400",
		},
		{
			icon: <HiOutlineMail />,
			href: "mailto:princesaxena202020@gmail.com",
			color: "hover:text-red-400",
		},
		{
			icon: <FaFileDownload />,
			href: "https://drive.google.com/file/d/1CUPNKa6nxD3zp0JUb3vUzNBjPjOTw3Sr/view?usp=sharing",
			color: "hover:text-green-400",
		},
	];

	const handleScroll = (e, targetId) => {
		e.preventDefault();
		document.getElementById(targetId.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed w-full z-50 top-0 backdrop-blur-md bg-[#0d1224]/80 border-b border-[#1b2c68a0]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Brand */}
					<motion.div
						whilehover={{ scale: 1.05 }}
						className="flex-shrink-0 flex items-center"
					>
						<a
							href="#home"
							onClick={(e) => handleScroll(e, "#home")}
							whilehover={{ scale: 1.1 }}
							whiletap={{ scale: 0.9 }}
							className="text-white font-bold text-xl"
						>
							<span className="text-pink-500">{"<"}</span>
							Prince
							<span className="text-[#16f2b3]">Saxena</span>
							<span className="text-pink-500">{"/>"}</span>
						</a>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							{navItems.map((item) => (
								<motion.a
									key={item.name}
									href={item.href}
									onClick={(e) => handleScroll(e, item.href)}
									whilehover={{ scale: 1.1 }}
									whiletap={{ scale: 0.9 }}
									className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative group"
								>
									{item.name}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
								</motion.a>
							))}
						</div>
					</div>

					{/* Social Icons */}
					<div className="hidden md:flex items-center space-x-4">
						{socialLinks.map((link, index) => (
							<motion.a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								whilehover={{ y: -3 }}
								whiletap={{ scale: 0.9 }}
								className={`text-gray-400 ${link.color} transition-colors duration-300 p-2 rounded-full`}
							>
								{link.icon}
							</motion.a>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button className="text-gray-300 hover:text-white focus:outline-none">
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation (hidden by default) */}
			<div className="md:hidden hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</motion.nav>
	);
};

export default Nav;
