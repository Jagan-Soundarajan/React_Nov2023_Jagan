import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs >
          <Item>Total items<br></br>
          786
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Total Category<br></br>
          867 Categories availabel</Item>
        </Grid>
        <Grid item xs>
          <Item>Total Elements<br></br>
          5678</Item>
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>Total Products<br></br>
          2344</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Total Paid Orders<br></br>
          5496 Paid Orders</Item>
        </Grid>
        <Grid item xs>
          <Item>Warehouse</Item>
        </Grid>
      </Grid>
    </Box>
  );
}