import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        /* One main div for all the headings */
        <>
        {/* Main div */}
        <div data-aos="fade-up" className=" pt-[2rem] md:pt-[3rem]">
        
       {/*  Bold heading */}
        <div data-aos="fade-up" className="justify-center text-center pt-[2.5rem] md:pt-[3.7rem]">
            <p className=" text-[2rem] md:text-[3.5rem] font-poppins font-extrabold h-[2.4rem] md:h-[3.5rem] ">"Unleash the Power of"</p>
            <p className=" text-[2rem] md:text-[3.5rem] font-poppins font-extrabold text-[#4661EF] ">our Features</p>
        </div>

        {/* About us option type button */}
        <div data-aos="zoom-in-up" className="justify-center text-center pt-[2.2rem] md:pt-[3rem]"> 
        <a className="bg-[#4661EF] bg-opacity-15 px-[2.5rem] py-[0.8rem] text-[#4661EF] font-bold md:px-[3.5rem] md:py-[1rem] rounded-[0.3em]" href="">About Us</a>
        </div>

        {/* Description */}
        <div data-aos="zoom-in-up" className="flex justify-center text-center pt-[2.2rem] md:pt-[3.5rem] ">
        <p className="w-[28rem] px-[0.9rem] text-sm md:px-0 md:w-[52rem] md:text-base md:leading-loose tracking-[0.1em] md:text-center">
            Experience the power of our advanced link shortener, which simplifies your URLs, tracks link history, and generates QR codes for effortless sharing. Plus, ignite your creativity with our inspirational quote generator, offering a fresh dose of motivation with every click. Simplify, share, and stay inspired with our unique set of tools!
        </p>
        </div>
        </div>
        </>
    );
}

export default About;
