import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
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
        <BlogCard style={{ margin: "auto" }} />
        <BlogCard style={{ margin: "auto" }} />
      </div>
    </div>
  )
}

export default Dashboard