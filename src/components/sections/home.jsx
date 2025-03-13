export const Home= () =>{
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right capitalize p-4 bg-clip-text text-transparent rounded-xl">Hello, im Ahbab Sameer</h1>

                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                    Im a blockchain developer passionate about building decentralized applications (DApps) and working with Solidity smart contracts. My focus is on integrating smart contracts with modern frontends ensuring a seamless and efficient user experience.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,245,0.4)] capitalize">view projects</a>

                    <a href="#contact" className="border border-cyan-400 text-cyan-500 py-3 px-6 rounded-xl font-medium transition-all duration-100 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,245,0.2)] hover:bg-cyan-500/10 capitalize">contact me</a>
                </div>
            </div>
        </section>
    )
}