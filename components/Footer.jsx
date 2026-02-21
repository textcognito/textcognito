import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-10">
          {/* Brand */}
          <Link href="/" className="text-2xl font-black italic tracking-tight">
            <img src="/txtlogo.png" alt="" width={150}/>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link href="/about" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">About</Link>
            <Link href="/" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">Safety</Link>
            <Link href="/" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">Contact us</Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="https://x.com/textcognito" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">𝕏 (twitter)</a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>textcognito@gmail.com</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
          </div>
          {/* <div>Made with love in CyberSpace 💜</div> */}
        </div>
      </div>
    </footer>
  );
}