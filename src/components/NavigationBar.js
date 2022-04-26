import React from 'react'
import Rectangle1 from '../img/Rectangle 1.png';

// Built the navigation bar with bootstrap
function NavigationBar() {
  return (
    <section id="navbar">
        <nav className="navbar">
            <div className="container-fluid d-flex">
                <a href="#" className="navbar-brand"><img src={Rectangle1} alt="Rectangle 1" /></a>
                <ul className="navbar-right nav">
                    <li><a href="#" className="services">Services</a></li>
                    <li><a href="#" className="work">Work</a></li>
                    <li><a href="#" className="about">About</a></li>
                    <li><a href="#" className="contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </section>
  )
}

export default NavigationBar