import React from 'react'

const OrderNowBanner = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
          alt="Grilled skewers background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Label Tag */}
        <span className="inline-block bg-[#D1D1D1]/20 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-[0.3em] font-medium px-6 py-2 rounded-full mb-8">
          our special
        </span>

        {/* Heading */}
        <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tight">
          Deal of the Day
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed mb-14 max-w-3xl opacity-80 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui tation laboris nisi ut aliquip ex ea eiusmod tempor incidunt ut labore commodo consequat.
        </p>

        {/* Button */}
        <button className="px-14 py-5 bg-white text-black font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white hover:border-white border-2 border-transparent transition-all duration-500 shadow-2xl transform active:scale-95">
          Order Now
        </button>
      </div>
    </section>
  )
}

export default OrderNowBanner
