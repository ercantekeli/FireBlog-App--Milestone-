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



const Details = () => {
    const location = useLocation();
    const item = location.state.item;
    const [likeNumber, setLikeNumber] = useState(0);
    const [likeColor, setLikeColor] = useState();
    const navigate = useNavigate()
    const [click, setClick] = useState(true);
    const { currentUser } = useContext(AuthContext);
    const { DeleteBlog, EditBlog } = useContext(BlogContext);

    // const { id } = item.id;
    // console.log(item)
    const handleDelete = (id) => {
        DeleteBlog(id)
        navigate("/")
    }

    const handleUpdate = () => {
        navigate("/updateblog", { state: { item } });
    }
    return (
        <div>
            <Card sx={{ width: 700, height: 900 }}>
                <CardMedia
                    component="img"
                    height="230"
                    image={item.imageURL}
                    alt="blog photo"
                    objectfit="contain"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: "block",
                            backgroundColor: "#EFEEFE",
                            padding: "0.5rem",
                            fontFamily: "Girassol",
                        }}
                    >
                        <div
                            style={{
                                paddingTop: "1rem",
                                textAlign: "center",
                                color: "#046582",
                            }}
                        >
                            <h3>{item.title}</h3>
                            <h6 style={{ color: "grey" }}>{item.date}</h6>
                        </div>
                        {item.content}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ color: "black", textAlign: "start", mt: 2 }}
                    >
                        <IconButton sx={{ color: "black", p: 0 }}>
                            <AccountCircleIcon fontSize="small" />
                        </IconButton>
                        {item.author}
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

                <button onClick={handleUpdate}>update</button>
                <button onClick={() => { handleDelete(item.id) }}>delete</button>


            </Card>
        </div>
    );
};

export default Details;