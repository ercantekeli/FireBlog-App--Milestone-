import * as React from "react";
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
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Toastify from "../helpers/toastNotify";


export default function BlogCard({ item }) {
    const { currentUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const [likeNumber, setLikeNumber] = useState(0);
    const [likeColor, setLikeColor] = useState();
    const [click, setClick] = useState(true);





    ///like make red and +1 function
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

    const handleClick = () => {

        return ((currentUser) ? (navigate("/details", { state: { item } })) : (navigate("/login"), Toastify("To see details, Please log in")))

    }

    return (
        <Card sx={{ width: 300, height: 500 }} style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.5) 10px 10px 5px 0px", backgroundColor: "#fff", position: "relative" }} >
            <CardMedia
                component="img"
                height="230"
                image={item.imageURL}
                alt="blog photo"
                objectfit="contain"
                onClick={handleClick}
            />
            <CardContent style={{ padding: "0px" }} onClick={handleClick}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: "block",
                        backgroundColor: "#EFEEFE",
                        padding: "0.5rem",
                        // fontFamily: "Girassol",
                        height: "50%"
                    }}
                >
                    <div
                        style={{
                            paddingTop: "1rem",
                            textAlign: "center",
                            color: "#046582",
                            height: "50%",

                        }}
                    >
                        <h2>{`${item.title}`.substring(0, 20) + ""}</h2>
                        <h5 style={{ color: "grey", margin: "0.5rem" }}>{item.date}</h5>
                        <h5 color="#046582">{`${item.content}`.substring(0, 30) + "..."}</h5>
                    </div>


                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "black", textAlign: "start", mt: 2 }}
                >
                    <IconButton sx={{ color: "black", fontSize: "small" }}>
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
        </Card>
    );
}