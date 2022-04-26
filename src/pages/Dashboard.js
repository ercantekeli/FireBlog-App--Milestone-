import React from 'react'
import BlogCard from '../components/BlogCard'
// import BlogFetch from "../contexts/BlogContext"
import { useContext } from "react"
import { BlogContext } from '../contexts/BlogContext';

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { isLoading, blogList } = BlogFetch();


  // console.log(blogList)
  return (
    <div>
      <h1 className="dash-text" style={{ textAlign: "center" }}>──── Dashboard ────</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
        {
          blogList?.map((item, index) => (

            <BlogCard item={item} index={index} />
          ))
        }

      </div>


    </div>
  )
}

export default Dashboard