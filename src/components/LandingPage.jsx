import { useEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
	// const mainRef = useRef(null);
	// const navRef = useRef(null);

	// useEffect(() => {
	// 	const main = mainRef.current;
	// 	const nav = navRef.current;

	// 	const handleHide = (e) => {
	// 		const detsY = e.clientY;

	// 		if (window.scrollY > 320) {
	// 			if (detsY > 0 && detsY < 95) {
	// 				const animation = gsap.to(nav, {
	// 					y: "0",
	// 					opacity: 1,
	// 					duration: 1,
	// 					backgroundColor: "rgba(17, 17, 51, 0.9)", // Matching dark blue
	// 					backdropFilter: "blur(8px)",
	// 				});

	// 				gsap.delayedCall(5, () => {
	// 					animation.pause();
	// 				});
	// 			} else {
	// 				const animation = gsap.to(nav, {
	// 					duration: 2.5,
	// 					y: "-100%",
	// 					opacity: 0,
	// 				});

	// 				gsap.delayedCall(3, () => {
	// 					animation.pause();
	// 				});
	// 			}
	// 		}
	// 	};

	// 	main.addEventListener("mousemove", handleHide);

	// 	return () => {
	// 		main.removeEventListener("mousemove", handleHide);
	// 	};
	// }, []);


	return (
		<div
			className="main full-screen-fix"
			id="main"
			style={{
				backgroundImage: `
          linear-gradient(to bottom right, #338, #111, #000000, #111),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='rgba(255,255,255,0.1)'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")
        `,
				backgroundRepeat: "repeat",
				backgroundBlendMode: "overlay",
				minHeight: "100vh",
			}}
		>
			<Nav/>
			<Home />
		</div>
	);
}

export default LandingPage;
