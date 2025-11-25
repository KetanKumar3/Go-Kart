import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-4 justify-between px-30 py-20'>
        <div>
            <h3 className='text-3xl font-bold'>GoKart</h3>
            <p className='pr-8 text-sm'>Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.</p>
        </div>
        <div>
            <ul>
                <li className='text-xl font-medium'>Products</li>
                <li>Earphones</li>
                <li>Headphones</li>
                <li>Smartphones</li>
                <li>Laptop</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='text-xl font-medium'>Websites</li>
                <li>Home</li>
                <li>Privacy Policy</li>
                <li>Become Plus Member</li>
                <li>Create Your Store</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='text-xl font-medium'>Contact</li>
                <li>+1234567890</li>
                <li>contact@example.com</li>
                <li>794 Francisco, 94102</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer