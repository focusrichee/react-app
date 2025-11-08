import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import {TbTruckDelivery } from 'react-icons/tb';
import {MdHelp,MdFavorite } from 'react-icons/md';





const Navbar = () => {
    

    const [nav, setnav ] = useState(false);
    return (
        <div className='max-w-[1640px]-mx-auto flex items-center justify-between p-4
    '>
            <div className='flex items-center'>
                <div onClick={() => setnav(!nav)}
                className='cursor-pointer'>
                    <AiOutlineMenu size={40} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] '>
                    <p className='bg-black text-white rounded-full p-2' >Delivery</p>
                    <p className='p-2'>Pickup</p>

                </div>




            </div>
            {/* {Search button} */}

            <div className='bg-gray-200 rounded-full flex items-center  w-[200px] px-2 sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent w-full p-2 focus:outline-none' type="text" placeholder='Search food' />
            </div>
            
            {/* cart button */}

            <button className='bg-black text-white hidden md:flex items-center p-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2' />
                cart 
            </button>

            {/* Mobile Menu */}

            {/* overlay */}

            {/* The Hook usestate */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen top-0 left-0 z-10'></div>: ''}

            {/* slide drawer */}

            <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} onClick={() => setnav(!nav)}
                 className='absolute right-4 top-6 cursor-poniter' />
                 <h2 className='text-2xl p-6'>
                    Best <span className='font-bold'>Eats</span>
                 </h2>
                 <nav>
                    <ul className='flex flex-col p-6 text-gray-800'>
                        <li className='text-xl py-4 flex items-center'><TbTruckDelivery className='mr-4'/> Orders</li>
                        <li className='text-xl py-4 flex items-center'> <MdFavorite className='mr-4'/>Favourites</li>
                        <li className='text-xl py-4 flex items-center'> <FaWallet className='mr-4'/>Wallets</li>
                        <li className='text-xl py-4 flex items-center'> <MdHelp className='mr-4'/>Help</li>
                        <li className='text-xl py-4 flex items-center'> <AiFillTag className='mr-4'/>Promotions</li>
                        <li className='text-xl py-4 flex items-center'> <BsFillSaveFill className='mr-4'/>Best One</li>
                        <li className='text-xl py-4 flex items-center'> <FaUserFriends className='mr-4'/>Invite Friends</li>
                    </ul>
                 </nav>

            </div>
            














        </div>
    )
}

export default Navbar