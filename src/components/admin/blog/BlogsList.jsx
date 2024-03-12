/* eslint-disable react/prop-types */

import BlogCard from "./BlogCard"

export default function BlogsList({blogs=[]}) {
  return (
    <div>
      {
        blogs?.map((blog)=>{
            return <BlogCard key={blog._id} {...blog}/> 
        })
    }
    </div>
  )
}
