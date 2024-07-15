import React from 'react'

import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'


const ServicesSec = () => {
  return (
    <section className='serviceSec'>
        <div className='container'>
            <h2>Our Services</h2>
            <p>
                With years of experience in the cybersecurity industry. We bring a wealth of knowledge and expertise, ensuring that our clients receive the highest quality of service.. We offer a wide range of penetration testing services, including
            </p>
            <div className='row'>
                <div className="col-lg-4">
                    <div className="serviceCard">
                        <div className="serviceCardImg">
                            <img src={card1} alt="card1" />
                        </div>
                        <div className='serviceCardText'>
                            <div>
                                <h3>Network Penetration Testing</h3>
                                <p>Assessing your network's defenses to identify potential entry points and vulnerabilities.</p>
                            </div>
                            <a href="/">Learn More 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M16.2559 10.6569L12.3059 6.70692C12.1238 6.51832 12.023 6.26571 12.0252 6.00352C12.0275 5.74132 12.1327 5.49051 12.3181 5.3051C12.5035 5.11969 12.7543 5.01452 13.0165 5.01224C13.2787 5.00997 13.5313 5.11076 13.7199 5.29292L19.3769 10.9499C19.4701 11.0426 19.5441 11.1527 19.5945 11.2741C19.645 11.3954 19.671 11.5255 19.671 11.6569C19.671 11.7883 19.645 11.9184 19.5945 12.0398C19.5441 12.1611 19.4701 12.2713 19.3769 12.3639L13.7199 18.0209C13.6277 18.1164 13.5173 18.1926 13.3953 18.245C13.2733 18.2974 13.1421 18.325 13.0093 18.3262C12.8765 18.3273 12.7449 18.302 12.622 18.2517C12.4991 18.2015 12.3874 18.1272 12.2935 18.0333C12.1996 17.9394 12.1254 17.8278 12.0751 17.7049C12.0248 17.582 11.9995 17.4503 12.0007 17.3175C12.0018 17.1847 12.0294 17.0535 12.0818 16.9315C12.1342 16.8095 12.2104 16.6992 12.3059 16.6069L16.2559 12.6569H6.66992C6.40471 12.6569 6.15035 12.5516 5.96282 12.364C5.77528 12.1765 5.66992 11.9221 5.66992 11.6569C5.66992 11.3917 5.77528 11.1373 5.96282 10.9498C6.15035 10.7623 6.40471 10.6569 6.66992 10.6569H16.2559Z" fill="#1D4ED8"/>    
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="serviceCard">
                        <div className="serviceCardImg">
                            <img src={card2} alt="card1" />
                        </div>
                        <div className='serviceCardText'>
                            <div>
                                <h3>Mobile App Penetration Testing</h3>
                                <p>Ensuring the security of your mobile applications against the latest threats.</p>
                            </div>
                            <a href="/">Learn More 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M16.2559 10.6569L12.3059 6.70692C12.1238 6.51832 12.023 6.26571 12.0252 6.00352C12.0275 5.74132 12.1327 5.49051 12.3181 5.3051C12.5035 5.11969 12.7543 5.01452 13.0165 5.01224C13.2787 5.00997 13.5313 5.11076 13.7199 5.29292L19.3769 10.9499C19.4701 11.0426 19.5441 11.1527 19.5945 11.2741C19.645 11.3954 19.671 11.5255 19.671 11.6569C19.671 11.7883 19.645 11.9184 19.5945 12.0398C19.5441 12.1611 19.4701 12.2713 19.3769 12.3639L13.7199 18.0209C13.6277 18.1164 13.5173 18.1926 13.3953 18.245C13.2733 18.2974 13.1421 18.325 13.0093 18.3262C12.8765 18.3273 12.7449 18.302 12.622 18.2517C12.4991 18.2015 12.3874 18.1272 12.2935 18.0333C12.1996 17.9394 12.1254 17.8278 12.0751 17.7049C12.0248 17.582 11.9995 17.4503 12.0007 17.3175C12.0018 17.1847 12.0294 17.0535 12.0818 16.9315C12.1342 16.8095 12.2104 16.6992 12.3059 16.6069L16.2559 12.6569H6.66992C6.40471 12.6569 6.15035 12.5516 5.96282 12.364C5.77528 12.1765 5.66992 11.9221 5.66992 11.6569C5.66992 11.3917 5.77528 11.1373 5.96282 10.9498C6.15035 10.7623 6.40471 10.6569 6.66992 10.6569H16.2559Z" fill="#1D4ED8"/>    
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="serviceCard">
                        <div className="serviceCardImg">
                            <img src={card3} alt="card1" />
                        </div>
                        <div className='serviceCardText'>
                            <div>
                                <h3>Web App Penetration Testing</h3>
                                <p>Evaluating the security of your web applications to prevent data breaches and unauthorized access.</p>
                            </div>
                            <a href="/">Learn More 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M16.2559 10.6569L12.3059 6.70692C12.1238 6.51832 12.023 6.26571 12.0252 6.00352C12.0275 5.74132 12.1327 5.49051 12.3181 5.3051C12.5035 5.11969 12.7543 5.01452 13.0165 5.01224C13.2787 5.00997 13.5313 5.11076 13.7199 5.29292L19.3769 10.9499C19.4701 11.0426 19.5441 11.1527 19.5945 11.2741C19.645 11.3954 19.671 11.5255 19.671 11.6569C19.671 11.7883 19.645 11.9184 19.5945 12.0398C19.5441 12.1611 19.4701 12.2713 19.3769 12.3639L13.7199 18.0209C13.6277 18.1164 13.5173 18.1926 13.3953 18.245C13.2733 18.2974 13.1421 18.325 13.0093 18.3262C12.8765 18.3273 12.7449 18.302 12.622 18.2517C12.4991 18.2015 12.3874 18.1272 12.2935 18.0333C12.1996 17.9394 12.1254 17.8278 12.0751 17.7049C12.0248 17.582 11.9995 17.4503 12.0007 17.3175C12.0018 17.1847 12.0294 17.0535 12.0818 16.9315C12.1342 16.8095 12.2104 16.6992 12.3059 16.6069L16.2559 12.6569H6.66992C6.40471 12.6569 6.15035 12.5516 5.96282 12.364C5.77528 12.1765 5.66992 11.9221 5.66992 11.6569C5.66992 11.3917 5.77528 11.1373 5.96282 10.9498C6.15035 10.7623 6.40471 10.6569 6.66992 10.6569H16.2559Z" fill="#1D4ED8"/>    
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="serviceCard">
                        <div className="serviceCardImg">
                            <img src={card4} alt="card1" />
                        </div>
                        <div className='serviceCardText'>
                            <div>
                                <h3>Social Engineering</h3>
                                <p>Testing your organization's resilience against social engineering attacks, including phishing and pretexting.</p>
                            </div>
                            <a href="/">Learn More 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M16.2559 10.6569L12.3059 6.70692C12.1238 6.51832 12.023 6.26571 12.0252 6.00352C12.0275 5.74132 12.1327 5.49051 12.3181 5.3051C12.5035 5.11969 12.7543 5.01452 13.0165 5.01224C13.2787 5.00997 13.5313 5.11076 13.7199 5.29292L19.3769 10.9499C19.4701 11.0426 19.5441 11.1527 19.5945 11.2741C19.645 11.3954 19.671 11.5255 19.671 11.6569C19.671 11.7883 19.645 11.9184 19.5945 12.0398C19.5441 12.1611 19.4701 12.2713 19.3769 12.3639L13.7199 18.0209C13.6277 18.1164 13.5173 18.1926 13.3953 18.245C13.2733 18.2974 13.1421 18.325 13.0093 18.3262C12.8765 18.3273 12.7449 18.302 12.622 18.2517C12.4991 18.2015 12.3874 18.1272 12.2935 18.0333C12.1996 17.9394 12.1254 17.8278 12.0751 17.7049C12.0248 17.582 11.9995 17.4503 12.0007 17.3175C12.0018 17.1847 12.0294 17.0535 12.0818 16.9315C12.1342 16.8095 12.2104 16.6992 12.3059 16.6069L16.2559 12.6569H6.66992C6.40471 12.6569 6.15035 12.5516 5.96282 12.364C5.77528 12.1765 5.66992 11.9221 5.66992 11.6569C5.66992 11.3917 5.77528 11.1373 5.96282 10.9498C6.15035 10.7623 6.40471 10.6569 6.66992 10.6569H16.2559Z" fill="#1D4ED8"/>    
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="serviceCard">
                        <div className="serviceCardImg">
                            <img src={card5} alt="card1" />
                        </div>
                        <div className='serviceCardText'>
                            <div>
                                <h3>Wireless Network Testing</h3>
                                <p>Identifying weaknesses in your wireless networks to prevent unauthorized access.</p>
                            </div>
                            <a href="/">Learn More 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M16.2559 10.6569L12.3059 6.70692C12.1238 6.51832 12.023 6.26571 12.0252 6.00352C12.0275 5.74132 12.1327 5.49051 12.3181 5.3051C12.5035 5.11969 12.7543 5.01452 13.0165 5.01224C13.2787 5.00997 13.5313 5.11076 13.7199 5.29292L19.3769 10.9499C19.4701 11.0426 19.5441 11.1527 19.5945 11.2741C19.645 11.3954 19.671 11.5255 19.671 11.6569C19.671 11.7883 19.645 11.9184 19.5945 12.0398C19.5441 12.1611 19.4701 12.2713 19.3769 12.3639L13.7199 18.0209C13.6277 18.1164 13.5173 18.1926 13.3953 18.245C13.2733 18.2974 13.1421 18.325 13.0093 18.3262C12.8765 18.3273 12.7449 18.302 12.622 18.2517C12.4991 18.2015 12.3874 18.1272 12.2935 18.0333C12.1996 17.9394 12.1254 17.8278 12.0751 17.7049C12.0248 17.582 11.9995 17.4503 12.0007 17.3175C12.0018 17.1847 12.0294 17.0535 12.0818 16.9315C12.1342 16.8095 12.2104 16.6992 12.3059 16.6069L16.2559 12.6569H6.66992C6.40471 12.6569 6.15035 12.5516 5.96282 12.364C5.77528 12.1765 5.66992 11.9221 5.66992 11.6569C5.66992 11.3917 5.77528 11.1373 5.96282 10.9498C6.15035 10.7623 6.40471 10.6569 6.66992 10.6569H16.2559Z" fill="#1D4ED8"/>    
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ServicesSec