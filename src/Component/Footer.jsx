import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="social-media-links">
                    <Link style={{ textDecoration: "none", color: "white" }} to='https://www.facebook.com/?_rdc=1&_rdr#'><FaFacebook size={40} style={{ padding: "8px" }} /></Link>
                    <Link style={{ textDecoration: "none", color: "white" }} to='https://twitter.com/home'><FaTwitter size={40} style={{ padding: "8px" }} /></Link>
                    <Link style={{ textDecoration: "none", color: "white" }} to='https://www.instagram.com/'><FaInstagram size={40} style={{ padding: "8px" }} /></Link>
                </div>
                <p>World Travel © 2020, All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
