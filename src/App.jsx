import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
    <div className="flex flex-col min-h-screen">
     
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>


      <main className="flex-grow pt-16 pb-16 overflow-y-auto">
        <Manager />
      </main>

      
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
