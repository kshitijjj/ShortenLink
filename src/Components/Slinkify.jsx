import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import Login from "./Login";
import Navbar2 from './Navbar2';
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import { FaCopy, FaQrcode, FaSadCry } from "react-icons/fa";
import Alert from '@mui/material/Alert';
import animateData1 from "../link.json";
import Lottie from 'lottie-react';
import Headroom from 'react-headroom';
import AOS from "aos";
import { toPng } from 'html-to-image';
import "aos/dist/aos.css";

const Slinkify = () => {
    let qrCodeRef = useRef(null);
    const num="https://shorten-link-jet.vercel.app/home"
    const navigate=useNavigate();
    const [inputLink, setInputLink] = useState("");
    const [shortLink,setShortLink]=useState("");
    const [check,setCheck]=useState(false);
    const [genqr,setgenqr]=useState(false);
    const [transition,settransition]=useState(false);
    const [qrtransition,setqrtransition]=useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate("/login");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Clicked");
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                };
                const response = await axios.post(`https://shorten-link-jet.vercel.app/shortenlink`, { inputLink }, config);
                const shortenUrl=response.data.shortenUrl;
                settransition(!transition);

                setShortLink(shortenUrl);
                /* setTimeout(() => {
                    setisLink(false);
                }, 7000); */
                
            } catch (error) {
                console.log(error.response ? error.response.data : error.message);
            }
        } else {
            navigate("/login")
            console.log("No token found");
        }
    };

    const handleHistory=async ()=>{
        const token=localStorage.getItem('token');
        if(token){
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const history=await axios.get("https://shorten-link-jet.vercel.app/history",config);
                console.log(history.data);
                navigate("/shortenlink/history")
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handlecopy=()=>{
        navigator.clipboard.writeText(shortLink);
        setCheck(true);
        setTimeout(() => {
            setCheck(false)
        }, 2000);
    }

    const handlecancel=()=>{
        settransition(!transition)
        setInputLink("");
    }

    const handlegenqr=()=>{
        setqrtransition(!qrtransition)
    }

    const handlecancelqr=()=>{
        setqrtransition(!qrtransition)
    }

    const handleqrdownload = async () => {
        try {
        const dataURL=await toPng(qrCodeRef.current)
        let downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "QRCode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        } catch (error) {
            console.log(error);
        }
        
      };

    return (
        <>
        {check && (
        <div className="sticky top-0">
        <Alert severity="success">
        Shorten link copied to clipboard.
        </Alert>
        </div>
    )}
    <Headroom>
    <Navbar2 handleHistory={handleHistory}  ButtonText="View History"/>
    </Headroom>


            <div className='flex md:flex-row md:justify-between flex-col'>
          {/*   <Lottie className=-[40.6rem]" animationData={animateData1} /> */}

            <div className="pt-[5rem] pl-[5rem] flex flex-col h-[40.25rem]">

            {/* Heading */}
            <div className='pb-[2rem]'>
            <p className="font-bold font-poppins text-[3rem]  text-black">Streamline Your <span className="text-[#4661EF]">URLs</span></p>
            <p className="text-black w-[42rem] tracking-normal text-[1.1rem] text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia labore blanditiis ipsa nihil velit mollitia libero nemo explicabo accusamus? Minima dicta sed pariatur exercitationem assumenda quis</p>
            </div>


            {/* Input Link */}
            <form className="flex gap-5 pb-[0.55rem]"  onSubmit={handleSubmit} >
                <input className="bg-gray-200 text-md font-light pl-[2rem] pr-[2rem] w-[42.25rem] text-left py-[1.15rem] rounded-lg" 
                type="url" 
                placeholder='Enter Your Url' 
                onChange={(e) => setInputLink(e.target.value)} 
                value={inputLink}></input>
                <button className="bg-[#4661EF] bg-opacity-80 rounded-md px-[2.5rem] font-bold text-white" type="submit">Shorten Url</button>
           </form>
            
            {/* Shorten Url */}
            <div className={`flex items-center mt-2 transition-all duration-200 ease-out delay-100   ${transition ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex justify-between items-center bg-[#4661EF] bg-opacity-20 rounded-lg pl-[1.2rem] py-[0.2rem] shadow-lg w-[30.2rem] '>

            <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <p className="text-sm font-poppins font-medium text-[#4661EF] text-opacity-85 pl-[0.4rem]">{shortLink}</p>
            </div>

            <div className="flex gap-4 pr-[1.4rem] items-center p-2">

            <div onClick={handlecopy} className="bg-black bg-opacity-80 p-[0.75rem] rounded-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            </div>

            <div onClick={handlegenqr} className="  bg-black bg-opacity-80 p-[0.75rem] rounded-md cursor-pointer">
            <img className='w-[20px] h-[20px] cursor-pointer' src="../qs.png"  alt="" srcset="" />
            </div>
            </div>

            </div>

            <div onClick={handlecancel} className="bg-[#4661EF] bg-opacity-20 rounded-lg p-4 ml-[2rem] shadow-md cursor-pointer">
            <svg className="opacity-75" xmlns="http://www.w3.org/2000/svg " width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="blue"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            
            </div>
            </div>

           {/*  QR GENERATE */}

            <div className={`mr-[7rem] mt-[4rem] h-[28.12rem] rounded-lg backdrop-blur-md bg-[#4661EF] bg-opacity-20 transition-all duration-950 ease-out delay-100 ${qrtransition ? 'opacity-100' : 'opacity-0'} `}>

            <div onClick={handlecancelqr} className=" absolute right-[1rem] bg-gray-400 bg-opacity-20 mt-4 rounded-lg p-3 ml-[2rem] shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>

                <div className=" flex flex-col items-center px-6 py-10" >
                     {/* image */}
                <div ref={qrCodeRef} >
                <QRCode  
                value={shortLink}
                size={210}
                style={{padding:"1rem",marginTop:"1.5rem"}}
                />

                </div>
                

                {/* Shorten Url */}
                <div onClick={handlecopy}  className="flex cursor-pointer text-center gap-3 justify-center items-center bg-[#4661EF] bg-opacity-20 rounded-lg px-5 py-4 mt-4 shadow-lg  ">
                    <p className="text-xs font-poppins font-bold  text-[#4661EF] text-center text-opacity-85 pl-[0.4rem]">{shortLink}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                </div>

                <div onClick={handleqrdownload} className="flex text-center justify-center items-center bg-[#4661EF]  rounded-lg px-5 py-4 mt-4 w-[16rem] shadow-lg  ">
                    <p className="text-xs font-poppins font-bold  text-white text-center text-opacity-85 pl-[0.4rem]">Donwload Qr code</p>
                </div>

                


                </div>

            </div>
            </div>

           
    </>
    )
};

export default Slinkify;

