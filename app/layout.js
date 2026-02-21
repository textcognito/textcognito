import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Textcognito",
  description: "Send anonymous messages",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white `}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b0e20] text-white selection:bg-[#D1C0EC] selection:text-[#1b0e20]`}
      >
        <Header/>
        <div >

        {children}
        </div>
      </body>
    </html>
  );
}
