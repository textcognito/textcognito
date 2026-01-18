'use client'
import { useState } from 'react'
// import { createClient } from '@/lib/client'
import { createClient } from '@supabase/supabase-js'
import { Send } from '@mui/icons-material'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Sparkle } from 'lucide-react'
// import { GoogleGenAI } from "@google/genai";
import { GenerateMessage } from './generate-message'

// Initialize client-side Supabase (use your env variables)
const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL, 
       process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
)
// const supabase = createClient();
export default function MessageForm({ recipientId }) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadin, setLoadin] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSend = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setLoading(true)
    
    const { error } = await supabase
      .from('messages')
      .insert({
        content: message,
        recipient_id: recipientId, 
        // No user_id needed because it's anonymous!
      })

    setLoading(false)

    if (error) {
      alert('Error sending message')
    } else {
      setSent(true)
      setMessage('')
    }
  }

  const handleGenerate = async(e) =>{
    e.preventDefault();
    setLoadin(true);

    const aimessage =await GenerateMessage();
    setMessage(aimessage);
    setLoadin(false);
  }

  if (sent) {
    return (
      <div className="rounded-lg bg-green-100 flex flex-col p-6 text-green-800 animate-in fade-in">
        <div>

        <h3 className="font-bold">Sent! 🚀</h3>
        <button 
          onClick={() => setSent(false)} 
          className="mt-4 text-sm underline"
          >
          Send another
        </button>
        </div>
        <Link href="/auth/sign-up" className='w-full flex items-center justify-center bg-[#9d50f3] text-white   py-3 rounded-xl mt-3'>
          Create your own unique link
          <ArrowRight/>
        </Link>
        
      </div>
    )
  }

  return (
    <form onSubmit={handleSend} className="flex flex-col gap-4">
      <textarea
        className="w-full bg-[#141118]/80 text-white rounded-xl border p-4 text-lg border-2 border-transparent focus:border-[#8e46ec]/50 outline-none transition-all "
        rows={4}
        placeholder="Type your secret message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />
      {/* <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-4 py-3 text-white font-bold hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Anonymous Message'}
      </button> */}
      <div className='flex gap-3'>
      <button className='px-5 bg-white text-black rounded-sm flex items-center' disabled={loadin} onClick={handleGenerate}>
        {loadin?<span className="loader"></span>:<Sparkle/>}
        </button>
      <button 
        type="submit"
        disabled={loading}
        className=" px-4 py-3 w-full  rounded-xl bg-gradient-to-r from-[#8f48ec] to-[#8c4aea] hover:shadow-[0_0_20px_-5px_#8e46ec] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-white font-bold text-lg flex items-center justify-center gap-2 group/btn" 
         
      >
        <span>{loading ? 'Sending...' : 'Send Anonymous Message'}</span>
        {loading ? '' : <Send/>}
        {/* <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">send</span> */}
      </button>
      </div>
    </form>
  )
}