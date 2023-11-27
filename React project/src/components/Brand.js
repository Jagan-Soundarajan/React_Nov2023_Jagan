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
      name: ' Godrej',
      image:'https://static.wixstatic.com/media/c7de0c_18ac13d006a044dc97f2fd5d5a45135a~mv2.png/v1/fill/w_800%2Ch_386%2Cal_c%2Cq_90/file.jpg',
    },
    {
      id: 2,
      name: 'Patek Philippe',
      image: 'https://i.pinimg.com/474x/32/1e/dd/321edd1032f03ec70d896ecad98961e1.jpg',
    },
    {
      id: 3,
      name: 'Chanel',
      image: 'https://ww2.freelogovectors.net/wp-content/uploads/2023/04/chanel-logo-freelogovectors.net_.png?lossy=1&resize=640%2C480&ssl=1', // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Louis Vuitton',
      image: 'https://media.designrush.com/inspiration_images/136124/conversions/_1519762849_545_990__1513771354_519_louis-v1_b31600c58738-mobile.jpg',
    },
    {
      id: 5,
      name: 'Nike ',
      image: 'https://www.marketing91.com/wp-content/uploads/2020/06/Best-Advertisements-for-Nike.jpg',
    },
    {
      id: 6,
      name: 'Adidas',
      image: 'https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd9839d388ff2800_adidas-logo-e1468257076328.jpg',
    },
    {
      id: 6,
      name: 'Burberry',
      image: 'https://www.storypick.com/wp-content/uploads/2020/10/Burberry.jpg',
    },
    {
      id: 7,
      name: 'Sony',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_sjzGpS8pIcC9nVMg63QuNy_ohIlrZoRPg&usqp=CAU',
    },
    {
      id: 8,
      name: 'Dior',
      image: 'data:image/png;base64,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',
    },
    {
      id: 9,
      name: 'Gucci',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlj5ntMaBKspotgzieMJcakCTlQGrO6H0NSw&usqp=CAU',
    },
    {
      id: 9,
      name: 'VERSACE',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb41_JP4N3IXs4N0VrhIII-y1KPZQ9d7DZWg&usqp=CAU',
    },

  ];

export default function Brand() {
  return (
    <div>
      <div className='apii'>
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
    <div className='arsh'>
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
    <div className='foote'>
    <Box component="foote" >
      
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
              Email: vendor007@gmail.com
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