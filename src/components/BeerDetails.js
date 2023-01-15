import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetails = () => {
  const [beer, setBeer] = useState([]);

  let {_id} = useParams()

  const fetchDetails = async () => {
    await axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then((res) => {
        setBeer(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDetails();
  }, []);


  return (
    <div className='details'>
      <img className="picDetails" src={beer.image_url} alt={'pic'} />
      <div className='nameatt'>
      <p style={{fontSize:"27px"}}>{beer.name}</p><p style={{color:"lightgray",fontSize:"23px", fontWeight:"bolder"}}>{beer.attenuation_level}</p>
      </div>
      <div className='tagfirst'>
      <p style={{color:"grey",fontSize:"15px", fontWeight:"bold"}}>{beer.tagline}</p><p style={{fontWeight:"bolder" , fontSize:"11px"}}>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p style={{color:"grey",fontSize:"12px", fontWeight:"bolder"}}>{beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
