import { useState, useEffect } from 'react';
import axios from 'axios';


const RandomBeer = () => {

    const [random, setRandom] = useState({})

    const fetchRandom = async () => {
        await axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((res) => {
            setRandom(res.data);
            console.log(res.data);
          })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchRandom();
      }, []);



    return(
        <div className='details'>
      <img className="picDetails" src={random.image_url} alt={'pic'} />
      <div className='nameatt'>
      <p style={{fontSize:"27px"}}>{random.name}</p><p style={{color:"lightgray",fontSize:"23px", fontWeight:"bolder"}}>{random.attenuation_level}</p>
      </div>
      <div className='tagfirst'>
      <p style={{color:"grey",fontSize:"15px", fontWeight:"bold"}}>{random.tagline}</p><p style={{fontWeight:"bolder" , fontSize:"11px"}}>{random.first_brewed}</p>
      </div>
      <p>{random.description}</p>
      <p style={{color:"grey",fontSize:"12px", fontWeight:"bolder"}}>{random.contributed_by}</p>
    </div>
    )
}

export default RandomBeer