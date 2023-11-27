import React,{useState} from 'react';
import {AppBar,Tabs,Toolbar,Tab,Typography,Button,useMediaQuery,useTheme, Link } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Drawercomp from './Drawercomp';
import Box from '@mui/material/Box';
import Footer from './footer';
    const PAGES = [ "Contact","Services","About us"];
    const Home=()=> {
        const[value,setValue]=useState();
        const theme =useTheme();
        console.log(theme);
        const isMatch = useMediaQuery(theme.breakpoints.down('md'));
        console.log(isMatch);
        return (
            <React.Fragment>
                <AppBar sx={{background:"#2874A6  "}}>
                    <Toolbar>
                    <StorefrontIcon />
                   {
                    isMatch ? (
                        <>
                        <Typography sx={{fontsize:'1.5rem',paddingLeft:'2%'}}>
                            {" "}
                            VENDOR MANAGEMENT
                            </Typography>
    
                            <Drawercomp/>
    
    
                            </>
                    ) : (
                        <>
                    <Tabs  textColor="inherit" indicatorColor="secondary" 
                    value={value}
                     onChange={(e,value) => setValue(value)} >
                        {
                            PAGES.map((page,index) => (
                                <Tab key={index} label={page}/>
                            ))
                        }
                    </Tabs>
    
                    <Box sx={{ ml: 'auto' }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
                      <Button color="inherit" component={Link} to="/contact">Contact</Button>
                      <Button color="inherit" component={Link} to="/about">About Us</Button>
                      <Button color="inherit" to="/about"><a href='/login' style={{textDecoration:'none',color:"white"}}>Login</a></Button>
                      <Button color="inherit" to="/Register"><a href='/Register' style={{textDecoration:'none',color:"white"}}>Register</a></Button>
            </Box>
                   
                        </>
    
                    )
                   }
                    
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
    export default Home;