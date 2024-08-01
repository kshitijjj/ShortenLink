import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import animationData1 from '../loading.json'
import Lottie from 'lottie-react';

const Signup = () => {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [animate,setAnimate]=useState(false);
    const [loading,setLoading]=useState(false);

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        
       
        try {
            const response = await axios.post("https://shorten-link-tan.vercel.app/signup",{name,email,password,confirmPassword});
            setLoading(true);
            if(response.status===200){
                /* console.log("Hogya chl gya sign in hogya") */
                setTimeout(() => {
                const token=localStorage.setItem("token",response.data.token);
                 navigate("/");   
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <>

        {loading?(
        <Lottie className='w-[25rem] h-[25rem] m-auto mt-[8rem] justify-center ' animationData={animationData1} loop={true} />
        ):(
            <div className="flex items-center">
            {/* written part */}
            <div className="flex flex-col justify-center items-center h-screen bg-[#9BB4F4] bg-opacity-20 w-[40rem]  ">
            <div className="text-left">
                <p className="font-poppins text-[#4661EF] font-bold text-[3.2rem]">Hey there !!</p>
                <p className="font-poppins text-opacity-60 w-[28rem] text-[1.2rem]">"Sign up today to enjoy the convenience of our link shortener and get inspired daily by our powerful quote generator. Transform your online experience with us!</p>
            </div>
            </div>
            

            {/* Form part */}
            <form onSubmit={HandleSubmit} className="flex flex-col justify-center items-center h-full  ">
            <div className="ml-[12rem] mt-[2.2rem]">
                <p className='text-[#4661EF] font-poppins font-semibold leading-[0.05rem] '>Name</p>
                <FaUser className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                <input className=" w-[22.75rem] bg-[#4661EF] bg-opacity-15 py-[0.7rem] px-[2.5rem] rounded-[0.3rem]" type="text" placeholder='name' name="name" value={name} onChange={(e)=>{setName(e.target.value)}} id="" />
            </div>
            <div className="ml-[12rem] mt-[2.2rem]">
                <p className='text-[#4661EF] font-poppins font-semibold leading-[0.05rem]'>Email</p>
                <FaUser className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                <input className=" w-[22.75rem] bg-[#4661EF] bg-opacity-15 py-[0.7rem] px-[2.5rem] rounded-[0.3rem]" type="email" placeholder='email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="" />
            </div>
            <div className="ml-[12rem] mt-[2.2rem]">
                <p className='text-[#4661EF] font-poppins font-semibold leading-[0.05rem]'>Password</p>
                <FaUser className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                <input className=" w-[22.75rem] bg-[#4661EF] bg-opacity-15 py-[0.7rem] px-[2.5rem] rounded-[0.3rem]" type="password" placeholder='password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="" />
            </div>
            <div className="ml-[12rem] mt-[2.2rem]">
                <p className='text-[#4661EF] font-poppins font-semibold leading-[0.05rem]'>Confirm Password</p>
                <FaLock className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                <input className=" w-[22.75rem] bg-[#4661EF] bg-opacity-15 py-[0.7rem] px-[2.5rem] rounded-[0.3rem]" type="password" placeholder='confirm password' name="confirmPassword" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.v)}} id="" />
            </div>
            <button type="submit" className="bg-black text-base mt-[2.8rem] w-[24.6rem] ml-[11.5rem] text-white px-[2.5rem] py-[0.8rem] md:px-[3.5rem] md:py-[1.1rem] rounded-[0.3em] font-bold" >Sign Up</button>
            <a href='/' className='text-[#4661EF] font-poppins font-semibold ml-[12rem] mt-[2.8rem]'>Already have an account</a>
            </form>
        </div>
        )}
        {/* Parent div */}
        
        </>
        
    );
}

export default Signup;
