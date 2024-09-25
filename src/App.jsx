import Header from "./components/header/Header";
import Hero from "./features/hero/Hero";
import "./index.css";
import CompanyLogos from "./features/company-logos/CompanyLogos";
import OurExpertise from "./features/expertise/OurExpertise";
import WeAreGlobal from "./features/we-are-global/WeAreGlobal";
const App = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <Hero />
      <CompanyLogos />
      <OurExpertise />
      <WeAreGlobal />
    </div>
  );
};

export default App;
