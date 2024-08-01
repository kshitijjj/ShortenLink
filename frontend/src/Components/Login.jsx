import React, { useState } from 'react';
import axios from "axios";
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData1 from '../loading.json'

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("https://shorten-link-beta.vercel.app/login",{email,password});
            setLoading(true);
            if(response.status===200){
                setTimeout(() => {
                localStorage.setItem('token',response.data.token);
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
            <div className="flex flex-col md:flex-row md:items-center md:h-screen">
            {/* written part */}
            <div className="flex flex-col justify-center items-center md:h-full bg-[#9BB4F4] bg-opacity-20 md:w-[40rem]">
            <div className="md:text-left text-center py-[2rem] md:py-[0rem]">
                <p className="font-poppins text-[#4661EF] font-bold text-[2rem] md:text-[3.2rem]">Welcome Back !!</p>
                <p className="font-poppins text-opacity-60 w-[28rem] text-[0.8rem] md:text-[1.2rem] px-[3rem] pt-[0.5rem] md:pt-[0rem] md:px-[0rem]">"Login today to enjoy the convenience of our link shortener and get inspired daily by our powerful quote generator. Transform your online experience with us!</p>
            </div>
            </div>
            

            {/* Form part */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:h-full mt-[3rem] mb-[6rem] md:mt-[0rem] md:mb-[0rem]">
            <div className="md:ml-[12rem] md:my-[2.2rem]">
                <p className='text-[#4661EF] md:text-base text-sm font-poppins font-semibold leading-[0.005rem]'>Email</p>
                <FaUser className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                < input type="email" className=" md:w-[22.75rem] bg-[#4661EF] bg-opacity-15 md:py-[0.7rem] md:px-[2.5rem] px-[2.2rem] py-[0.6rem] rounded-[0.3rem]" placeholder='email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="" />
            </div>
            <div className="md:ml-[12rem] md:mt-[0rem] mt-[2.5rem]">
                <p className='text-[#4661EF] md:text-base text-sm font-poppins font-semibold leading-[0.005rem]'>Password</p>
                <FaLock className="relative left-3 top-[2.5rem] transform -translate-y-1/2 " />
                <input type="password" className="md:w-[22.75rem] bg-[#4661EF] bg-opacity-15  md:px-[2.5rem] px-[2.2rem] py-[0.6rem]  rounded-[0.3rem]" placeholder='password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="" />
            </div>
            <button type="submit" className="bg-black text-base md:mt-[2.8rem] mt-[2.8rem] md:w-[24.6rem] w-[19rem] md:ml-[11.5rem] text-white md:px-[3.5rem] md:py-[1.1rem] py-[0.8rem] rounded-[0.3em] font-bold" >Login</button>
            <a href='/' className='text-[#4661EF] font-poppins mt-[2.5rem] font-semibold md:ml-[12rem] md:mt-[2.8rem]'>Don't have an account</a>
            </form>
        </div>
        )}
        {/* Parent div */}
        

        </>
        
    );
}

export default Login;
