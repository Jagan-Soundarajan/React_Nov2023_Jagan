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
      name: ' Sweaters',
      image:'https://seamapparel.com/blog/wp-content/uploads/2023/02/Types-Of-Sweaters-2-1024x706.jpg',
    },
    {
      id: 2,
      name: 'Lamps',
      image: 'https://www.anantayadecor.in/cdn/shop/products/WL_rANGEcopy_1.jpg?v=1635595732&width=2048',
    },
    {
      id: 3,
      name: 'Belts',
      image: 'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RBL1004/8-800x800.jpg', // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Watches ',
      image: 'https://www.time4diamonds.com/media/mgs_blog/3/_/3_1.jpeg',
    },
    {
      id: 5,
      name: 'Shoes ',
      image: 'https://www.marketing91.com/wp-content/uploads/2020/06/Best-Advertisements-for-Nike.jpg',
    },
    {
      id: 6,
      name: 'Jackets',
      image: 'https://i.insider.com/639cdb89b5600000185b2761?width=600&format=jpeg&auto=webp',
    },
    {
      id: 6,
      name: 'Crocs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20VF_J86ak0zw37HKxr2niTbS4RhoKtYLvQ&usqp=CAU',
    },
  ];

export default function Home2() {
  return (
    <div>
      <div className='api'>
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
    <div className='ars'>
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
    <div className='footer'>
    <Box component="footer" >
      
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Vendor Management, dedicated to providing the best service to our
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
              Email: Vendor007@gmail.com
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