import React from 'react'
import BlogCard from '../components/BlogCard'
// import BlogFetch from "../contexts/BlogContext"
import { useContext } from "react"
import { BlogContext } from '../contexts/BlogContext';
import loadingGif from "../assets/loading.gif"
import { fontSize } from '@mui/system';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { isLoading, blogList } = BlogFetch();


  // console.log(blogList)
  return (
    <div>
      <Typography sx={{ textAlign: "center", fontSize: { xs: '0.9rem', xl: "1.5rem" }, fontFamily: "inherit" }}>
        <h1 className="dash-text" >──── Dashboard ────</h1>
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          // margin: "3rem",
          justifyContent: "center"
        }}
      >
        {isLoading ? <img src={loadingGif} alt="loading gif" /> : <>

          {
            blogList?.map((item) => (

              <BlogCard item={item} key={item.id} />
            ))
          }

        </>}


      </div>


    </div>
  )
}

export default Dashboard