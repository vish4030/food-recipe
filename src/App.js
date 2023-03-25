import {Recipe} from "./components/Recipe";
import { useEffect, useState } from "react";
import { fetchData } from "./server";

export const App = () =>{
  const[data, setData] = useState([]);
  const[query,setQuery] = useState('kheer');
  const[search, setSearch] = useState("");

  

   useEffect(()=>
   {
    fetchData(query).then( (res)=>
    {
        setData(res.hits);
    })
   },[query]);

   const getSearch = e =>
   {
    e.preventDefault();
    setSearch(e.target.value);
   }
   const updateSearch = e =>
   {
    e.preventDefault();
    setQuery(search);
   }
      return(
        <div >
          <div>
            <form onSubmit={updateSearch}>
              <input type="text" value={search} style={{width:'500px',height:'30px',marginLeft:'300px' }} onChange={getSearch}/>
              <button type="submit" style={{color:'green',height:'35px',width:'100px'}}>Search</button>
            </form>
          </div>
      {
      data.map( data =>
        {
       return <Recipe key={data.recipe.label}
        label ={data.recipe.label}
        ingredients={data.recipe.ingredients}
        calories={data.recipe.calories}
        image={data.recipe.image}
        
        />})
      }</div>)

}
export default App;