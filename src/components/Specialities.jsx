import React from 'react'
import { motion } from 'framer-motion'

const specialityDishes = [
  {
    title: "Lumpia with Sauce",
    price: "$12",
    description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Fish and Veggie",
    price: "$12",
    description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Tofu Chili",
    price: "$12",
    description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Egg and Cucumber",
    price: "$12",
    description: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
  }
]

const Specialities = () => {
  return (
    <section className="bg-[#FBFBFB] py-24 sm:py-32 relative overflow-hidden">
      {/* Background Herbal SVG Animations */}
      <motion.div 
        initial={{ opacity: 0, rotate: -45 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 pointer-events-none select-none"
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"/><path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/></svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-[#444] text-white text-[10px] uppercase tracking-[0.3em] font-medium px-5 py-2 rounded-full mb-6"
        >
          authentic cuisine
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-900 text-5xl md:text-6xl font-normal leading-tight mb-6"
        >
          Our Specialities
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 text-lg max-w-2xl mx-auto mb-20 opacity-80 leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialityDishes.map((dish, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col items-center"
            >
              {/* Card Body */}
              <div className="bg-white rounded-[40px] pt-24 pb-12 px-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative mt-16 w-full group-hover:shadow-2xl group-hover:shadow-slate-200 transition-all duration-500">
                {/* Floating Image Container */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-44 h-44 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="relative w-full h-full rounded-full border-[10px] border-white shadow-2xl overflow-hidden transform transition-transform duration-500 ease-out"
                    >
                        <img 
                            src={dish.image} 
                            alt={dish.title} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {/* Price Badge */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.15 + 0.3 }}
                      className="absolute top-10 -right-2 bg-[#111] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-lg z-30 transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {dish.price}
                    </motion.div>
                </div>

                <h3 className="text-slate-900 text-xl font-extrabold mb-4 tracking-tight">
                  {dish.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto opacity-90">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Specialities
