import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css"

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [query, SetQuery] = useState("")

  const fetchBeers = async (query) => {
    await axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((res) => {
        setBeers(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchBeers(query);
  }, [query]);

  return (
    <>
    <div>
    <input className="beersInput" placeholder="Search a beer" type="text" value={query} onChange={(e)=> SetQuery(e.target.value)}/>
    </div>
    <div>
      {beers.map((beer) => (
        
        <NavLink
          to={`/beers/${beer._id}`}
          style={{ textDecoration: "none", color: "black" }}>
          <div className="listBeer" key={beer._id}>
            <div>
              <img className="pic"  src={beer.image_url} alt="pic" />
            </div>
            <div className="infos">
              <h2>{beer.name}</h2>
              <p className="tagline">{beer.tagline}</p>
              <p><span style={{fontWeight:"bolder"}}>Created by:</span> {beer.contributed_by}</p>
            </div>
          </div>
          </NavLink>
      ))}
    </div>
    </>
  );
};

export default Beers;


