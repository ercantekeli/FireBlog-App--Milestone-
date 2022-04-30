import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import googleLogo from "../assets/google.png"
import { useState, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';



const style = {
    backgroundImage: `url("https://picsum.photos/1200/900")`,
    // marginTop: "150px",
    boxSizing: "border-box",
    backgroundPosition: "center",
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "88.2vh",
    padding: "1rem"
};

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { signIn, signUpProvider } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(email, password, navigate)
    };
    const handleProviderLogIn = () => {
        signUpProvider(navigate)
    }

    return (
        <div style={style}>
            <Container component="main" maxWidth="xs" style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.5) 10px 10px 5px 0px", backgroundColor: "#fff", position: "relative" }}>
                {/* <CssBaseline /> */}
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
                        ── Login ──
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
                                Login
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "black", backgroundColor: "white" }}
                                onClick={handleProviderLogIn}
                            >
                                WITH  <img src={googleLogo} alt="googleLogo" style={{ width: "6rem", height: "2rem", marginLeft: "1rem" }} />
                            </Button>

                        </form>
                    </Box>
                </Box>

            </Container>
        </div >
    );
}