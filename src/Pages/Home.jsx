import React from 'react'
import HeroSection from '../Component/HeroSection.jsx'
import HeroSection2 from '../Component/HeroSection2.jsx'
import Footer from '../Component/Footer.jsx'
import Navbar from '../Component/Navbar.jsx'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection />
            <HeroSection2 />
            <Footer />
        </div>
    )
}

export default Home
