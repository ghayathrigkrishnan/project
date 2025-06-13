import React, { useEffect, useState } from 'react';
import {Container,TextField,MenuItem,Select,InputLabel,FormControl,Button,Typography,Box} from '@mui/material';
import {Radio,RadioGroup,FormControlLabel,FormLabel} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

/*const Reg = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    event: '',
    participationType: 'solo',  // default
    teamSize: ''
  });

  const events = [
    'Tech Conference 2025',
    'Innovation Summit',
    'Robotics Expo',
    'Startup Pitch',
    'AI Workshop',
    'Cybersecurity Forum'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Later: send this data to your backend via Axios
    alert("Registration submitted!");
  };*/
  const AddStudent = (props) => {
    var[inputs,setInputs]= useState({name:'',email:'',college:'',event:'',participationType:'',teamSize:'',});
    const events = [
  'Tech Conference 2025',
  'Innovation Summit',
  'Robotics Expo',
  'Startup Pitch',
  'AI Workshop',
  'Cybersecurity Forum'
];
    var location = useLocation();
    var navigate = useNavigate();

     console.log("state:",location.state);

    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    };
    useEffect(()=>{
      if(location.state!==null){
        setInputs({
          ...inputs,
          name:location.state.val.name,
          email:location.state.val.email,
          college:location.state.val.college,
          event:location.state.val.event,
          participationType:location.state.val.participationType,
          teamSize:location.state.val.teamSize,
        });
      }
    },[]);

    const submitHandler=()=>{
        console.log("btn clicked");
        
       if(location.state!==null){
        axios
        .put(`http://localhost:3000/${location.state.val._id}`,inputs)
        .then((res)=>{
           console.log(res);
           alert(res.data)
           navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }else{
        axios
        .post('http://localhost:3000', inputs)
        .then((res)=>{
           console.log(res);
           alert(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    };
  };  
  return (
    <div>
      <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Event Registration
        </Typography>
       <form onSubmit={(e) => { e.preventDefault(); submitHandler(); }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={inputs.name}
            onChange={inputHandler}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
           value={inputs.email}
           onChange={inputHandler}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="College"
            name="college"
            value={inputs.college}
            onChange={inputHandler}
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Event</InputLabel>
            <Select
              name="event"
              value={inputs.event}
              onChange={inputHandler}
              label="Event"
            >
              {events.map((event, index) => (
                <MenuItem key={index} value={event}>
                  {event}
                </MenuItem>
              ))}
            </Select>
            </FormControl>
            {/* Solo/Team selection */}
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Participation Type</FormLabel>
            <RadioGroup
              row
              name="participationType"
              value={inputs.participationType}
              onChange={inputHandler}
            >
              <FormControlLabel value="solo" control={<Radio />} label="Solo" />
              <FormControlLabel value="team" control={<Radio />} label="Team" />
            </RadioGroup>
          </FormControl>
          {/* If Team, show team size input */}
          {inputs.participationType === 'team' && (
            <TextField
              fullWidth
              type="number"
              label="Number of Team Members"
              name="teamSize"
              value={inputs.teamSize}
              onChange={inputHandler}
              margin="normal"
              required
              inputProps={{ min: 1 }}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: '#ff9800', '&:hover': { backgroundColor: '#e68900' } }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
    </div>
  )
}

export default AddStudent
