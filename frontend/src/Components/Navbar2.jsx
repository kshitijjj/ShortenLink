import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

const Navbar2 = (props) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
    return (
      <>
    {/*     <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-evenly">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="./icon5.png" alt="" />
      <span class="ml-3 text-xl font-poppins font-bold" >Slinkify</span>
    </a>
   {/*  <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-8">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Features</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Review</a>
      <a class="mr-5 hover:text-gray-900">Contact</a>
    </nav> */}
    {/* <button onClick={props.handleLogout} class="inline-flex items-center bg-[#4661EF] border-0 py-[0.7rem] px-[2rem] focus:outline-none hover:bg-[#4661EF] hover:bg-opacity-90 font-poppins font-bold text-white rounded-md text-sm mt-4 md:mt-0">{props.ButtonText}</button>
  </div>
</header> */} 


<div className="flex bg-[#E4E8FD] backdrop-blur-lg justify-between  pl-[2.5rem] pr-[2.2rem] py-[1.2rem] ">
    <a class="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="./icon5.png" alt="" />
      <span class="ml-3 text-xl font-poppins font-bold text-black" >Slinkify</span>
    </a>
   {/*  <nav class=" flex flex-wrap items-center text-base justify-center gap-8 mr-auto ml-[17.2rem]">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Features</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Review</a>
      <a class="mr-5 hover:text-gray-900">Contact</a>
    </nav> */}

    <div className="flex justify-center  items-center gap-[1.5rem] ">
    <button onClick={props.handleHistory} class="inline-flex items-center bg-[#E4E8FD] border-0 py-[0.7rem] px-[2rem] focus:outline-none text-[#4661EF] hover:bg-[#4661EF] hover:bg-opacity-90 font-poppins font-bold rounded-md text-sm mt-4 md:mt-0">{props.ButtonText}</button>
    <DarkModeSwitch className=" " 
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
    <FaUserCircle className="w-[1.6rem] h-[1.8rem]" />
  {/*  <img src="icon.png" className="w-[1.6rem] h-[1.8rem]" alt="" srcset="" /> */}
    
    </div>
</div>
</>
    );
}

export default Navbar2;
