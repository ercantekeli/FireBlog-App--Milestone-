import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ErcanLogo from "../assets/ercan.png";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function Navbar() {
    const navigate = useNavigate();
    const { currentUser, logOut } = useContext(AuthContext);

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);






    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const name = "<Ercan/>"
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar style={{ backgroundColor: "#003249", display: "flex", justifyContent: "space-between" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <img src={ErcanLogo} alt="ercan logo" style={{ width: "4rem", height: "4rem" }} />
                    </IconButton>
                    <Typography onClick={() => navigate("/")} style={{ margin: "auto", display: "block", cursor: "pointer", position: "static" }} variant="h6" component="div" >
                        <h2 ><span style={{ color: "#F5DEB3", fontFamily: "Girassol" }}> {name}</span> Blog</h2>
                    </Typography>
                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none' } }}>
                        {currentUser?.displayName ? <span style={{ position: "absolute", right: "5rem", top: "2.5rem" }}>{currentUser?.displayName}</span> : ""}
                    </Typography>


                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle sx={{ width: "2rem", height: "2rem" }} />

                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}


                    >
                        {currentUser ? (
                            <div>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/profile");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/newblog");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">New Blog</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        logOut();
                                        navigate("/");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </div>
                        ) : (
                            <div>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/login");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/register");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Register</Typography>
                                </MenuItem>
                            </div>
                        )}
                    </Menu>


                </Toolbar>
            </AppBar>
        </Box >
    );
}
