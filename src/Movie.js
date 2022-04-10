import {Counter} from './Counter';
import { useState } from "react" ;
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


export function Movie({ name, poster, rating, summary
,deleteButton,editButton}) {
   const styles={color:rating>=8 ? "green" : "red"};
  const [show,setShow]= useState(true);

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{name}

        <IconButton onClick={()=>setShow(!show)} color="primary"
aria-label="toogle-summary">
       {show ? <ExpandLessIcon/> : <ExpandMoreIcon />}
      </IconButton>
         </h2>
        <p style={styles}className="movie-rating">{rating}/10</p>
      </div>

    { show ? <p className="movie-summary">{summary}</p> : ""}

    </CardContent>
    < CardActions>
    <Counter/> {deleteButton} {editButton}
    </CardActions>
    </Card>
  );
}