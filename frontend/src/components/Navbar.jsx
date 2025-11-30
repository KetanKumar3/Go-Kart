import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import toast from 'react-hot-toast';


const Navbar = () => {
  const [token, setToken] = useState("");
  const [usertoken, setUsertoken] = useState(true)
  const [profile, setProfile] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const updateToken = () => {
      setToken(localStorage.getItem("adminToken"));
    };

    updateToken();
    window.addEventListener("storage", updateToken);

    return () => window.removeEventListener("storage", updateToken);
  }, []);


  useEffect(() => {
    const updateuserToken = () => {
      setUsertoken(localStorage.getItem("userToken"));
    };

    updateuserToken();
    window.addEventListener("storage", updateuserToken);

    return () => window.removeEventListener("storage", updateuserToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    toast.success("Admin Logout SuccessFully")
    navigate("/");
  };

  const handleUserLogin = () => {
    navigate('/user/login')
  }

  const handleUserLogout = async () => {
      const response = await fetch('http://localhost:3000/user/logout',{
      method:'POST',
      credentials:'include'
    })
   
    const data = await response.json()
    if(response.ok){
      localStorage.removeItem('userToken')
      setUsertoken(false)
      toast.success(data.message)
      console.log('logout successfully')
    }
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

          {/* {token ? (
            <li onClick={handleLogout} className='cursor-pointer'>
              Logout
            </li>
          ) : (
            <NavLink to='/admin/login'><li>Admin</li></NavLink>
          )} */}
          {token ? (
            <li onClick={handleLogout} className='cursor-pointer'>
              Logout
            </li>
          ) : ""}

          {token ? (
            <NavLink to='/admin/dashboard'><li>Admin</li></NavLink>
          ) : (
            <NavLink to='/admin/login'><li>Admin</li></NavLink>
          )}

          <div className='flex bg-gray-100 gap-4 justify-center items-center rounded-3xl px-4 py-2'>
            <FaSearch />
            <input className='outline-none' type='text' placeholder='search product' />
          </div>


          {usertoken ?
            <div className="relative">
              <div
                onClick={() => setProfile(!profile)}
                className="hover:cursor-pointer"
              >
                <RxAvatar size={38} />
              </div>

              {profile && (
                <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-32 z-10">
                  <p className="hover:bg-gray-100 p-2 rounded">Profile</p>
                  <p onClick={handleUserLogout} className="hover:bg-gray-100 p-2 rounded">Logout</p>
                </div>
              )}
            </div>
            :
            <button onClick={handleUserLogin} className='px-8 py-2 bg-green-500 rounded-3xl hover:cursor-pointer'>Login</button>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;