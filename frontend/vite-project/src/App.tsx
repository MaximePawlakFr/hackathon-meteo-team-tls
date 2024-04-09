//import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css';
import { Viewer } from "resium";
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { mainListItems, secondaryListItems } from './listItems';



function CesiumMap() {

  return (<Viewer style={{
    position: "absolute",
    top: 0,
    left: 250,
    right: 0,
    bottom: 0,
  }}/>);

}


/* function App() {
  //const [count, setCount] = useState(0)

  return (
  <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
        <CesiumMap />
      </Box>
    </Container>
 // return <Viewer full/>;(


   /*  <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> 
  )
} */



const drawerWidth: number = 240;




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  const [open, setOpen] = React.useState(true);
  

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Drawer 
        sx={{
          '& .MuiDrawer-root': {
              position: 'absolute'
          },
          '& .MuiPaper-root': {
              position: 'absolute'
          },
        }}
       variant="permanent" open={open} anchor='left'>

          
          
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        </Grid>
        <Grid item xs={8}>
        <CesiumMap />
        </Grid>
        
      </Grid>
        
        

        
       
      
    </ThemeProvider>
  );
}


