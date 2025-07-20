import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const image = "./pro.png";

function About({ layout = "center" }) {




	return (
		<section id="about" className="relative h-fit text-white overflow-hidden pb-8">

			{/* Content Container */}
			<div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-4 md:py-8 h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
				{/* Image */}
				<div
					className={`relative w-full max-w-md ${layout === "right" ? "md:order-2" : ""}`}
				>
					<div className="relative group">
						<DotLottieReact src="./NtQDVCRHQH.lottie" loop autoplay />
					</div>
				</div>

				<div className="w-full max-w-4xl mx-auto space-y-6 md:space-y-8 px-4">
					
					<div className="flex justify-center -mt-6">
						<div className="flex items-center">
							<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
							<span className="bg-[#0d1224] border border-[#16f2b3]/50 w-fit text-white p-2 px-6 font-mono text-xl md:text-2xl rounded-md mx-4">
								About Me
							</span>
							<span className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></span>
						</div>
					</div>
					<div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
						<div className="flex flex-row">
							<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
							<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
						</div>
						<div className="px-4 lg:px-8 py-3">
							<div className="flex flex-row space-x-2">
								<div className="h-3 w-3 rounded-full bg-red-400"></div>
								<div className="h-3 w-3 rounded-full bg-orange-400"></div>
								<div className="h-3 w-3 rounded-full bg-green-200"></div>
							</div>
						</div>
						<div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-6">
							<p className="text-gray-300 text-base md:text-lg leading-relaxed font-mono font-light text-justify">
								I am a final-year B.Tech student with a passion for{" "}
								<span className="text-[#16f2b3] font-medium">
									Natural Language Processing
								</span>
								,{" "}
								<span className="text-[#16f2b3] font-medium">
									backend development
								</span>
								, and{" "}
								<span className="text-[#16f2b3] font-medium">generative AI</span>.
								Over the course of my academic journey, I have gained{" "}
								<span className="text-pink-500 font-medium">
									hands-on experience
								</span>{" "}
								in building{" "}
								<span className="text-[#16f2b3] font-medium">
									advanced chatbot solutions
								</span>{" "}
								and leveraging{" "}
								<span className="text-[#16f2b3] font-medium">data science</span> and{" "}
								<span className="text-[#16f2b3] font-medium">machine learning</span>{" "}
								techniques to solve{" "}
								<span className="text-pink-500 font-medium">
									complex challenges
								</span>
								. I am driven by the desire to{" "}
								<span className="text-pink-500 font-medium">push boundaries</span>{" "}
								of what{" "}
								<span className="text-[#16f2b3] font-medium">technology</span> can
								achieve and am actively seeking{" "}
								<span className="text-pink-500 font-medium">opportunities</span>{" "}
								where I can apply my skills to solve{" "}
								<span className="text-pink-500 font-medium">
									real-world problems
								</span>{" "}
								with{" "}
								<span className="text-[#16f2b3] font-medium">
									AI-powered solutions
								</span>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
