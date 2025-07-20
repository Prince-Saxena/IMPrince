import { useState, useEffect } from "react";
import { FaArrowUp, FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button after scrolling past home section (adjust 500 to your home section height)
			if (window.scrollY > window.innerHeight * 0.5) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-8 right-8 z-50 flex flex-col space-y-3"
				>
					{/* Back to Top Button */}
					<motion.button
						whilehover={{ scale: 1.1 }}
						whiletap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
						aria-label="Back to top"
					>
						<FaArrowUp className="text-xl" />
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTopButton;
