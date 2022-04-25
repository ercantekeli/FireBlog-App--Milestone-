import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { signIn, signUpProvider } from '../helpers/firebase';
import { useState } from "react";


const style = {
  // backgroundImage: `url("https://picsum.photos/1200/900")`,
  // marginTop: "150px",
  boxSizing: "border-box",
  backgroundPosition: "center",
  backgroundImageRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  position: "relative"
};

export default function Login() {
  const navigate = useNavigate();
  const [title, setTitle] = useState()
  const [imageURL, setImageURL] = useState()
  const [textArea, setTextArea] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password, navigate)
  };
  const handleProviderLogIn = () => {
    signUpProvider(navigate)
  }

  return (
    <div style={style}>
      <Container component="main" maxWidth="xs" style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.75) 10px 10px 5px 0px", backgroundColor: "#fff", position: "relative" }}>
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
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="imageURL"
                label="Image URL"
                type="url"
                id="imageURL"
                onChange={(e) => setImageURL(e.target.value)}
              />

              <TextField
                margin="normal"
                multiline
                minRows={10}
                required
                fullWidth
                name="password"
                label="Content"
                type="textarea"
                id="imageURL"
                onChange={(e) => setTextArea(e.target.value)}
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