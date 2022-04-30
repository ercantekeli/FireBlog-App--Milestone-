import React from 'react'
import BlogCard from '../components/BlogCard'
// import BlogFetch from "../contexts/BlogContext"
import { useContext } from "react"
import { BlogContext } from '../contexts/BlogContext';
import loadingGif from "../assets/loading.gif"
import { fontSize } from '@mui/system';

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { isLoading, blogList } = BlogFetch();


  // console.log(blogList)
  return (
    <div>
      <h1 className="dash-text" style={{ textAlign: "center", fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem', xl: "20rem" } }}>──── Dashboard ────</h1>
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