import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-3xl">🌮</span>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Taco<span className="text-orange-500">Express</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-600 hover:text-orange-500 font-semibold transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-orange-500 font-semibold transition-colors">Menu</a>
              <a href="#" className="text-slate-600 hover:text-orange-500 font-semibold transition-colors">Locations</a>
              <a href="#" className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-200 transition-all active:scale-95">
                Order Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
