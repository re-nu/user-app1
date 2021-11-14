//import logo from './logo.svg';
import './App.css';
//import { Switch, Route, Link , useParams} from 'react-router-dom';
import { useState } from 'react';
//import {Button, IconButton,InfoTwoTone,EmailIcon,} from '@mui/material';
import { UserList } from './UserList';

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
      <AddUser Cusrers={Cusrers} setuser={setuser}/> 
       <UserList Cusers={Cusrers} setuser={setuser}/>
    </div>
  );  
}

function AddUser({Cusrers,setuser}) {
  const [name,setName]=useState("");
  const [pic,setPic]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const [place,setPlace]=useState("");

  const newUser={
    name:name,
    avatar:pic,
    number:number,
    email:email,
    place:place
  }
  return(
    <div className="add-user">
      <input placeholder="name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="image" onChange={(e)=>setPic(e.target.value)} />
      <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="number" onChange={(e)=>setNumber(e.target.value)}/>
      <input placeholder="place"  onChange={(e)=>setPlace(e.target.value)}/>
      <button onClick={()=>setuser([...Cusrers,newUser])}>add user</button>
    </div>
  );
}
export default App;
