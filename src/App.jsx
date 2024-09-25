import Header from "./components/header/Header";
import Hero from "./features/hero/Hero";
import "./index.css";
const App = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
