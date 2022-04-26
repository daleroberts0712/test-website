import React from 'react'
import ellipse4 from '../img/Ellipse 4.png'
import ellipse5 from '../img/Ellipse 5.png'
import ellipse6 from '../img/Ellipse 6.png'
import rectangle3 from '../img/Rectangle 3.png'
import rectangle12 from '../img/Rectangle 12.png'

function Contact() {
  return (
    <section id="contact">
      <img src={rectangle3} alt="Rectangle 3" className="rectangle3" />
      <div className="contact-information">
        <h2>Get in touch</h2>
        <img src={ellipse4} alt="Ellipse 4" className="ellipse4" /><p className="email-address">info@endcrypt3d.co.za</p>
        <img src={ellipse5} alt="Ellipse 5" className="ellipse5" /><p className="contact-number">+27 000 0000</p>
        <img src={ellipse6} alt="Ellipse 6" className="ellipse6" /><p className="work-address"> Work in Progress,5th Floor,Woodstock Exchange,68 Albert Rd, Woodstock,Cape Town,7925</p>
      </div>
      <div className="message">
        <h4 className="name">Name</h4>
        <p className="line3"></p>

        <h4 className="email">Email</h4>
        <p className="line4"></p>

        <h4 className="message-input">Message</h4>
        <p className="line5"></p>

        <img src={rectangle12} alt="Rectangle 12" className="rectangle12" />
        <a href="#" className="send-message">Send Message</a>
      </div>

      <div className="copyright">
        <p>Endcrypt3d Pty Ltd 2020@</p>
      </div>
    </section>
  )
}

export default Contact