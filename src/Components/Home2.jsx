import React from 'react';
import Feature from './Feature';
import About from './About';
import Review from './Review';
import Contact from './Contact';
import Review2 from './Review2';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home2 = (props) => {

    
    return (
        <>
        <Navbar btntext="Features"/>

        <div className="flex flex-col-reverse items-center justify-center py-[2rem] md:flex-row md:justify-evenly">

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
                <div className="pt-[2.4rem] justify-center md:justify-start text-center flex gap-7 md:pt-[2.6rem] md:flex md:gap-14">
                    <Link className="bg-[#4661EF] text-white px-[2.5rem] py-[0.8rem] md:px-[3.5rem] md:py-[1rem] rounded-[0.3em] font-bold" to="/signup">discover</Link>
                </div>
            </div>

            {/* Full image div */}
            <div>
                <img className="w-[23rem] pt-[2.4rem] md:w-[40.6rem] md:pt-[2.6rem]"  src="./png1.png" alt=""   />
            </div>
        </div>
        
        {/* <Feature/> */}
        <About/>
        <Review2/>
        <Contact/>
       
        </>
    );
}

export default Home2;
