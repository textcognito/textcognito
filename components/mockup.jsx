import { Copy01Icon, Link01Icon,Message } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link as LinkIcon, Copy, MessageSquare } from 'lucide-react';

export default function Mockup(){
    const shareLink = "textcognito.click/u/yourusername";
    
    return(
        <div className="relative group">
            <div className="bg-[#44334A]/20 border border-white/5 rounded-[2rem] p-6  relative z-10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#D1C0EC] flex items-center justify-center shadow-lg shadow-[#D1C0EC]/20 group-hover:scale-110 transition-transform duration-300">
                         {/* <LinkIcon className="text-[#1b0e20] w-6 h-6" /> */}
                        <HugeiconsIcon icon={Link01Icon} className="text-[#1b0e20] w-6 h-6"/>
                    </div>
                    <div>
                         <div className="font-bold text-white text-lg">Your Unique Link</div>
                         <div className="text-xs text-gray-400 font-medium">Share with friends</div>
                    </div>
                </div>
                
                <div className="bg-[#44334A]/30 rounded-xl p-4 mb-6 border border-white/5 flex justify-between items-center group/copy cursor-pointer hover:bg-[#44334A]/50 transition-colors">
                    <span className="text-[#D1C0EC] text-sm font-medium truncate max-w-[200px]">
                        {shareLink}
                    </span>
                    <HugeiconsIcon icon={Copy01Icon} className="text-gray-400 w-4 h-4 group-hover/copy:text-white transition-colors"/>
                    {/* <Copy className="text-gray-400 w-4 h-4 group-hover/copy:text-white transition-colors"/> */}
                </div>

                <div className="space-y-4">
                    <div className="bg-[#D1C0EC]/5 border border-[#D1C0EC]/10 rounded-xl p-4 hover:bg-[#D1C0EC]/10 transition-colors">
                         <div className="flex items-center gap-2 mb-2 text-xs text-[#D1C0EC] font-bold uppercase tracking-wide">
                             {/* <MessageSquare className="w-3 h-3"/> New Message */}
                             <HugeiconsIcon icon={Message} className="w-3 h-3"/> New Message
                         </div>
                         <div className="text-gray-300 text-sm leading-relaxed font-medium">
                             "You're such an amazing friend! Keep being awesome! "
                         </div>
                    </div>

                    <div className="bg-[#8D77A8]/5 border border-[#8D77A8]/10 rounded-xl p-4 hover:bg-[#8D77A8]/10 transition-colors">
                         <div className="flex items-center gap-2 mb-2 text-xs text-[#8D77A8] font-bold uppercase tracking-wide">
                              <HugeiconsIcon icon={Message} className="w-3 h-3"/> New Message
                         </div>
                         <div className="text-gray-300 text-sm leading-relaxed font-medium">
                              "Your positivity is contagious! Thanks for being you! "
                         </div>
                    </div>
                </div>
            </div>
            {/* Glow */}
            {/* <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D1C0EC] rounded-full blur-[100px] opacity-10 -z-10 animate-pulse"></div> */}
            {/* <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#8D77A8] rounded-full blur-[100px] opacity-10 -z-10 animate-pulse delay-700"></div> */}
        </div>
    );
}