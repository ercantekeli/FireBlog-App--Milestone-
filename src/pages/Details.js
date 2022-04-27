import React from "react";
import { useLocation } from "react-router";
import BlogCard from "../components/BlogCard";

const Details = () => {
    const location = useLocation();
    const item = location.state.item;
    return (
        <div>
            <BlogCard item={item} />
        </div>
    );
};

export default Details;