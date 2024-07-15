import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import s1 from '../../assets/Picture.png'
import s2 from '../../assets/Frame 2317.png'
import s3 from '../../assets/Picture(1).png'

const OurTeam = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <section className='ourTeam'>
        <div className='container'>
            <h2>Our Team</h2>
            <p>
                Welcome to [Company Name], We are a dedicated team of security experts specializing in penetration testing to help businesses identify and mitigate vulnerabilities in their digital infrastructure.
            </p>

            <Carousel responsive={responsive}>
                <div>
                    <div className="sliderImg">
                        <img src={s1} alt="s1" />
                    </div>
                    <h4>Anna Shenila</h4>
                    <p>Senior Tester</p>
                 </div>
                <div>
                    <div className="sliderImg">
                        <img src={s2} alt="s1" />
                    </div>
                    <h4>John Enoch</h4>
                    <p>Senior Tester</p>
                </div>
                <div>
                    <div className="sliderImg">
                        <img src={s3} alt="s1" />
                    </div>
                    <h4>Maria Jakob </h4>
                    <p>Senior Tester</p>
                </div>
                <div>
                    <div className="sliderImg">
                        <img src={s1} alt="s1" />
                    </div>
                    <h4>Anna Shenila</h4>
                    <p>Senior Tester</p>
                </div>
                <div>
                    <div className="sliderImg">
                        <img src={s2} alt="s1" />
                    </div>
                    <h4>John Enoch</h4>
                    <p>Senior Tester</p>
                </div>
                <div>
                    <div className="sliderImg">
                        <img src={s3} alt="s1" />
                    </div>
                    <h4>Maria Jakob </h4>
                    <p>Senior Tester</p>
                </div>
            </Carousel>
        </div>

    </section>
  )
}

export default OurTeam