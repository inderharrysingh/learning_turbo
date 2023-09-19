import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';


export function Navbar() {

  const [username, setUsername] =  useState("");

  function refreshState(){
      
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button  href='/' color='inherit'>App</Button>

          </Typography>
          { username  ? 
          <>
          <Button   color='inherit' onClick={refreshState} >LogOut</Button>
          </>
          : 
          <>
          <Button  href='/' color='inherit'>Login</Button>
          <Button  href='/' color='inherit' >SignUp</Button>

          </>
        }
          <Button  href='/' color='inherit' >Courses</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
