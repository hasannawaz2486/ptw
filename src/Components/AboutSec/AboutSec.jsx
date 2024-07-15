import React from 'react'
import banner from '../../assets/Left.png'

const AboutSec = () => {
  return (
    <section className='aboutSec'>
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-lg-6">
                    <h2>About Us</h2>
                    <p>
                        Our team consists of highly skilled and certified professionals with years of experience in the cybersecurity industry. We bring a wealth of knowledge and expertise, ensuring that our clients receive the highest quality of service.
                    </p>
                </div>
                <div className="col-lg-6">
                    <div className="aboutBanner">
                        <img src={banner} alt="banner" />
                    </div>
                </div>
            </div>
            <div className="ourMission mt-5">
                <h2>Our Mission</h2>
                <p>Our mission is to protect organizations from cyber threats by providing comprehensive, thorough, and actionable security assessments. We believe that in today's interconnected world, robust cybersecurity is essential for the success and integrity of any business.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutSec