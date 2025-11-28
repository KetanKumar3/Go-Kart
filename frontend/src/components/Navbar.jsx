import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const [token, setToken] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem("adminToken"));
        };

        window.addEventListener("storage", handleStorageChange);
        handleStorageChange();

        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    
        const handleLogout = () => {
            const token = localStorage.removeItem("adminToken")
            navigate('/')
            
            
        }
    
    return (
        <div className='px-30 py-10 flex justify-between'>
            <div>
                <h1 className='text-3xl font-medium'>Go-Kart.</h1>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-10 text-lg'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/shop'><li>Shop</li></NavLink>
                    {token ? <NavLink onClick={handleLogout} to='/admin/dashboard'><li>Logout</li></NavLink> : <NavLink to='/admin/login'><li>Admin</li></NavLink>}
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