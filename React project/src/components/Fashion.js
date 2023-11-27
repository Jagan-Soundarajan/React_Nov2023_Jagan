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

import './Brand.css';
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
      name: 'Styli',
      image:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/8/tr:w-250,/183855cStyli-7003600929_1.jpg?rnd=20200526195200',
    },
    {
      id: 2,
      name: 'The Bear House',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/1/tr:w-250,/4185b84TBH-TINOF-GY_2.jpg?rnd=20200526195200',
    },
    {
      id: 3,
      name: 'Urban Fashion',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/tr:w-250,/9187d72Urbano_URFS0049_1.jpg?rnd=20200526195200', // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Bullmer',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/tr:w-250,/a866838NK_BULLM00010478_2.jpg',
    },
    {
      id: 5,
      name: 'Blach Hoodie',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/tr:w-250,/ad59b73ABFRL-VSSTURGFJ93004_1.jpg?rnd=20200526195200',
    },
    {
      id: 6,
      name: 'T-Shirts',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/8/tr:w-250,/a866838NK_BULLM00010477_2.jpg',
    },
    {
      id: 6,
      name: 'T-Shirts',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/e/tr:w-250,/de0692fCT09221542_2.jpg',
    },
    {
      id: 7,
      name: 'Jeans',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/5/tr:w-250,/a5671cf7004735438_1.jpg?rnd=20200526195200',
    },
    {
      id: 8,
      name: 'Kurtha',
      image:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/b/tr:w-250,/0b075d5KISAH-KA-0005-5438-T303_2.jpg'
    },
    {
      id: 9,
      name: 'Shoes',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/0/tr:w-250,/b07df81NK_REDTA00024153_1.jpg?rnd=20200526195200',
    },
    {
      id: 9,
      name: 'Shirts',
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/tr:w-250,/e641123SUM22SHRT-PNCHK58-M-PLN-LBUBU_1.jpg?rnd=20200526195200',
    },

  ];

export default function Fashion() {
  return (
    <div>
      <div className='app'>
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
    <div className='ar'>
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
    <div>
        <p>Fashion is a popular aesthetic expression that encompasses a range of styles, clothing, accessories, makeup, hairstyle, and even body posture. It is a form of self-expression and can be influenced by culture, social attitudes, economic factors, and personal preferences.</p><br></br>
        <p>
Fashion is a dynamic and ever-evolving expression of individuality and culture, encompassing clothing, accessories, and personal style. Beyond mere fabric and threads, it serves as a visual language that reflects societal values, historical influences, and contemporary trends. Fashion is not confined to
 runways and glossy magazines; it permeates our everyday lives, influencing the way we present ourselves to the world. 
From timeless classics to avant-garde creations, it encompasses a spectrum of styles that cater to diverse tastes and preferences. The industry is witnessing a transformative shift towards sustainability and inclusivity, addressing environmental concerns and advocating for diverse representations.
 As a powerful form of self-expression, fashion empowers individuals to communicate their identity, creativity,
 and cultural affiliations, creating a colorful tapestry that weaves together tradition, innovation, and personal narratives.</p>
 <hr></hr>
    </div>
{/* <hr></hr> */}
</div>
<br></br><br></br>
    <div className='foo'>
    <Box component="foo" >
      
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