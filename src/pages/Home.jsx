import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import MexicanCuisine from '../components/MexicanCuisine'
import Specialities from '../components/Specialities'
import OrderNowBanner from '../components/OrderNowBanner'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      
      {/* Quick Features Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Fast Delivery</h3>
              <p className="text-slate-600">Hot and fresh tacos at your door in under 30 minutes. Guaranteed.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">🌿</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Fresh Ingredients</h3>
              <p className="text-slate-600">We source our produce from local farmers to ensure peak flavor.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏆</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Top Rated</h3>
              <p className="text-slate-600">Voted the best taco shop in the city for three years running.</p>
            </div>
          </div>
        </div>
      </section>

      <MexicanCuisine />
      <Specialities />
      <OrderNowBanner />
      <Testimonials />
    </MainLayout>
  )
}

export default Home
