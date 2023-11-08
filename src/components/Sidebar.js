"use client"
import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import {  HomeIcon } from '@heroicons/react/24/solid'
import { 
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon,
    EllipsisHorizontalIcon
   
} from '@heroicons/react/24/outline'


const Sidebar = () =>{
    return(
        <>
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
           {/* Twitter Logo */}
           <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"/>
           </div>

           {/* Menu */}

           <div className="mt-4 mb-2.5 xl:items-start">
               <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
               <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
               <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
               <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
               <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
               <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
               <SidebarMenuItem text="Profile" Icon={UserIcon}/>
               <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}/>
              
           </div>

           {/* Button */}

           <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

           {/* Mini Profile */}
           <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img className="h-10 w-10 rounded-full xl:mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwt-pTdtAdWQPj-CxFuI_KG8OzgPEl5hO293rHUGj9DHF-BcyNS87H63JtTUjAD2U_MtI&usqp=CAU" alt="user-image"/>
                <div className="leading-5 hidden xl:inline">
                     <h4 className="font-bold">Tasim</h4>
                     <p className="text-gray-500">@mostasimmahmud</p>
                </div>
                <EllipsisHorizontalIcon className="h-5 xl:ml-8"/>
           </div>
        </div>
        </>
    )
}

export default Sidebar