import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer,List,ListItemButton, ListItemIcon, ListItemText,IconButton} from '@mui/material';
const PAGES = [ "Contact","Services","About us","Login","Logout"];
const Drawercomp=()=> {
    const [openDrawer,setOpenDrawer] =useState(false);

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <List>
                {
                    PAGES.map((page,index) => (
                        <ListItemButton
                         onClick={() =>  setOpenDrawer (false) }
                         key={index}>
                    <ListItemIcon>
                        <ListItemText>
                       {page}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ))
                }
                
              </List>
            </Drawer>
            <IconButton sx={{color:'white',marginLeft:"auto" }} 
            onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    )
};
export default Drawercomp;