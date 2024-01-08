import { useState } from 'react';
import './App.css';
import Movies from './Components/movies';

function App() {
  const [search,usesearch] = useState("");
  const [data,usedata] = useState([]);
   const handlesearch=()=>{
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=64d181b6`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      usedata(data);
    })
   }
   
   
  return (
   <>
   <div className='input'>
   <input
   type='text'
   placeholder='Search movies here'
   onChange={(e)=>usesearch(e.target.value)}
   />
   <button onClick={handlesearch}>Search</button>
   </div>
   <Movies data={data}/>
   
   </>
  );
}

export default App;
