
import React, {useState} from 'react';
import axios from "axios"
import './App.css';

//set local storage json.stringlify 

function App() {
  // get data using axios each time the user change the type
  // get randome activity each time the user submit 
  // deal with favoritess
  const [type,setType]= useState("education")
  const [data,setData]=useState([])
  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  // Make a request for a user with a given ID
  const getData= async(value)=>{ 
    console.log(type)
    await axios.get(`http://www.boredapi.com/api/activity?type=${value}`)
      .then(function (response) {
        // handle success
        console.log(response.data);

        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      })
  };
  // useEffect(() => {
  //   getData();
  // },[getData]);
  const updateType =(t)=>{
    setType(t)
    getData(t)
}
  return (

    <div className="App">
      <label >type of activity : </label>
      <select name="types" id="pet-type" onChange={e=>updateType(e.target.value)}> 
        {types.map((t) => (
          <option value={t} key ={t} >{t}</option>
        ))}
      </select>
      <button  onClick={e=>getData(type)}>change</button>
      <h1>{type}</h1>
      <h1>{data.activity}</h1>
    </div>
  );
}

export default App;