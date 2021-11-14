//import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { useState, } from 'react';
import { useHistory } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { UserList } from './UserList';
import { AddUser } from './AddUser';
import { Edit } from './Edit';
import { Profile } from './Profile';

function App() {
  const users=[
    {
      name: "Steve Mante",
      avatar: "https://cdn.fakercloud.com/avatars/kolmarlopez_128.jpg",
      number:"4638294653",
      email:"stevemante@gmail.com",
      place:"banglore"
    },
    {
      name: "Joann Sporer",
      avatar: "https://cdn.fakercloud.com/avatars/haruintesettden_128.jpg",
      number:"4633764653",
      email:"joannsporer@gmail.com",
      place:"hyderabad"
    },
    {
      name: "Christie Ullrich II",
      avatar: "https://cdn.fakercloud.com/avatars/n1ght_coder_128.jpg",
      number:"9841764651",
      email:"christieullrich@gmail.com",
      place:"Mumbai"
    },
    {
      name: "Suzanne West",
      avatar: "https://cdn.fakercloud.com/avatars/davidcazalis_128.jpg",
      number:"9441764451",
      email:"suzannewest@gmail.com",
      place:"Ahemdabad"
    },
    {
      name: "Mamie Strosin MD",
      avatar: "https://cdn.fakercloud.com/avatars/twittypork_128.jpg",
      number:"8841767478",
      email:"mamiestrosin@gmail.com",
      place:"Chandigarh"
    },
    {
      name: "Ms. Pedro Price",
      avatar: "https://cdn.fakercloud.com/avatars/gregsqueeb_128.jpg",
      number:"9421767478",
      email:"pedroprice@gmail.com",
      place:"Pune"
    },
    {
      name: "Sonja Zemlak",
      avatar: "https://cdn.fakercloud.com/avatars/megdraws_128.jpg",
      number:"9821767272",
      email:"sonjazemlak@gmail.com",
      place:"Mumbai"
    }
  ]
  const [Cusrers,setuser]=useState(users)
  console.log(Cusrers);
  const history=useHistory();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton 
          onClick={()=>history.push("/")}
          edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon />
          </IconButton>
          <IconButton 
          onClick={()=>history.push("/users")}
          edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <GroupIcon />
          </IconButton>
          <IconButton 
          onClick={()=>history.push("/creat-user")}
          edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <PersonAddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
      <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/users">
          <UserList Cusers={Cusrers} setuser={setuser}/>
          </Route>
        <Route path="/creat-user"> 
           <AddUser Cusrers={Cusrers} setuser={setuser}/> 
        </Route>
        <Route path="/edit-user/:id">
          <Edit Cusers={Cusrers} setuser={setuser}/>
          </Route>
          <Route path="/profile/:id">
            <Profile Cusers={Cusrers}/>
          </Route>
      </Switch>
    </div>
  );  
}
function Home(params) {
  return(
    <div className="home">
      <img className="home-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkNkZ6a95HKR75PQqxYkK1rXhX33IyxPN6A&usqp=CAU"
         alt="welcome"/>
    </div>
    
    );

}
export default App;
