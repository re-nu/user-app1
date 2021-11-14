import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';

export function Edit({ Cusers, setuser }) {
  //console.log(Cusers);
  const { id } = useParams();
  const history = useHistory();
  const user = Cusers[id];
  console.log(user);

  const [name, setName] = useState(user.name);
  const [pic, setPic] = useState(user.avatar);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);
  const [place, setPlace] = useState(user.place);


  const edit = () => {
    const EditUser = {
      name: name,
      avatar: pic,
      number: number,
      email: email,
      place: place
    };
    console.log(EditUser);
    const edited = [...Cusers];
    edited[id] = EditUser;
    setuser(edited);
    history.push("/users");
  };
  return (
    <div className="edit-user">
      <TextField
      value={name} onChange={(e) => setName(e.target.value)}
       id="filled-basic" label="Filled" variant="filled" />
    
      <TextField 
      value={pic} onChange={(e) => setPic(e.target.value)}
      id="filled-basic" label="Filled" variant="filled" />
    
      <TextField 
      value={email} onChange={(e) => setEmail(e.target.value)} 
      id="filled-basic" label="Filled" variant="filled" />
    
      <TextField 
      value={number} onChange={(e) => setNumber(e.target.value)}
      id="filled-basic" label="Filled" variant="filled" />
    
      <TextField 
      value={place} onChange={(e) => setPlace(e.target.value)}
      id="filled-basic" label="Filled" variant="filled" />
      <Button
      onClick={edit}
       variant="contained" startIcon={<UpdateIcon/>}>
         Save the changes
      </Button>
    </div>
  );
}
