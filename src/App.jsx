import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Accounts from './pages/Accounts.jsx'
import Cards from './pages/Cards.jsx'
import Loans from './pages/Loans.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  useEffect(() => {
    AOS.refreshHard()
  }, [location.pathname])

  const bareLayout = ['/login', '/signup'].includes(location.pathname)

  return (
    <div className="site">
      <ScrollToTop />
      {!bareLayout && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!bareLayout && <Footer />}
    </div>
  )
}
