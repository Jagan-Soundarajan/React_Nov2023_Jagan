import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link } from 'react-router-dom';
export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='body2'>
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
        <Link to='/ho'>
        <Tab value="one" label="Home" wrapped/>
        </Link>
        <Link to='/da'>
        <Tab value="two" label="In Stock" />
        </Link>
        <Link to='/fa'>
        <Tab value="three" label="Fashion" />
        </Link>
        <Link to='/fu'>
        <Tab value="four" label="Home Furniture" />
        </Link>
        <Link to='/br'>
        <Tab value="five" label="Top Brands" />
        </Link>
        <Tab value="six" label="Appliances" />
        <Tab value="seven" label="My Cart" />
          
       
      </Tabs>
    </Box>
    <hr></hr>
    
    </div>
  );
}