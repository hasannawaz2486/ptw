import React from 'react'
import gif from '../../assets/herogif.gif'

const HeroSection = () => {
  return (
    <section className='heroSec'>
        <div className='container'>
            <h1>Penetration Testing</h1>
            <p>
                Our mission is to protect organizations from cyber threats by providing comprehensive, thorough, and actionable security assessments.
            </p>
            <div className='heroGif text-center'>
               <img src={gif} alt="gif" />
            </div>
        </div>

        
    </section>
  )
}

export default HeroSection