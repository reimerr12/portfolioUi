export const About = () =>{

    const frontendSkills = ["Tailwindcss" , "React" , "Javascript"];
    const backEndSkills  = ["solidity" ,"hardhat"];
    return(
        <section id="about" className="min-h-screen/2 flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>

                <div className="glass rounded-xl p-8 border-white/10 border transition-all">
                    <p className="text-gray-300 mb-6">Passionate developer with expertise in decentralized applications and finding creative solutions.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 transition-all">

                            <h3 className="text-xl font-bold mb-4 capitalize">Frontend skills</h3>

                            <div className="flex flex-wrap gap-2">

                                {frontendSkills.map((tech,key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm border border-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 transition-all">

                            <h3 className="text-xl font-bold mb-4 capitalize">Backend skills</h3>

                            <div className="flex flex-wrap gap-2">
                                
                                    {backEndSkills.map((tech,key)=>(
                                        <span key={key} className="bg-blue-500/10 text-blue-500 rounded-full text-sm py-1 px-3 border border-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Education</h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>BSC in Computer Science</strong> -XYWZ University(xxxx-yyyy)
                                </li>
                                <li>
                                    <strong>Relevant CourseWork:</strong> Data Structures,Web Development,Alogrithms
                                </li>
                            </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                            <div className="space-y-4 text-gray-300">
                                    <div className="">
                                        <h4 className="font-semibold">Student at NonAcademy(xxx-yyy)</h4>
                                        <p>learned and developed solidity based decentralized applications</p>
                                    </div>

                                    <div className="">
                                        <h4 className="font-semibold">Intersnship at XXXX</h4>
                                        <p>learned and assisted in developing solidity based decentralized applications</p>
                                    </div>
                            </div>
                    </div>  
                </div>
            </div>
        </section>
    );
}