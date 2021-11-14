import { useHistory, useParams } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';


export function Profile({ Cusers }) {
  const { id } = useParams();
  const history=useHistory();
  const user = Cusers[id];
  console.log(user);
  return (
    <div className="profile">
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={user.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" font-size="small">
            <div>
              <h4>{<EmailIcon/>} {user.email}</h4>
              <h4>{<ContactPhoneIcon/>} {user.number}</h4>
              <h4>{< AddLocationIcon/>} {user.place}</h4>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  
        onClick={()=>history.goBack()}
        size="small" variant="text" startIcon={<ArrowBackIcon />}>
          Back
         </Button>
      </CardActions>
    </Card>
    </div>
  );
}
