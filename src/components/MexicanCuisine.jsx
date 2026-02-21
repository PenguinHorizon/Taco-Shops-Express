import React from "react";
import { motion } from 'framer-motion';

const MexicanCuisine = () => {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black px-4 py-1.5 rounded-full mb-8">
              our story
            </span>
            <h2 className="text-slate-900 text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight mb-10">
              A joyous eatery culture of <br />
              <span className="font-medium">Mexican cuisine</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation laboris nisi ut
              aliquip ex ea eiusmod tempor incidunt ut labore commodo consequat.
            </p>

            {/* Chef Profile */}
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-xl bg-slate-100"
              >
             <img
      src="https://images.unsplash.com/photo-1577214714282-3c22421074a3?auto=format&fit=crop&q=80&w=400"
      alt="Chef Jack Barton"
      className="w-full h-full object-cover"
    />
              </motion.div>
              <div>
                <h4 className="text-slate-900 text-xl font-bold tracking-tight">
                  Jack Barton
                </h4>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mt-1">
                  Master Chef
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 items-start">
              {/* Column 1 */}
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800"
                    alt="Chef plating"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
                    alt="Tacos"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
              </div>
              {/* Column 2 */}
              <div className="space-y-8 pt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800"
                    alt="Mexican Dish"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
                    alt="Chef at work"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MexicanCuisine;
