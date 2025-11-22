import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";


const Specification = () => {
    return (
        <div className='px-30 space-y-3 py-10'>
            <h3 className='text-center text-3xl font-bold'>Our Specifications</h3>
            <p className='text-center'>We offer top-tier service and convenience to ensure your shopping experience is smooth,<br /> secure and completely hassle-free.</p>
            <div className='w-full flex gap-10'>
                <div className='w-1/3 bg-blue-500 h-48 rounded-2xl flex flex-col justify-center items-center gap-1'>
                    <BsFillSendFill size={24} className='text-amber-300' />
                    <h3 className='text-xl font-bold'>Free Shipping</h3>
                    <p className='text-center px-6'>Enjoy fast, free delivery on every order no conditions, just reliable doorstep.</p>
                </div>
                <div className='w-1/3 bg-cyan-500 h-48 rounded-2xl flex flex-col justify-center items-center gap-1'>
                    <TbTruckReturn size={32} className='text-amber-300' />
                    <h3 className='text-xl font-bold'>7 Days easy Return</h3>
                    <p className='text-center px-6'>Change your mind? No worries. Return any item within 7 days.</p>
                </div>
                <div className='w-1/3 bg-emerald-400 h-48 rounded-2xl flex flex-col justify-center items-center gap-1'>
                    <BiSupport size={32} className='text-amber-300' />
                    <h3 className='text-xl font-bold'>24/7 Customer Support</h3>
                    <p className='text-center px-6'>We're here for you. Get expert help with our customer support.</p>
                </div>
            </div>
        </div>
    )
}

export default Specification