import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"


const style = {
    backgroundImage: `url("https://picsum.photos/1200/900")`,
    marginTop: "0px",
    boxSizing: "border-box",
    backgroundImageRepeat: "no-repeat",
    // backgroundImage: "cover",
    height: "100vh"
};

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div style={style}>
            <Container component="main" maxWidth="xs" style={{borderRadius:"10px", boxShadow:"rgba(0, 0, 0, 0.75) 10px 10px 5px 0px", backgroundColor:"#fff"}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                    <img src={blog} alt="login_blog" style={{width:"200px", height:"200px", margin:"1rem", padding:"0.5rem", backgroundColor:"#046582", borderRadius:"50%"}}/>
                    
                    <Typography component="h1" variant="h5">
                        ── Login ──
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{backgroundColor:"#046582"}}
                        >
                            Login
                        </Button>
                        
                    </Box>
                </Box>
                
            </Container>
            </div>
    );
}