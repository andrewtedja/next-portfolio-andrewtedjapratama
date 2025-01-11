import { title } from "process";
import React from "react";

const Projects = () => {
	const projectData = [
		{
			title: "MediFriends",
			imgSrc: "/project-image/medifriends.png",
			description:
				"MediFriends is a web-based health platform designed to help users monitor their well-being and adopt a healthy lifestyle. I built this project with Next.js, Tailwind CSS, TypeScript, NextAuth, React, Prisma, PostgreSQL, and Leaflet Library.",
			liveDemoLink: "https://16-medifriends.vercel.app/",
			githubLink: "https://github.com/Fozzzzy/16_MediFriends",
		},
		{
			title: "SongSmart",
			imgSrc: "/project-image/songsmart3.png",
			description:
				"SongSmart, a project that help identify similar images or music features and deliver fast results by combining Image Retrieval and Music Information Retrieval using PCA and vector-based matching.",
			githubLink: "https://github.com/andrewtedja/Algeo02-23035",
		},
		{
			title: "SEA Salon",
			imgSrc: "/project-image/sea-salon.png",
			description:
				"This project is a web-based reservation system for SEA Salon, with features such as reservation, customer reviews, and admin dashboard. I built it with HTML, CSS, JavaScript, and also Firebase for authentication.",
			liveDemoLink: "https://sea-salon-bice.vercel.app/",
			githubLink: "https://github.com/Fozzzzy/SEA-Salon",
		},
		{
			title: "Movie Search App",
			imgSrc: "/project-image/movie-search-app.png",
			description:
				"A React project used for searching movies and managing your favorite movie list. I built this using the OMDB API to fetch movie data and allow users to add or remove movies from their favorites list.",
			liveDemoLink: "",
			githubLink: "https://github.com/Fozzzzy/react-movie-list-app",
		},
		{
			title: "Todo List App",
			imgSrc: "/project-image/todo-app.png",
			description:
				"This project is used to organize and plan todos for productivity. I built this as my first project as part of learning HTML, CSS, and JavaScript.",
			liveDemoLink: "https://todolist-zeta-drab.vercel.app/",
			githubLink: "https://github.com/Fozzzzy/todolist",
		},
		{
			title: "Whispy Chat App",
			imgSrc: "/project-image/whispy-chat-app.png",
			description: "In Progress . . . (Coming soon)",
			liveDemoLink: "",
			githubLink: "https://github.com/Fozzzzy/whispy-chat-app",
		},
	];

	return (
		<div className="min-h-[90vh] bg-[#f9fafb] py-16" data-aos="fade-up">
			<div className="container max-w-[85%] mx-auto px-4">
				<h2
					className="text-4xl font-bold text-center text-black mb-2"
					data-aos="fade-down"
				>
					My Projects
				</h2>
				<p
					className="text-center text-[#3B82F6] mb-12"
					data-aos="fade-down"
				>
					Explore My Recent Projects
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectData.map((project, index) => (
						<div
							key={index}
							className="projects-card"
							data-aos="fade-up"
						>
							<img
								src={project.imgSrc}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-semibold text-black mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4 text-justify">
									{project.description}
								</p>
								<div className="flex mt-auto justify-between">
									{project.liveDemoLink ? (
										<a
											href={project.liveDemoLink}
											target="_blank"
											rel="noopener noreferrer"
											className="px-4 py-2 bg-[#3B82F6] text-white rounded hover:bg-blue-600 transition duration-200"
										>
											Live Demo
										</a>
									) : (
										<a
											href="#projects"
											className="px-4 py-2 bg-[#adccff] text-white rounded cursor-not-allowed"
										>
											Live Demo
										</a>
									)}
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200"
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
