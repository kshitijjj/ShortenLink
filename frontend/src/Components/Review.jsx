import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <>
        <div className="w-full">
            <div className="md:px-[5rem] md:pt-[6rem] pb-[2rem] ">
                <p className="text-[2rem] md:text-[3.2rem] font-poppins font-extrabold h-[2.4rem] md:h-[3.8rem]">Hear it Straight</p>
                <p className="text-[2rem] md:text-[3.2rem] font-poppins font-extrabold text-[#4661EF] ">Our Community</p>  
            </div>

            <div className="bg-[#4661EF] py-[4rem] pl-[0.5rem] flex gap-8"> 
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
        </>
    );
}

export default Review;
