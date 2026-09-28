import "./App.css";
import Header from "./components/Header/Header";
import StatsSection from "./components/StatsSection/StatsSection";
import Services from "./components/Services/Services";
import HowItWorksSection from "./components/Howitworks/HowItWorksSection";
import Whyus from "./components/Whyus/Whyus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <StatsSection />
      <Services />
      <HowItWorksSection />
      <Whyus />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
