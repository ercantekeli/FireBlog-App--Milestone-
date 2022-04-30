import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { signIn, signUpProvider } from '../contexts/AuthContext';
import { useState, useContext } from "react";
// import { AddNewBlog } from '../contexts/BlogContext';
import { BlogContext } from '../contexts/BlogContext';
import { AuthContext } from '../contexts/AuthContext';




const style = {
  // backgroundImage: `url("https://picsum.photos/1200/900")`,
  // marginTop: "150px",
  boxSizing: "border-box",
  backgroundPosition: "center",
  backgroundImageRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "88.2vh",
  padding: "1rem"
};

export default function NewBlog() {
  const navigate = useNavigate();
  const [info, setInfo] = useState()
  const { AddNewBlog, UpdateBlog } = useContext(BlogContext);
  const { signUpProvider } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateBlog(info)
    }
    else {
      AddNewBlog(info)
      navigate("/")
    }

  };

  const handleProviderLogIn = () => {
    signUpProvider(navigate)
  }

  const editBlog = (id, title, imageURL, content) => {
    setInfo({ id, title, imageURL, content })
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value })
  }

  return (
    <div style={style}>
      <Container component="main" maxWidth="xs" style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.5) 10px 10px 5px 0px", backgroundColor: "#fff", position: "relative" }}>
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >

          <img src={blog} alt="login_blog" style={{ width: "200px", height: "200px", margin: "1rem", padding: "0.5rem", backgroundColor: "#046582", borderRadius: "50%" }} />

          <Typography component="h1" variant="h5">
            ── New Blog ──
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form id="register" action="" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="imageURL"
                label="Image URL"
                type="url"
                id="imageURL"
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                multiline
                maxRows={10}
                required
                fullWidth
                name="content"
                label="content"
                type="textarea"
                id="content"
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#046582" }}

              >
                SUBMIT
              </Button>


            </form>
          </Box>
        </Box>

      </Container>
    </div >
  );
}