export default function GetToKnow(){
    return(
        <section className="bg-black   relative -mt-16 pt-32 pb-40 z-0">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-16">
              <h2 className="text-5xl md:text-7xl font-black text-white">
                get to<br />
                <span className="text-gray-500">know</span>
              </h2>
            </div>
            
            <div className="relative max-w-md mx-auto aspect-[9/16] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              <img 
                alt="Dark aesthetic photo" 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDHYwm2qEDMKiowVJlBtrihVzxyJNQRDwi3zfdCO_5ljdRomI5-SO6YKacqLWgORJ_uLSL2SyZuVDzAq55sHMXfEMDxweporSO7zCA_MA5C4GauzerBk9XhvCg8re8JHAXYgv9qKAx2ud0k1Be4d46ez4U8ojFpe5A1e3tTmGxe0nQ_iARLTNc2S2StopDZaq_ggJUtrtXXLO4zKkm7kFJQcWjPO7M5ScxhUjxHXU_zsMDa3HwQjp-4Vb5w7IbL8XqEU1yHGZfR39C" 
              />
              <div className="absolute bottom-10 left-4 right-4 flex flex-col gap-3">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-left border border-white/5">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Anonymous</p>
                  <p className="text-white font-semibold">Who is your crush right now? 👀</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-left border border-white/5 transform scale-95 opacity-80">
                  <p className="text-gray-400 text-xs uppercase font-bold mb-1">Anonymous</p>
                  <p className="text-white font-semibold">Rate my fit 1-10</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">
                Made in Textcognito
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mt-24">
              your<br />
              <span className="text-gray-500">friends</span>
            </h2>
          </div>
        </section>
    );
}