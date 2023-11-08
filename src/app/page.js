import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <main className='flex min-h-screen max-w-7xl mx-auto '>
     
      {/* Sidebar */}
      <Sidebar/>

      {/* Feed  */}
      <Feed/>

      {/* Widgets */}

      <Widgets/>

      {/* Modal */}


    </main>
     
    </>
  )
}
