import React from 'react'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Authentic Tacos <br />
              <span className="text-orange-500">Delivered Fresh</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 font-medium">
              Experience the vibrant flavors of Mexico with our handcrafted tacos. From sizzling carne asada to spicy al pastor, we bring the fiesta to you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all active:scale-95 leading-none">
                Get Your Tacos Now
              </button>
              <a href="#" className="text-lg font-bold leading-6 text-slate-900 flex items-center gap-2 group">
                View Full Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative -m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="aspect-[16/9] rounded-lg bg-orange-50 flex items-center justify-center border-2 border-dashed border-orange-200 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-rose-100 opacity-50"></div>
                 <div className="z-10 text-center animate-bounce-slow">
                    <span className="text-8xl">🌮</span>
                    <p className="mt-4 text-orange-900 font-black text-2xl uppercase tracking-widest">Premium Food Section</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Fast Delivery</h3>
              <p className="text-slate-600">Hot and fresh tacos at your door in under 30 minutes. Guaranteed.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">🌿</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Fresh Ingredients</h3>
              <p className="text-slate-600">We source our produce from local farmers to ensure peak flavor.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏆</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Top Rated</h3>
              <p className="text-slate-600">Voted the best taco shop in the city for three years running.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
