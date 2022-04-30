import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Details = () => {
    const location = useLocation();
    const item = location.state.item;
    const [likeNumber, setLikeNumber] = useState(0);
    const [likeColor, setLikeColor] = useState();
    const navigate = useNavigate()
    const [click, setClick] = useState(true);
    const { currentUser } = useContext(AuthContext);
    const { DeleteBlog } = useContext(BlogContext);

    // const { id } = item.id;
    // console.log(item)
    const handleDelete = (id) => {
        DeleteBlog(id)
        navigate("/")
    }

    const handleUpdate = () => {
        navigate("/updateblog", { state: { item } });
    }

    const handleLike = () => {
        if (click) {
            setLikeNumber(likeNumber + 1);
            setLikeColor("red");
            setClick(!click);
        } else {
            setLikeNumber(likeNumber - 1);
            setLikeColor();
            setClick(!click);
        }
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1 className="dash-text" style={{ textAlign: "center" }}>──── Details ────</h1>
            <Card sx={{ width: "80%", height: "80%" }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={item.imageURL}
                    alt="blog photo"
                    objectfit="contain"

                />
                <CardContent style={{ padding: "0" }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "block",
                            backgroundColor: "#EFEEFE",
                            padding: "0.5rem",
                            // fontFamily: "Girassol",
                            height: "250",

                        }}
                    >
                        <div
                            style={{
                                paddingTop: "1rem",
                                textAlign: "center",
                                color: "#046582",
                            }}
                        >
                            <h1>{item.title}</h1>
                            <h4 style={{ color: "grey" }}>{item.date}</h4>
                            <h3 style={{ color: "grey", wordWrap: "break-word" }}>{item.content}</h3>
                        </div>

                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ color: "black", textAlign: "start", mt: 2 }}
                    >
                        <IconButton sx={{ color: "black", fontSize: "medium" }}>
                            <AccountCircleIcon fontSize="small" />
                            {item.author}
                        </IconButton>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={() => {
                            handleLike();
                        }}
                        sx={{ color: `${likeColor}` }}
                        aria-label="add to favorites"
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <span>{likeNumber}</span>
                    <IconButton aria-label="comment">
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <span>1</span>
                </CardActions>
                {(currentUser.email) === (item.author) ?
                    <>
                        <Stack direction="row" spacing={2} style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                            <Button variant="contained" color="error" onClick={() => { handleDelete(item.id) }}>
                                Delete
                            </Button>
                        </Stack>
                        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <button onClick={handleUpdate}>update</button>
                            <button onClick={() => { handleDelete(item.id) }}>delete</button>
                        </div> */}
                    </>
                    : ""
                }




            </Card>
        </div >
    );
};

export default Details;