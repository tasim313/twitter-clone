import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

const Feed = () =>{
  const posts = [
    {
      id: 1,
      name: "Tasim",
      username: "tasim",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU",
      img:"https://img.freepik.com/free-photo/white-flower-petals-with-water-drops-pollen_181624-27665.jpg",
      text: "nice view!",
      timestamp:"2 hours ago"
    },

    {
      id: 2,
      name: "Tasim",
      username: "tasim",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU",
      img:"https://w0.peakpx.com/wallpaper/401/250/HD-wallpaper-bubble-cool-flower-nature-fun.jpg",
      text: "nice view!",
      timestamp:"2 hours ago"
    },
    {
      id: 3,
      name: "Tasim",
      username: "tasim",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU",
      img:"https://c4.wallpaperflare.com/wallpaper/920/307/595/flowers-lily-flower-nature-wallpaper-preview.jpg",
      text: "nice view!",
      timestamp:"2 hours ago"
    },
    {
      id: 4,
      name: "Tasim",
      username: "tasim",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU",
      img:"https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
      text: "nice view!",
      timestamp:"2 hours ago"
    },
    {
      id: 5,
      name: "Tasim",
      username: "tasim",
      userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhN20SoDv14YZS0OD6BTnsLxXjadGDKW2G3A&usqp=CAU",
      text: "nice view!",
      timestamp:"2 hours ago"
    },

  ]
  return(
    <>
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
             <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
             <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
             </div>
        </div>
        <Input/>
        {posts.map((post)=>(
          <Post key={post.id} post={post}/>
        ))}
    </div>
    </>
  )
}

export default Feed