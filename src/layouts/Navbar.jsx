import React from 'react'
import { Phone, Mail, Instagram, Facebook, Twitter, Chrome, ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#111] text-white/70 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:(351)5630829" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> (351) 563 0829
            </a>
            <a href="mailto:info@taqueros.com" className="flex items-center gap-2 hover:text-white transition-colors uppercase">
              <Mail size={14} /> info@taqueros.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Get in Touch</span>
            <div className="flex items-center gap-4">
              <Facebook size={14} className="cursor-pointer hover:text-white transition-colors" />
              <Twitter size={14} className="cursor-pointer hover:text-white transition-colors" />
              <Instagram size={14} className="cursor-pointer hover:text-white transition-colors" />
              <Chrome size={14} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black/95 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
               <div className="text-white">
                  <h1 className="text-2xl font-bold tracking-tighter uppercase leading-none">Taqueros</h1>
                  <p className="text-[8px] tracking-[0.2em] font-light uppercase text-gray-400 mt-1">Taste of Mexico</p>
               </div>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center gap-10">
                <a href="#hero" className="text-white text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Home</a>
                <a href="#our-story" className="text-white text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Our Story</a>
                <a href="#menu" className="text-white text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Our Menu</a>
                <a href="#menu" className="text-white text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Specialities</a>
                <a href="#hero" className="text-white text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Contact</a>
                <a href="#menu" className="bg-white text-black px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/5">
                  Order Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
