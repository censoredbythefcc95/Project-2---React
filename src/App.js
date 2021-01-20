import React from "react";
//Importing Router features
import { Route } from "react-router-dom";

import './App.css';
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
