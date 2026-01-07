export default function Games(){
    return(
        //   Q&A Games Section 
        <section className="bg-black   relative -mt-16 pt-32 pb-32 z-0">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                play q&a <br />
                <span className="text-gray-500">games</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 text-9xl opacity-20 transform rotate-12 pointer-events-none">🛹</div>
              <div className="absolute bottom-0 left-0 text-9xl opacity-20 transform -rotate-12 pointer-events-none">🍕</div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="bg-white text-black p-6 rounded-3xl rounded-bl-none text-xl font-bold transform -rotate-2 shadow-[0_10px_0_rgb(255,255,255,0.2)]">
                  ask me anything
                </div>
                <div className="bg-transparent border-2 border-white/20 text-white p-4 rounded-full text-sm font-semibold">
                  You&apos;re spicy, beautiful
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 pt-10">
                <div className="bg-white text-black p-6 rounded-3xl rounded-br-none text-xl font-bold transform rotate-2 shadow-[0_10px_0_rgb(255,255,255,0.2)]">
                  never have i ever
                </div>
                <div className="text-8xl drop-shadow-lg">☁️</div>
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="bg-white text-black p-6 rounded-3xl rounded-tr-none text-xl font-bold transform -rotate-1 shadow-[0_10px_0_rgb(255,255,255,0.2)]">
                  3 words to describe me
                </div>
                <div className="bg-transparent border-2 border-white/20 text-white p-4 rounded-full text-sm font-semibold">
                  You&apos;re funny, sheesh, hype
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}