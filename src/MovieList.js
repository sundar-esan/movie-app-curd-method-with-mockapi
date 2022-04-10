import { Movie } from "./Movie";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { API } from "./global";


export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);

  const getMovies = () =>{
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
    
  
  useEffect(() => getMovies(), []);

  const deleteMovie =(id)=>{
    fetch(`${API}/movies/${id}`,{
      method:"DELETE",
    }).then(()=> getMovies());
  };

  return (
    <div className="movie-list">
      {movieList.map(({name,poster,rating,summary,id}, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deleteButton={
            <Button
              onClick={() => deleteMovie(id)}
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete 
            </Button>
          }
          editButton={
            <Button
              onClick={() => history.push(`/movies/edit/${id}`)}
              variant="outlined"
              color="secondary"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          }
          id={id}
        />
      ))}
    </div>
  );
}
