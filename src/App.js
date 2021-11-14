//import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';
import { useState, } from 'react';
//import {Button, IconButton,InfoTwoTone,EmailIcon,} from '@mui/material';
import { UserList } from './UserList';
import { AddUser } from './AddUser';
import { Edit } from './Edit';

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
  console.log(Cusrers)
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">User List</Link>
        <Link to="/creat-user">Create User</Link>
        <Link to="/edit-user/:id">Edit User </Link>
      </nav>
      <Switch>
        <Route exact path="/">welcome to home page</Route>
        <Route path="/users">
          user List page
          <UserList Cusers={Cusrers} setuser={setuser}/>
          </Route>
        <Route path="/creat-user">
          add new user page 
           <AddUser Cusrers={Cusrers} setuser={setuser}/> 
        </Route>
        <Route path="/edit-user/:id">
          edit user page
          <Edit Cusers={Cusrers} setuser={setuser}/>
          </Route>
      </Switch>
    </div>
  );  
}

export default App;
