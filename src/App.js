import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeroSection from './Components/HeroSection/HeroSection';
import ServicesSec from './Components/ServicesSec/ServicesSec';
import AboutSec from './Components/AboutSec/AboutSec';
import OurTeam from './Components/OurTeam/OurTeam';
import OurApproach from './Components/OurApproach/OurApproach';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <HeroSection />
        <ServicesSec />
        <AboutSec />
        <OurTeam />
        <OurApproach />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
