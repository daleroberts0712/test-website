import React from 'react'
import image1 from '../img/image 1.png'
import Rectangle4 from '../img/Rectangle 4.png'
import image2 from '../img/image 2.png'

function HeroImage() {
  return (
      // The Hero Showcase (Intro) //
    <section id="hero-image" className="d-flex">
        <div className="container text">
            <h3>Soul Remedi App</h3>
            <h2>Making Feng Shui Accessible</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima neque soluta vitae asperiores incidunt cupiditate tempore obcaecati quisquam libero.</p>
        </div>
        <div className="image-display">
            <img src={image1} alt="image1" className="image1" />
            <img src={Rectangle4} alt="Rectangle4" className="rectangle4" />
            <img src={image2} alt="image2" className="image2" />
        </div>
    </section>
  )
}

export default HeroImage