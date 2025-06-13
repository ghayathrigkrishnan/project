import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './Home.css';



const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "June 20, 2025",
    description: "An immersive experience into technology trends.",
    image: "/tech.jpg"
  },

  {
    id: 2,
    title: "Tech Workshop",
    date: "June 20, 2025",
    description: "An immersive experience into technology trends.",
    image: "/tech.jpg"
  },
  {
    id: 3,
    title: "Exhibition",
    date: "June 20, 2025",
    description: "An immersive experience into technology trends.",
    image: "/tech.jpg"
  },
  {
    id: 4,
    title: "Fest 2025",
    date: "June 20, 2025",
    description: "An immersive experience into technology trends.",
    image: "/tech.jpg"
  },
  {
    id: 5,
    title: "TCoding Bootcamp",
    date: "June 20, 2025",
    description: "An immersive experience into technology trends.",
    image: "/tech.jpg"
  },
  {
    id: 6,
    title: "Music Fest",
    date: "June 20, 2025",
    description: "An immersive experience into Artistic trends.",
    image: "/tech.jpg"
  },

  // ...repeat for other events
];


const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      {/* Navigation Buttons */}
      <div className="button-container">
        <Button className="custom-button" variant="contained" onClick={() => navigate('/admin')}>
          Admin
        </Button>
        <Button className="custom-button" variant="contained" onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>

      {/* Heading */}
      <div className="home-heading">
        <span className="college-name">COLLEGE NAME</span> <br />
        <span className="presents">presents</span><br />
        <span className="event-name">EVENT NAME</span><br /><br />
      </div>
       {/* Event Cards */}
      <Grid container spacing={3} className="card-container" justifyContent="center">
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" height="180" image={event.image} alt={event.title} />
              <CardContent>
                <Typography variant="h6" className="event-title">{event.title}</Typography>
                <Typography variant="body2" className="event-date">{event.date}</Typography>
                <Typography variant="body2" className="event-description">{event.description}</Typography>
                <Button className="read-more-button" variant="contained">Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  )
}

export default Home
