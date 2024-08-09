import React from 'react';

const Projects = () => {
    return (
        <div className="min-h-[90vh] bg-[#FCFCFC] py-16">
            <div className="container max-w-[85%] mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-black mb-2">My Projects</h2>
                <p className="text-center text-[#3B82F6] mb-12">Explore My Recent Projects</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* SEA Salon */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-[1px] border-black flex flex-col">
                        <img src="/project-image/sea-salon.png" alt="SEA Salon" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-black mb-2">SEA Salon</h3>
                            <p className="text-gray-600 mb-4">This project is a web-based reservation system for SEA Salon, with features such as reservation, customer reviews, and admin dashboard. I built it with HTML, CSS, JavaScript, and also Firebase for authentication</p>
                            <div className="flex mt-auto justify-between">
                                <a href="#" className="px-4 py-2 bg-[#3B82F6] text-white rounded hover:bg-blue-600 transition duration-200">Live Demo</a>
                                <a href="#" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Movie Search App */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-[1px] border-black flex flex-col">
                        <img src="/project-image/movie-search-app.png" alt="Movie Search App" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-black mb-2">Movie Search App</h3>
                            <p className="text-gray-600 mb-4">A react project used for searching movies and managing your favorite movie list. I built this using the OMDB API to fetch movie data and allows users to add or remove movies from their favorites list.</p>
                            <div className="flex mt-auto justify-between">
                                <a href="#" className="px-4 py-2 bg-[#3B82F6] text-white rounded hover:bg-blue-600 transition duration-200">Live Demo</a>
                                <a href="#" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Todo List App */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-[1px] border-black flex flex-col">
                        <img src="/project-image/todo-app.png" alt="Todo List App" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-black mb-2">Todo List App</h3>
                            <p className="text-gray-600 mb-4">This project is used to organize and plan todos for productivity. I built this as my first project to part of learning HTML, CSS, and Javascript.</p>
                            <div className="flex mt-auto justify-between">
                                <a href="#" className="px-4 py-2 bg-[#3B82F6] text-white rounded hover:bg-blue-600 transition duration-200">Live Demo</a>
                                <a href="#" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200">GitHub</a>
                            </div>
                        </div>
                    </div>

                    {/* Whispy Chat App */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-[1px] border-black flex flex-col">
                        <img src="/project-image/whispy-chat-app.png" alt="Whispy Chat App" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-black mb-2">Whispy Chat App</h3>
                            <p className="text-gray-600 mb-4">In Progress . . .  (Coming soon)</p>
                            <div className="flex mt-auto justify-between">
                                <a href="#projects" className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">Live Demo</a>
                                <a href="https://github.com/Fozzzzy/whispy-chat-app.git" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
