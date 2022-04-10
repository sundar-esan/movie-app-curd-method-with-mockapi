import './App.css';
import {useState} from "react";
import {Switch,Route} from "react-router-dom";
import { Msg } from './Msg';
import { MovieList } from './MovieList';
import { EditMovie } from './EditMovie';
import { AddMovie } from './AddMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function App() {
 const InitialMovieList=[
    {
      id:"100",
      name:"Iruthi Suttru",
    poster:"https://upload.wikimedia.org/wikipedia/en/f/fe/Irudhi_Suttru.jpg",
    rating:7.6,
  summary:"A former boxer quits boxing following an argument with the authorities over underlying politics. He goes on to coach a fisher woman so that he can fulfil his dreams through her."
},
  {
    id:"101",
    name:"Ghilli",
    poster:"https://pbs.twimg.com/media/EVyhuIsU4AANZ1B?format=jpg&name=large",
    rating:8,
    summary:"Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes."
  },
  {
    id:"102",
    name:"Sarpatta Parambarai",
    poster:"https://www.filmibeat.com/ph-big/2021/07/sarpatta_16270131169.jpg",
    rating:8.7,
    summary:"When Sarpatta Parambarai is challenged to a do-or-die match, Kabilan, a young labourer, must choose whether to put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics."
  },
  {
    id:"103",
    name:"Sachein",
    poster:"https://ahseeit.com/tamil/king-include/uploads/2019/04/fb_img_1555300460361-1223526052.jpg",
    rating:7.4,
    summary:"Genelia and Vijay are college classmates who become good friends; Vijay eventually expresses his love for Genelia, but she rejects it; in response, Vijay confidently tells her that she will fall in love with him in 30 days."
  },
  {
    id:"104",
    name:"Manmadhan",
    poster:"https://wallpaperaccess.com/full/4738412.jpg",
    rating:"7.2",
    summary:"When Mythili meets Mathan, she's at once attracted and terrified since he looks exactly like the serial killer from her nightmares; in fact, he fits the description of a man who targets women in bars."
  }
  ]
  const [movieList,setMovieList]=useState(InitialMovieList);

  
    const history = useHistory();
    const [mode,setMode] = useState("dark");

    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });



  return (
    
    <ThemeProvider theme={theme}>
      <Paper style={{borderRadius:"0px",minHeight:"100vh"}} elevation={4}>
    <div className="App">
    
      <AppBar position="static">

        <Toolbar>
        
          <Button color="inherit" onClick={()=> history.push("/")}>Home</Button>
          <Button color="inherit" onClick ={()=>history.push("/movies")}>Movies</Button>
        <Button color="inherit" onClick={()=> history.push("/movies/add")}>Add Movies</Button>
        <Button color="inherit" 
        style={{marginLeft:"auto"}}
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=> setMode( mode==="light" ? "dark" : "light")}>
         {mode === "light" ? "dark": "light"}   mode
        </Button>
        </Toolbar>
      </AppBar>
    <div className="route-contaner">
      <Switch>

      <Route  path="/movies/add">
        <AddMovie />

       </Route>




      <Route path= "/movies/edit/:id">
              <EditMovie/>
      </Route>



        <Route path="/movies">

     <MovieList/>
        </Route>


        <Route path="/">
                <Msg/>
        </Route>


        <Route path="**">
             404 NOT FOUND
          </Route>

      </Switch>
      </div>


    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;

fetch ("https://6209ed5c92946600171c55b8.mockapi.io/movies" , {method:"GET"})
.then((data)=>data.json())
.then((mvs)=>console.log(mvs));