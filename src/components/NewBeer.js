import { useState, useEffect } from "react";
import axios from "axios";

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
    .then(res => {
        if (res.status === 200) {
          console.log('Beer created successfully');
        } else {
          console.log('Error creating beer');
        }
      })
      .catch(error => console.log(error));
  }

  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <form className="myForm" onSubmit={handleSubmit}>
      <label>
        <p className="lab">Name</p>{<br></br>}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">Tagline</p>{<br></br>}
        <input
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">Description</p>{<br></br>}
        <input
          style={{height:"200px"}}
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">First Brewed</p>{<br></br>}
        <input
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">Brewers Tips</p>{<br></br>}
        <input
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">Attenuation Level</p>{<br></br>}
        <input
          type="number"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
          required
        />
      </label>
      <label>
      <p className="lab">Contributed By</p>{<br></br>}
        <input
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">ADD NEW</button>
    </form>
  );
};

export default NewBeer;
