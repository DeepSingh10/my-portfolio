import AboutMeContent from '@/components/AboutMeContent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#020618] min-h-screen h-full flex justify-center items-center p-7">
      <div className='relative bg-[#0F172B] min-h-[calc(100vh-60px)] max-h-fit w-full border rounded-sm border-[#314158] opacity-80 flex flex-col justify-between'>
        <Header />
        <AboutMeContent />
        <Footer />
      </div>
    </div>
  )
}

export default page