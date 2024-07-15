import React from 'react'

import a1 from '../../assets/app1.png'
import a2 from '../../assets/app2.png'
import a3 from '../../assets/app3.png'
import a4 from '../../assets/app4.png'
import a5 from '../../assets/app5.png'

const OurApproach = () => {
  return (
    <section className='ourApproach'>
        <div className="container">
            <h2>Our Apporach</h2>
            <p>We follow a rigorous and methodical approach to penetration testing, adhering to industry standards and best practices. Our process includes:</p>
            <div className="row">
                <div className="col-lg-4">
                    <div className="ourApprCard">
                        <div className="ourApprCardImg">
                            <img src={a1} alt="a1" />
                        </div>
                        <h3>Planning and Reconnaissance</h3>
                        <p>Understanding your objectives and gathering information about your systems and networks.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ourApprCard">
                        <div className="ourApprCardImg">
                            <img src={a2} alt="a1" />
                        </div>
                        <h3>Exploitation</h3>
                        <p>Attempting to exploit identified vulnerabilities to determine their severity and potential impact.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ourApprCard">
                        <div className="ourApprCardImg">
                            <img src={a3} alt="a1" />
                        </div>
                        <h3>Scanning and Analysis</h3>
                        <p>Using advanced tools to identify potential vulnerabilities and assess their impact.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ourApprCard">
                        <div className="ourApprCardImg">
                            <img src={a4} alt="a1" />
                        </div>
                        <h3>Reporting</h3>
                        <p>Providing a detailed report with findings, risk assessments, and actionable recommendations to enhance your security posture.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ourApprCard">
                        <div className="ourApprCardImg">
                            <img src={a5} alt="a1" />
                        </div>
                        <h3>Remediation Support</h3>
                        <p>Assisting you in implementing the recommended security measures and re-testing to ensure effectiveness.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurApproach