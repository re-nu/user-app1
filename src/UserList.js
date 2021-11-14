//import { UserLayout } from './UserLayout';

import { useState } from "react";
import { useHistory } from "react-router";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';

export function UserList({ Cusers , setuser}) {
  return (
    <div className="all-users">
      {Cusers.map(({ name, avatar, email, number, place }, index) => (
        <UserLayout 
        name={name} 
        avatar={avatar} 
        email={email} 
        number={number}
         place={place} 
         id={index} 
         Cusers={Cusers}
         setuser={setuser}/>
      ))}
    </div>
  );
}
 
 function UserLayout({name,avatar,email,number,place,id,Cusers,setuser}) {
      const [hide,sethide]=useState(false);
      const styl={display:hide?"block":"none"}

    const deleteUsr= ()=>{
      const remainingUsr = Cusers.filter((i,index)=>index!==id);
      setuser(remainingUsr);
      console.log(remainingUsr);
    }

   const history=useHistory();
   return(
    <div className="user-container">
       <div className="user-img">
         <img src={avatar} alt={name}/>
       </div>
       <div>
          <div className="user-name">
            <h1>{name}</h1>
            <button onClick={()=>(sethide(!hide))}>info</button>
           </div>
           <div className="hidden" style={styl}>
             <p>{email}</p>
             <p>{number}</p>
             <p>{place}</p>
           </div>
       </div>
       <div className="icon-buttons">
           <IconButton
             onClick ={()=>history.push("/edit-user/"+id)}
            aria-label="delete">
               <ModeEditOutlineTwoToneIcon />
            </IconButton>
           <IconButton
           onClick={deleteUsr}
            aria-label="delete">
               <DeleteIcon />
            </IconButton>
         </div>
    </div>
  );
  }

