import { useState } from 'react';
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export function AddUser({ Cusrers, setuser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [place, setPlace] = useState("");

  const newUser = {
    name: name,
    avatar: pic,
    number: number,
    email: email,
    place: place
  };
  return (
    <div className="add-user">
      
      <TextField 
      onChange={(e) => setName(e.target.value)}
      id="standard-basic" label="Name" variant="filled" />
       <TextField 
      onChange={(e) => setPic(e.target.value)}
      id="standard-basic" label="Profil pic(url)" variant="filled" />
       <TextField 
      onChange={(e) => setEmail(e.target.value)}
      id="standard-basic" label="Email" variant="filled" />
       <TextField 
      onChange={(e) => setNumber(e.target.value)}
      id="standard-basic" label="Contact Number" variant="filled" />
       <TextField 
      onChange={(e) => setPlace(e.target.value)}
      id="standard-basic" label="Location" variant="filled" />
      <Button
      onClick={() => {
        setuser([...Cusrers, newUser]);
        history.push("/users");
      }}
       variant="outlined" startIcon={<AddIcon />}>
        Add new user
      </Button>
  
    </div>
  );
}
