import './App.css';
import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import Footer from "./components/Footer";
import HighLow from "./components/HighLow";
import CurrentTemperature from "./components/CurrentTemperature";
import LandingText from "./components/LandingText";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Location />
      <Footer />
      <HighLow />
      <CurrentTemperature />
      <LandingText />
    </div>
  );
}

export default App;
