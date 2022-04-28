import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { useState, useContext } from "react";
import googleLogo from "../assets/google.png"
import { AuthContext } from '../contexts/AuthContext';



const style = {
    backgroundImage: `url("https://picsum.photos/1200/900")`,
    marginTop: "0px",
    boxSizing: "border-box",
    backgroundImageRepeat: "no-repeat",
    // backgroundImage: "cover",
    height: "88.2vh",
    padding: "1rem"
};

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { createUser, signUpProvider } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(email, password, navigate)
    };

    const handleProviderRegister = () => {
        signUpProvider(navigate)
    }

    return (
        <div style={style}>
            <Container component="main" maxWidth="xs" style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.75) 10px 10px 5px 0px", backgroundColor: "#fff" }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <img src={blog} alt="login_blog" style={{ width: "200px", height: "200px", margin: "1rem", padding: "0.5rem", backgroundColor: "#046582", borderRadius: "50%" }} />

                    <Typography component="h1" variant="h5">
                        ── Register ──
                    </Typography>

                    <Box noValidate sx={{ mt: 1 }}>
                        <form id="register" action="" onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "#046582" }}

                            >
                                REGISTER
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "black", backgroundColor: "white" }}
                                onClick={handleProviderRegister}
                            >
                                WITH  <img src={googleLogo} alt="googleLogo" style={{ width: "6rem", height: "2rem", marginLeft: "1rem" }} />
                            </Button>

                        </form>
                    </Box>

                </Box>

            </Container>
        </div>
    );
}