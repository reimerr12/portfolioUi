export const Projects = () =>{
    return(
        <section id="project" className="min-h-screen flex items-center justify-center py-10">
            <div className="max-w-5xl mx-auto px-4">

                <h2 className="text-3xl font-bold capitalize bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Fetaured projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

                    <div className="p-6 rounded-xl border border-cyan-500/10 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-sm hover:shadow-cyan-500 transition-all">

                        <img className="w-full h-48 object-cover rounded-lg mb-4" src="/public/img/project-1.png" alt="" />

                        <h3 className="font-bold text-xl mb-2">Service Platform</h3>

                        <p className="text-gray-300 mb-3">Scalable structure with responsive design with automatic scaling and real time monitoring</p>
                        <div className="mt-4">
                            {["JavaScript","Vite"," Tailwindcss"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-cyan-400 rounded-full py-1 px-3 text-sm border border-cyan-500 mx-1">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div>
                            <a href="https://stalwart-elf-45de9a.netlify.app/">View Project</a>
                        </div>
                    </div>
                    

                </div>

            </div>
        </section>
    )
}