import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div>
<Box display="flex" flexDirection="column" alignItems="center" >
        <h2>Hello there Shopper! Please, log in or sign up.</h2>
        <div>
            <TextField label="Username" onChange={(e) => setUsername(e.target.value)}
                    inputProps={{ 'aria-label': 'usernameTextField' }} margin="normal"/>
        </div>
        <div>
        <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)}
                inputProps={{ 'role': 'textbox', 'aria-label': 'passwordTextField' }} margin="normal"/>
        </div>
        <Stack spacing={4} direction="row">
            <Button variant="contained" onClick={()=>{console.log("LogIn")}}>Log in</Button>

            <Button variant="contained" onClick={()=>{console.log("SignUp")}}>Sign Up</Button>
        </Stack>
    </Box>
</div>
  );
}
