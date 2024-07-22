import React from 'react';

const Contact = () => {
    return (
        <>
        {/* Main Parent div */}
        <div className="py-[2.2rem] md:py-[2rem] ">

           {/*  Heading div */}
            <div className="justify-center text-center pt-[2rem] md:pt-[4.2rem]">
            <p className=" text-[2rem] md:text-[3.5rem] font-poppins font-extrabold h-[2.4rem] md:h-[3.5rem] ">Share Your <span className="text-[2rem] text-[#4661EF]  md:text-[3.5rem] font-poppins font-extrabold h-[2.4rem] md:h-[3.5rem] ">Thoughts</span> </p>
           
                <div className="justify-center text-center pt-[0.5rem] md:pt-[1.5rem] ">
                <p className=" text-sm md:text-lg md:leading-relaxed ">"Got feedback, questions, or ideas? </p>
                <p className=" text-sm md:text-lg ">We're here to listen and improve together!" </p>
                </div>
            </div>

            {/* Form div */}
            <form action="" className="flex flex-col pt-[3rem] pb-[6rem] justify-center items-center gap-12">

            {/* <div className="flex flex-col gap-3 "> */}
            {/* <a className= "text-sm bg-[#4661EF] md:text-lg w-[6.3rem] md:w-[7.3rem] px-[1.5rem] py-[0.52rem] bg-opacity-15 md:px-[2rem] md:py-[0.5rem] text-[#4661EF] font-bold rounded-[0.3em]" href="">Name</a> */}
            <input type="text" name="" placeholder="Enter your name" className="bg-[#4661EF] text-sm px-[1.5rem] py-[1rem] bg-opacity-15 text-center md:px-[12rem] text-[#4661EF] rounded-[0.3em]  md:py-[1rem]" id="" />
            {/* </div> */}

             {/* <div className="flex flex-col gap-3 "> */}
            {/* <a className= "text-sm bg-[#4661EF] md:text-lg w-[6.3rem] md:w-[7.3rem] px-[1.5rem] py-[0.52rem] bg-opacity-15 md:px-[2rem] md:py-[0.5rem] text-[#4661EF] font-bold rounded-[0.3em]" href="">Name</a> */}
            <input type="text" name="" placeholder="Enter your name" className="bg-[#4661EF] text-sm px-[1.5rem] py-[0.6rem] bg-opacity-15 text-center md:px-[12rem] text-[#4661EF] rounded-[0.3em]  md:py-[1rem]" id="" />
            {/* </div> */}

            {/* <div className="flex flex-col gap-3 "> */}
            {/* <a className= "text-sm bg-[#4661EF] md:text-lg w-[6.3rem] md:w-[7.3rem] px-[1.5rem] py-[0.52rem] bg-opacity-15 md:px-[2rem] md:py-[0.5rem] text-[#4661EF] font-bold rounded-[0.3em]" href="">Name</a> */}
            <input type="text" name="" placeholder="Enter your name" className="bg-[#4661EF] text-sm px-[1.5rem] py-[0.6rem] bg-opacity-15 text-center md:px-[12rem] text-[#4661EF] rounded-[0.3em]  md:py-[1rem]" id="" />
            {/* </div> */}

            
            <button type='submit' className="bg-[#4661EF] text-white px-[2.5rem] py-[0.8rem] md:px-[3.5rem] md:py-[1rem] rounded-[0.3em] font-bold" href="">Submit</button>
            </form>
            
        </div>
        </>
       
    );
}

export default Contact;
