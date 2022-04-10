import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { API } from "./global";
import { useHistory } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const history =useHistory();
  const addMovie =()=>{
    
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    fetch(`${API}/movies/`,{
      method:"POST",
      body:JSON.stringify(newMovie),
      headers:{
       "Content-Type" : "application/json",
      },
    }).then(()=>history.push("/movies"));

  }

  return (
    <div className="add-movie-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => addMovie()}
      >
        Add Movie
      </Button>
    </div>
  );
}

