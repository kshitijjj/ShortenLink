import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import About from './About';
import Review from './Review';
import Contact from './Contact';
import Review2 from './Review2';
import Navbar from './Navbar';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import animationData from '../homeanimate.json';
import Lottie from 'lottie-react';
import AOS from "aos";
import "aos/dist/aos.css";
import Headroom from "react-headroom";
import animationData1 from '../loading.json'
import Tracking from './Tracking';

    const Home=()=>{
        axios.defaults.withCredentials=true;
        const navigate=useNavigate();
        const [LoggedIn,setLoggedIn]=useState(false);
        const [user,setUser]=useState(null);
        const [loading,setLoading]=useState(false);
        const userid="";
        useEffect(() => {
            const fetchUserData = async () => {
                const token = localStorage.getItem('token');
                if (token) {
                    try {
                        const response = await axios.get('https://shorten-link-beta.vercel.app/user', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (response.status === 200) {
                            console.log(response.data);
                            setLoggedIn(true);
                            setUser(response.data);
                            userid=response.data;
                            console.log(userid);
                        }
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                    }
                }
            };
            fetchUserData();
        }, []);

    const handleLogout=()=>{
        try {
            localStorage.removeItem('token');
            setTimeout(() => {
                setLoggedIn(false);
                setUser(null);
                navigate('/');  
            }, 1500);
           

        } catch (error) {
            console.log(error);
        }
    }

    const handleSignup=async()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/signup")
        }, 1500);
    }

    const handleLogin=async()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/login")
        }, 1500);
    }



    return (
        <>
        {loading?( 
        <Lottie className='w-[25rem] h-[25rem] m-auto mt-[8rem] justify-center ' animationData={animationData1} loop={true} />
        ):
        (
            <div>
            {!LoggedIn?(
                <Headroom>
                <Navbar handleLogout={handleLogin} ButtonText="Get Started" islog={false}/>
                </Headroom>
            ):(
                <Headroom>
            <Navbar handleLogout={handleLogout} ButtonText="Logout" islog={true}/>
                </Headroom>
            )}
    
            <div className="flex flex-col-reverse items-center justify-center py-[4rem] md:flex-row md:justify-evenly ">
    
                {/* left side part full div */}
                <div className="pt-[2.3rem] md:pt-[2rem] md:w-[39rem]">
    
                   {/*  Heading div */}
                    <div >
                        <p className="text-[2.2rem]  h-[3rem] text-center md:text-left md:text-[3.5rem] md:h-[4.388rem] font-extrabold md:leading-2 ">Simplify <span className="text-[2.2rem] md:text-[3.5rem] text-[#4661EF] font-extrabold">Links,</span></p>
                        <p className="text-[2.2rem] text-center md:text-left md:text-[3.5rem] font-extrabold  "> Ignite <span className="text-[2.2rem] md:text-[3.5rem] text-[#4661EF] font-extrabold">Inspiration</span> </p>
                    </div>
    
                    {/* Heading Description div */}
                    <div className="pt-[1.2rem] md:pt-[1.5rem] justify-center md:justify-start md:text-left text-center w-[28rem] px-[1.4rem] md:px-0 md:w-[35rem] "> 
                        <p className="items-center leading-relaxed md:leading-loose tracking-[0.1em] text-base md:text-lg" >Streamline your URLs and ignite</p>
                        <p className="items-center leading-relaxed md:leading-loose tracking-[0.1em] text-base md:text-lg" >your day with our advanced link shortener </p>
                        <p className="items-center leading-relaxed md:leading-loose tracking-[0.1em] text-base md:text-lg">and dynamic quote generator.</p>
                    </div>
    
                   {/* Login sign up Button css and jsx */}
                   {!LoggedIn ? (
                    <div className="pt-[2.4rem] justify-center md:justify-start text-center flex gap-7 md:pt-[2.6rem] md:flex md:gap-14">
                        <button onClick={handleSignup} className="bg-[#4661EF] text-white px-[2.5rem] py-[0.8rem] md:px-[3.5rem] md:py-[1rem] rounded-[0.3em] font-bold" >Sign Up</button>
                        <button onClick={handleLogin}  className="bg-[#4661EF] bg-opacity-15 px-[2.5rem] py-[0.8rem] text-[#4661EF] font-bold md:px-[3.5rem] md:py-[1rem] rounded-[0.3em]" >Login</button>
                    </div>
                   ):
                   <div className="pt-[2.4rem] justify-center md:justify-start text-center flex gap-7 md:pt-[2.6rem] md:flex md:gap-14">
                        <Link className="bg-[#4661EF] text-white px-[2.5rem] py-[0.8rem] md:px-[3.5rem] md:py-[1rem] rounded-[0.3em] font-bold" to="/signup">Discover Features </Link>
                    </div>
                }
                    {/* <p>username is {user.name}</p> */}
                </div>
    
                {/* Full image div */}
                <div>
                    {/* <img className="w-[23rem] pt-[2.4rem] md:w-[40.6rem] md:pt-[2.6rem]"  src="./homeanimate.json" alt=""   /> */}
                    <Lottie className="w-[23rem] pt-[2.4rem] md:w-[40.6rem] md:pt-[2.6rem]" animationData={animationData} loop={true} />
                </div>
            </div>
            
            {/* <Feature/> */}
            <About/>
            <Review2/>
            <Contact/>
            </div>
            )}
            </>
        )};

export default Home;
