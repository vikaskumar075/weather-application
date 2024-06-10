import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [city, setCity]= useState("");
  const [data, setData]= useState(null);

  useEffect(()=>{
    const fetchdata= async ()=>{
      const {data} = await axios.get(`https://weather1-omega.vercel.app/api/v1/my-weather`);
      // console.log(data);
      setData(data);
  }
  fetchdata();
  },[])
  
  return (
    <div >
      <Navbar
        city={city}
        setCity= {setCity}
        setData= {setData}
      />
      <Home 
        data= {data}
      />
    </div>
  );
}

export default App;
