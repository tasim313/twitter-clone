"use client"
import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Home() {

  const [newsResults, setNewsResults] = useState(null);
  const [newRandomUsers, setNewRandomUsers] = useState(null)
 
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setNewsResults(data));
  }, []);

  useEffect(() =>{
    fetch("https://randomuser.me/api/?results=20&inc=name,login,picture")
    .then((res) => res.json())
    .then((data) => setNewRandomUsers(data));
  }, []);

  return (
    <>
    <main className='flex min-h-screen  mx-auto '>
     
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed  */}
      <Feed/>

      {/* Widgets */}

      <Widgets newsResults={newsResults ? newsResults.articles : []} newRandomUsers={newRandomUsers ? newRandomUsers.results : []}/>

      {/* Modal */}


    </main>
     
    </>
  )
}
