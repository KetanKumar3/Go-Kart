import React from 'react'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='px-30 py-10 flex justify-between'>
        <div>
            <h1 className='text-3xl font-medium'>Go-Kart.</h1>
        </div>
        <div>
            <ul className='flex justify-center items-center gap-10 text-lg'>
                <li>Home</li>
                <li>Shop</li>
                <li>Admin</li>
                <div className='flex bg-gray-100 gap-4 justify-center items-center rounded-3xl px-4 py-2'>
                    <FaSearch />
                    <input className='outline-none' type='text' placeholder='search product' />
                </div>

                <button className='px-8 py-2 bg-green-500 rounded-3xl'>Login</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar