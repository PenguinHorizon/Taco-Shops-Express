import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Opening Hours */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🌮</span>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-widest leading-none">TAQUEROS</h3>
                  <p className="text-[8px] uppercase tracking-[0.4em] opacity-60 mt-1">taste of mexico</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .
                <a href="#" className="text-white hover:underline ml-1">Learn more</a>
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 opacity-80">Opening Hours</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-400 text-xs mb-2">Monday - Friday</p>
                  <p className="text-sm font-medium">8:00 am to 9:00 pm</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-2">Saturday</p>
                  <p className="text-sm font-medium">8:00 am to 9:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 opacity-80">Quick Links</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Main dishes</a></li>
            </ul>
          </div>

          {/* Dishes */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 opacity-80">Dishes</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Fish & Viggies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Tofu Chili</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Egg & Cucumber</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Lumpia w/Suace</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:pl-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 opacity-80">Follow Us</h4>
            <div className="flex items-center gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <Facebook size={18} className="group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <Instagram size={18} className="group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <Twitter size={18} className="group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} TAQUEROS. All Right Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
