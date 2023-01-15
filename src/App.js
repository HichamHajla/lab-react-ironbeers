import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Header from "./components/Header";
import BeerDetails from "./components/BeerDetails";



function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:_id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
