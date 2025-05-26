import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-[45px] border-[#314158] border-b flex justify-between text-[#90A1B9]'>
            <div className='flex w-full'>
                <div className='border-r border-[#314158] w-full max-w-[250px] px-6 py-2'>Deep Singh Yadav</div>
                <div className='border-r border-[#314158] w-full max-w-fit px-6 text-center py-2 border-b-amber-400 border-b-2'>_hello</div>
                <Link href={"/about-me"} className='border-r border-[#314158] w-full max-w-fit px-6 text-center py-2'>_about_me</Link>
                <div className='border-r border-[#314158] w-full max-w-fit px-6 text-center py-2'>_projects</div>
            </div>
            <div className='flex w-[20%] justify-end'>
                <div className='border-l border-[#314158] w-full max-w-fit px-6 text-center py-2'>_contact_me</div>
            </div>
        </div>
    )
}

export default Header