import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🌮</span>
              <span className="font-extrabold text-xl tracking-tight">
                Taco<span className="text-orange-500">Express</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Serving the authentic taste of Mexico right at your doorstep. Fresh ingredients, bold flavors, every single time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span>📍</span> 123 Taco Street, Spice City
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span> (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span> hello@tacoexpress.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Get the latest spicy deals!</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
                ➔
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Taco Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
