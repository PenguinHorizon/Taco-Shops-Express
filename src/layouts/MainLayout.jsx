import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-600">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
