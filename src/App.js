import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import Supercharge from './assets/supercharge.svg';
import Optimise from './assets/optimise.svg';
import Enable from './assets/enable.svg';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import HowItWorks from './components/howItWorks/HowItWorks';
import OrganiseBloodTest from './components/organiseBloodTest/OrganiseBloodTest';
import SimplifyBlood from './components/simplifyBlood/SimplifyBlood';

function App() {

  const cardData = [
    {
      title: "Supercharge Preventive Health Measures",
      para: "Empower your users with personalized health insights by integrating biomarker data such as thyroid markers, liver enzymes, and iron levels",
      img: Supercharge,
    },
    {
      title: "Optimise nutrition with key biomarkers",
      para: "Turn complex blood report data into actionable recommendations for better nutrition. Help your users discover how their lifestyle choices shape their health.",
      img: Optimise,
    },
    {
      title: "Enable Early Disease Risk Detection",
      para: "Spot early warning signs before they become critical. Guide your users through health changes with blood biomarker insights for better outcomes.",
      img: Enable,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section>
        <Header />
      </section>
      <section className="organise-section-main">
        <OrganiseBloodTest />
      </section>
      <section className="simplify-section-main">
        <SimplifyBlood />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section className="banner-section">
        <Banner />
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
