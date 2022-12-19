import React from 'react'
import '../css/Hero.css'

function Hero() {
  return (
    <>
    <section className='hero'>
        <div className='container'>
            <h1>What is your <br/> favourite taste?</h1>
            <div className='hero-link'>
                <a href='/types' className='explore'>Choose</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero