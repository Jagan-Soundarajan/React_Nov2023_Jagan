// Hero.js
import React from 'react';
import { Typography, Button, Container, Grid, Box } from '@mui/material';


const Hero = () => {
  const heroStyle = {
    background: 'url("https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?size=626&ext=jpg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '200px 0', // Adjust the padding to reduce the height
  };
  const heroStyle1 = {
    marginTop:'50px',
    background: 'url("https://img.freepik.com/free-vector/men-with-shopping-car-business-coins_24877-53519.jpg?size=626&ext=jpg")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',

    padding: '200px 0', // Adjust the padding to reduce the height
  };
  const imageSectionStyle = {
    background: 'white', // Gradient color
    padding: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black', // Text color
  };

  const imageStyle = {
    maxWidth: '40%',
    borderRadius: '10px',
};
  const buttonStyle = {
    color:"black",
    background:'#ECF0F1 ',
  };

  const boxStyle = {
    background: '#D7DBDD ', // Gradient color
    padding: '45px',
    borderRadius: '5px',
    color: 'black', // Text color
  };

  return (
    <>
      <Box sx={heroStyle}>
        <Container>
          <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Grid container spacing={4} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img src="https://img.freepik.com/free-vector/team-online-store-working-with-customer_1262-19368.jpg?size=626&ext=jpg" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="#1A5276" gutterBottom>
          What is vendor management?
          </Typography>

          <Typography variant="body1" paragraph>
            <box >
          Vendor management is a term that describes the processes organizations use to manage their suppliers, who are also known as vendors. Vendor management includes activities such as selecting vendors, negotiating contracts, controlling costs, reducing vendor-related risks and ensuring service delivery.
            </box>
          </Typography>
        </Grid>
      </Grid>

      {/* Three boxes structure */}
      <Container sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div" >
              Vendor management benefits
              </Typography>

              <Typography  component="div">
                <br></br>
              -Improve vendor selection<br></br>
-Harness cost savings<br></br>
-Speed up vendor onboarding<br></br>
-Reduce the risk of supply chain disruption<br></br>
-Strengthen supplier relationships<br></br>
-Negotiate better rates
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div">
              Vendor management process
              </Typography>

              <Typography variant="body1" component="div">
<br></br>-Selecting vendors<br></br>
-Contract negotiation<br></br>
-Vendor onboarding<br></br>
-Monitoring vendor performance<br></br>
-Monitoring and managing risk<br></br>
-Payment<br></br>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h5" color="#1A5276 " component="div" >
              How does a vendor management system work?
              </Typography>
              <Typography variant="body1" component="div">
              Vendor management systems will generally integrate several different functions into one <br></br>- usually focusing on features that facilitate both information and relationship management.</Typography>
            </Box>
          </Grid>
        </Grid>
      <Box sx={heroStyle1}>
       
      </Box>
      </Container>
    </>
  );
};

export default Hero;