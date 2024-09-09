import React, { useEffect } from "react";
import Particle from "./Particle";
import Box from "./Box";

const Hero: React.FC = () => {
	// Function for splitting alphabet in header name
	const splitName = (name: string) => {
		return name.split("").map((letter, index) => (
			<span
				key={index}
				className="inline-block transition-transform duration-300 hover:text-blue-700"
			>
				{letter}
			</span>
		));
	};

	// Function for smooth scrolling
	const handleNavClick = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden p-4">
			<div className="absolute inset-0 z-[-1]">
				<Particle />
			</div>
			<div className="hero-content min-w-[60%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 z-[1]">
				<div
					className="text-center md:text-left"
					data-aos="slide-right"
				>
					<header>
						<h2 className="text-[14px] md:text-[16px] flex justify-center md:justify-start items-center mb-2 md:mb-0">
							<img
								className="h-[18px] w-[18px] md:h-[20px] md:w-[20px] mr-2"
								src="/wave.png"
								alt="Wave"
							/>
							Hello there! I am
						</h2>
						<h1 className="hero-name font-extrabold text-[2.5rem] md:text-[4rem] bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
							{splitName("Andrew")}
						</h1>
						<h1 className="hero-name font-extrabold text-[2.5rem] md:text-[4rem] bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
							{splitName("Tedjapratama")}
						</h1>
						<p className="text-[14px] md:text-[16px] flex items-center justify-center md:justify-start mt-5">
							<span>
								An aspiring
								<span className="font-semibold mx-1">
									Fullstack Web Developer
								</span>
								based in Indonesia
							</span>
							<img
								className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] ml-2"
								src="/pin.png"
								alt="Pin icon"
							/>
						</p>
						<p className="text-[14px] md:text-[16px] flex items-center justify-center md:justify-start">
							<span>
								Driven to Make a Difference, one app at a time.
							</span>
							<img
								className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] ml-2"
								src="/rocket.png"
								alt="Rocket icon"
							/>
						</p>

						<div className="flex justify-center md:justify-start">
							<button
								className="mt-4 px-5 py-2 md:px-7 md:py-3 bg-white border border-[#3B82F6] text-[#3B82F6] font-normal hover:bg-[#3B82F6] hover:text-white transition duration-300 ease-in-out"
								onClick={() => handleNavClick("contacts")}
							>
								Get in touch
							</button>
						</div>
					</header>
				</div>
				<div
					className="mt-6 md:mt-0 flex justify-center"
					data-aos="slide-left"
				>
					<Box />
				</div>
			</div>
		</div>
	);
};

export default Hero;
