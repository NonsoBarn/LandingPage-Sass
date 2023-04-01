import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <div className="design"></div>
      <div className="design2"></div>
    </div>
  );
}

export default App;
