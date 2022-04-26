import React from 'react' 
import iphone1 from '../img/Apple iPhone X Silver 1.png'
import iphone2 from '../img/Apple iPhone X Silver 2.png'
import iphone3 from '../img/Apple iPhone X Silver 3.png'
import iphone4 from '../img/Apple iPhone X Silver 4.png'
import rectangle10 from '../img/Rectangle 10.png'
import rectangle12 from '../img/Rectangle 12.png'
import rectangle13 from '../img/Rectangle 13.png'
import rectangle14 from '../img/Rectangle 14.png'
import rectangle15 from '../img/Rectangle 15.png'
import rectangle16 from '../img/Rectangle 16.png'

function Body() {
  return (
    <>
    {/* How we do it */}
    <section id="how-we-did-it">
        <h3>How we did it</h3>
        <div className="container d-flex">
            <div className="discovery">
                <h1>01</h1>
                <h4>Discovery</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam id dolor, eius perspiciatis voluptas dolore maiores iste beatae suscipit assumenda?</p>
            </div>
            <div className="plan">
                <h1>02</h1>
                <h4>Plan</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam id dolor, eius perspiciatis voluptas dolore maiores iste beatae suscipit assumenda?</p>
            </div>
            <div className="design">
                <h1>03</h1>
                <h4>Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam id dolor, eius perspiciatis voluptas dolore maiores iste beatae suscipit assumenda?</p>
            </div>
            <div className="build">
                <h1>04</h1>
                <h4>Build</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam id dolor, eius perspiciatis voluptas dolore maiores iste beatae suscipit assumenda?</p>
            </div>
        </div>
    </section>

    {/* on-mobile */}
    <section id="on-mobile">
        <div className="mobile-images">
            <img src={rectangle12} alt="Rectangle12" className="rectangle12" />
            <img src={iphone1} alt="Apple iPhone X Silver 1" className="iphone1" />
            <img src={iphone2} alt="Apple iPhone X Silver 2" className="iphone2" />
        </div>
        <div className="on-mobile-text">
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel omnis sapiente! Quasi eligendi numquam, quis optio aliquid blanditiis suscipit?</p>
            <img src={rectangle14} alt="Rectangle 14" className="rectangle14" />
            <img src={rectangle15} alt="Rectangle 15" className="rectangle15" />
            <img src={rectangle16} alt="Rectangle 16" className="rectangle16" />
        </div>
    </section>

    {/* mobile-app */}
    <section id="mobile-app">
        <img src={rectangle13} alt="Rectangle 13" className="rectangle13" />
        <div className="mobile-app-text">
            <h2>Lorem ipsum dolor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius, similique ducimus, eos quisquam esse quia ipsa aliquid natus, voluptate minima optio deserunt in!</p>
            <img src={rectangle10} alt="Rectangle 10" className="rectangle10" />
            <a href="#" className="app-store">App Store</a>
        </div>
        <div className="mobile-app-images">
            <img src={iphone3} alt="Apple iPhone X Silver 3" className="iphone3" />
            <img src={iphone4} alt="Apple iPhone X Silver 4" className="iphone4" />
        </div>
    </section>

    </>
  )
}

export default Body