import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { API } from "./global";




export const EditMovie = () => {
  const { id } = useParams();
  console.log(id);
//const movie = movieList[id];
//console.log(movie);
const[movie,setMovie] = useState(null);
useEffect(()=>{
  fetch(`${API}/movies/${id}`,{
  method:"GET" , 
  })
  .then((data)=> data.json())
  .then((mv)=>setMovie(mv))
  .catch((err)=>console.log(err))
},[]);
console.log(movie);

 
  
  return (
   <div>
   { movie ?  <EditMovieFrom movie={movie}/> : <h2>"Loading"</h2> }
   </div>)
};

function EditMovieFrom({movie}){

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const history= useHistory();
  


  return(
    <div className="add-movie-form">
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        value={poster}
        id="outlined-basic"
        placeholder="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={summary}
        id="outlined-basic"
        placeholder="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={rating}
        id="outlined-basic"
        placeholder="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <Button  variant="contained" color="success"
      onClick={()=>{
        const updatedMovie ={
          name:name,
          poster:poster,
          summary:summary,
          rating:rating,
        };

     //1.method must be PUT & pass id
     //2. body- JSON data
     //3. headers - JSON data
     //After PUT is complete -> movie to /movies

     fetch(`${API}/movies/${movie.id}`,{
       method: "PUT",
       body: JSON.stringify(updatedMovie),
       headers:{
         "content-Type": "application/json"
       },
     }).then(()=>history.push("/movies"));

      }}>
        Save
      </Button>
    </div>
  )
}