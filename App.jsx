import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SustainPay from './pages/SustainPay'
import Login from './pages/Login'
import Register from './pages/Register'
import Ecopoint from './pages/EcoPoint'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import DashBoard from './pages/DashBoard'

function App() {
  useEffect(() => {
    axios.get('http://localhost:5001/api/test')
      .then(res => {
        console.log(res.data); // Logs: { message: 'Hello from the backend!' }
      })
      .catch(err => {
        console.error('Error fetching from backend:', err);
      });
  }, []);
  return (
    <Router>
      {/* Full-page flex layout */}
      <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/your-bg.jpg')" }}>

        {/* Navbar stays at top */}
        <Navbar />

        {/* Main content area grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sustainpay" element={<SustainPay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ecopoint" element={<Ecopoint />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
