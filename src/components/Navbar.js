import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CwLogo from "../assets/cw.jpeg";
import { logOut } from '../contexts/AuthContext';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function Navbar() {
    const navigate = useNavigate();
    const { currentUser, logOut } = useContext(AuthContext);

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar style={{ backgroundColor: "#046582", display: "flex", justifyContent: "space-between" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <img src={CwLogo} alt="clarusway logo" style={{ width: "2.75rem", height: "2.75rem" }} />
                    </IconButton>
                    <Typography onClick={() => navigate("/")} style={{ cursor: "pointer" }} variant="h6" component="div" >
                        <h3>Ercan Blog</h3>
                    </Typography>

                    <div> {currentUser?.displayName ? <span style={{ alignSelf: "flex-end" }}>{currentUser?.displayName}</span> : ""}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
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
                                            setAnchorElUser(null);
                                        }}
                                    >
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            navigate("/newblog");
                                            setAnchorElUser(null);
                                        }}
                                    >
                                        <Typography textAlign="center">New Blog</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            logOut();
                                            navigate("/");
                                            setAnchorElUser(null);
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
                                            setAnchorElUser(null);
                                        }}
                                    >
                                        <Typography textAlign="center">Login</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            navigate("/register");
                                            setAnchorElUser(null);
                                        }}
                                    >
                                        <Typography textAlign="center">Register</Typography>
                                    </MenuItem>
                                </div>
                            )}
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Box >
    );
}
