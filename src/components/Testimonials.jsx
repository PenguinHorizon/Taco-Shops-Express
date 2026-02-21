import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const testimonialData = [
  {
    name: "Nancy Vildomore",
    role: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Jack Anderson",
    role: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sarah Jenkins",
    role: "Food Critic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  }
]

const Testimonials = () => {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background Line Art - Dish/Pan Sketch Left */}
      <motion.div 
        initial={{ opacity: 0, x: -100, rotate: -30 }}
        whileInView={{ opacity: 0.03, x: 0, rotate: -12 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 -left-20 w-[500px] h-[500px] pointer-events-none select-none group"
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-900">
           {/* Detailed Pan Sketch */}
           <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="4" />
           <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
           <path d="M70 250 L-100 250" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
           <circle cx="200" cy="180" r="30" stroke="currentColor" strokeWidth="2" />
           <circle cx="300" cy="220" r="25" stroke="currentColor" strokeWidth="2" />
           <path d="M220 320 Q 250 280 280 320" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Background Line Art - Herbal/Ingredients Top Right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
        whileInView={{ opacity: 0.04, scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none select-none"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-900">
          <path d="M100 20 Q 120 60 100 100 T 100 180" stroke="currentColor" strokeWidth="2" />
          <path d="M100 60 Q 60 40 20 60" stroke="currentColor" strokeWidth="2" />
          <path d="M100 100 Q 140 80 180 100" stroke="currentColor" strokeWidth="2" />
          <path d="M100 140 Q 60 120 20 140" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-900 text-5xl md:text-6xl font-normal leading-tight mb-6"
        >
          Our Happy Customers
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg max-w-2xl mx-auto mb-16 opacity-80 leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-2.5 !h-2.5 !bg-slate-300 !opacity-100 mx-1.5 transition-all duration-300',
            bulletActiveClass: '!bg-slate-900 !w-4 rounded-full',
          }}
          className="pb-20 !overflow-visible"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto relative mt-20"
              >
                {/* Testimonial Card */}
                <div className="bg-[#FBFBFB] rounded-[50px] pt-24 pb-16 px-10 sm:px-20 border border-slate-50 shadow-sm relative transition-all duration-500 hover:shadow-xl hover:shadow-slate-100">
                  {/* Floating Avatar */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-8 border-white shadow-2xl overflow-hidden z-20">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed mb-10 opacity-90 italic">
                    "{item.text}"
                  </p>

                  <div>
                    <h4 className="text-slate-900 text-2xl font-bold tracking-tight">{item.name}</h4>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mt-2">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


export default Testimonials
