import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import SecondSection from './components/secondSection/SecondSection';
import Supercharge from './assets/supercharge.svg';
import Optimise from './assets/optimise.svg';
import Enable from './assets/enable.svg';
import Card from './components/common/Card';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import HowItWorks from './components/howItWorks/HowItWorks';

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
      {/* <section>
        <SecondSection
          title1="Organise blood test data"
          title2="without the manual hassle"
          para1="Streamline, standardise and make sense of your users’ blood test data with Terra API’s "
          para2="blood biomarker API."
          isImg={true}
        />
      </section> */}
      <section>
        <SecondSection
          title1="Simplify blood report"
          title2="management for all use cases"
          para1="No more time wasted on manual data management. Get organised, standardised"
          para2="blood report data delivered seamlessly to your app for all use cases."
          isImg={false}
        />
        <div className="card-container">
          {cardData.map((card, i) => {
            return (
              <Card
                key={i}
                title={card.title}
                para={card.para}
                img={card.img}
                index={i}
              />
            );
          })}
        </div>
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
