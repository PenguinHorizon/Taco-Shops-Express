import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">
      {/* Background Image Container */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Mexican Dish" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] mb-10"
          >
            <span className="font-medium opacity-90">A joyous eatery of</span> <br />
            <span className="text-white">Mexican Cuisine</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed mb-14 max-w-2xl opacity-80 tracking-wide"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-10"
          >
            <button className="px-12 py-5 border-2 border-white rounded-full text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
              Order Now
            </button>
            <div className="h-[1px] flex-grow max-w-[200px] bg-white/20 relative overflow-hidden hidden sm:block">
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}

export default Hero
