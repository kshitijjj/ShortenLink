import React from 'react';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";


const Navbar = (props) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

    return (
      <>
<header className="flex bg-[#E4E8FD]  justify-evenly pl-[1.3rem] pr-[1.2rem] pt-[1.6rem] pb-[1rem] ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="./icon5.png" alt="" />
      <span class="ml-3 text-xl font-poppins font-bold" >Lorem Ipsum</span>
    </a>
    <nav class=" flex flex-wrap items-center text-base justify-center gap-8 mr-auto ml-[17.6rem]">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Features</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Review</a>
      <a class="mr-5 hover:text-gray-900">Contact</a>
    </nav>

  {props.islog?(
    <div className="flex justify-center items-center gap-[1.5rem]">
    <DarkModeSwitch className=" " 
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
    <FaUserCircle className="w-[1.6rem] h-[1.8rem]" />
  {/*  <img src="icon.png" className="w-[1.6rem] h-[1.8rem]" alt="" srcset="" /> */}
    <button onClick={props.handleLogout} class="inline-flex items-center bg-[#4661EF] border-0 py-[0.7rem] px-[2rem] focus:outline-none hover:bg-[#4661EF] hover:bg-opacity-90 font-poppins font-bold text-white rounded-md text-sm mt-4 md:mt-0">{props.ButtonText}</button>
    </div>
  ):(
    <button onClick={props.handleLogout} class="inline-flex items-center bg-[#4661EF] border-0 py-[0.7rem] px-[2rem] focus:outline-none hover:bg-[#4661EF] hover:bg-opacity-90 font-poppins font-bold text-white rounded-md text-sm mt-4 md:mt-0">{props.ButtonText}</button>
  )}
</header>
</>
    );
}

export default Navbar;
