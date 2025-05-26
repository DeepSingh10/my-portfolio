import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full h-[45px] border-[#314158] border-t flex justify-between text-[#90A1B9]'>
            <div className='flex w-full'>
                <div className='border-r border-[#314158] w-full max-w-fit px-6 py-2'>find me in:</div>
                <div className='border-r border-[#314158] w-full max-w-fit px-4 text-center py-3'>
                    <FaXTwitter />
                </div>
                <div className='border-r border-[#314158] w-full max-w-fit px-4 text-center py-3'><FaLinkedinIn /></div>
                {/* <div className='border-r border-[#314158] w-full max-w-fit px-4 text-center py-3'>_projects</div> */}
            </div>
            <div className='flex w-[20%] justify-end'>
                <div className='border-l border-[#314158] w-full max-w-fit px-6 text-center py-2'>_contact_me</div>
            </div>
        </div>
    )
}

export default Footer