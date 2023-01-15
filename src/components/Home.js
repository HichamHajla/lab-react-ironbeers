import { Link } from "react-router-dom";
import img1 from "../assets/beers.png";
import img2 from "../assets/random-beer.png";
import img3 from "../assets/new-beer.png";

const Home = () => {
  return (
    <div style={{ paddingLeft: "2px" }}>
      <Link to="/beers" style={{ textDecoration: "none", color: "black" }}>
        <div>
          <img style={{ width: "100%" }} src={img1} alt="beers" />
          <h1>All Beers</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>
      <Link
        to="/random-beer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <img style={{ width: "100%" }} src={img2} alt="random" />
          <h1>Random Beer</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>
      <Link to="/new-beer" style={{ textDecoration: "none", color: "black" }}>
        <div>
          <img style={{ width: "100%" }} src={img3} alt="newBeer" />
          <h1>New Beer</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
