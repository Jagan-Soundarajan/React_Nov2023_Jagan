import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Facebook, Instagram, Task, Twitter } from "@mui/icons-material";
import { Container, Grid, Card, CardMedia, CardContent } from '@mui/material'; // Adjust the library import based on your setup

import './Home2.css';
import TabsWrappedLabel from './Tabs';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const destinations = [
    {
      id: 1,
      name: ' Recliner',
      image:'https://www.nilkamalfurniture.com/cdn/shop/files/SIERRAopenLS_800x.jpg?v=1685681640',
    },
    {
      id: 2,
      name: 'Couch',
      image: 'https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000011230748-1000011230747_02-2100.jpg',
    },
    {
      id: 3,
      name: 'Book Case',
      image: 'https://m.media-amazon.com/images/I/71-u55M8jYL.jpg', // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Bed',
      image: 'https://hometown.gumlet.io/media/product/31/5763/13218/1.jpg',
    },
    {
      id: 5,
      name: 'Chest of drawers ',
      image: 'https://deskelly.ie/wp-content/uploads/2022/02/Bodhi-bedroom-midnight-grey-203dwr-chest5.jpg',
    },
    {
      id: 6,
      name: 'Coffee Table',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/4Coffee_Table.jpg',
    },
    {
      id: 7,
      name: 'Dinning Table',
      image: 'https://m.media-amazon.com/images/I/61wlCkStj6L._AC_UF894,1000_QL80_.jpg',
    },
  ];

export default function Furnitures() {
  return (
    <div>
      <div className='ape'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
     <pre><b>Menu</b>                                          <i><b>Vendor Management System</b></i></pre>
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className='ui'>

          <Link to='/lo'>
          <Button variant="contained" color='inherit' >Sign Out</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
        <TabsWrappedLabel/>
    </div>
    </div>
    <div className='qwe'>
    <div className='lol' style={{backgroundImage:'url(https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <p><i>
Home furniture plays a pivotal role in shaping the ambiance and functionality of living spaces, transforming a house into a personalized haven. Beyond mere utility, furniture serves as an expressive and aesthetic element,
   reflecting the inhabitants' tastes and lifestyle. The choice of furniture encompasses a wide array of pieces, ranging from comfortable sofas and stylish coffee tables in the living room to functional bedroom sets and storage solutions. 
   Each item contributes to the overall design scheme, with styles ranging from classic and timeless to modern and eclectic. Additionally, the material selection, color palette, and ergonomic considerations further enhance the appeal and comfort of the home environment.
    Whether it's the warmth of wooden furniture, the sleek lines of contemporary designs, or the cozy embrace of upholstered pieces, home furniture encapsulates the essence of personal style while providing practical solutions for daily living. As trends evolve, the world of home furniture continues to offer a diverse array of choices, 
    catering to the evolving needs and preferences of homeowners seeking both comfort and aesthetic satisfaction.</i></p>
    </div>
    <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
{/* <hr></hr> */}
</div>
<br></br><br></br>
    <div className='foot'>
    <Box component="foot" >
      
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Inventory Management, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Kuniyamuthur, Coimbatore .
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: inventory007@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 1234567890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
    </div>
  );
}