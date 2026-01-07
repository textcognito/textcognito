import Header from '@/components/Header';
import Games from '@/components/sections/Games';
import Inbox from '@/components/sections/Inbox';
import Hero from '@/components/sections/Hero';
import React from 'react';
import GetToKnow from '@/components/sections/get-to-know';
import Footer from '@/components/Footer';
// If using Next.js, use: import Link from 'next/link';
// If using Next.js, you might handle fonts in layout.js, but for now links are included below.

export default function TextcognitoLanding() {
  return (
    <>
      {/* NOTE: In a real Next.js app, these link tags should go in 
        app/layout.js or pages/_document.js 
      */}
      {/* <style dangerouslySetInnerHTML={{__html: `
        
        
        body { font-family: 'Outfit', sans-serif; }
        
        .text-shadow-sm { text-shadow: 2px 2px 0px rgba(0,0,0,0.1); }
        .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
      `}} /> */}

      <div className="bg-background-light text-slate-900   transition-colors duration-300 overflow-x-hidden font-display">
        {/* Navigation */}
        <Header/>



        {/* Header Hero */}
        <Hero/>
        <Games/> 
        <Inbox/>
        <GetToKnow/> 
        <Footer/>
        

        {/* Footer */}
        
      </div>
    </>
  );
}
