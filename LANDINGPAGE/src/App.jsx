import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="design"></div>
    </div>
  );
}

export default App;
