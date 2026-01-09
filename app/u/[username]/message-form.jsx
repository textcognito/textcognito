'use client'
import { useState } from 'react'
// import { createClient } from '@/lib/client'
import { createClient } from '@supabase/supabase-js'

// Initialize client-side Supabase (use your env variables)
const supabase = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL, 
       process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
)
// const supabase = createClient();
export default function MessageForm({ recipientId }) {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
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

  if (sent) {
    return (
      <div className="rounded-lg bg-green-100 p-6 text-green-800 animate-in fade-in">
        <h3 className="font-bold">Sent! 🚀</h3>
        <button 
          onClick={() => setSent(false)} 
          className="mt-4 text-sm underline"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSend} className="flex flex-col gap-4">
      <textarea
        className="w-full rounded-lg border p-4 text-lg focus:outline-black"
        rows={4}
        placeholder="Type your secret message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-4 py-3 text-white font-bold hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Anonymous Message'}
      </button>
    </form>
  )
}