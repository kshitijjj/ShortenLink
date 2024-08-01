import React from 'react';

const ReviewCard = () => {
    return (
        <>
            {/* Main Div */}
            <div className="bg-[#E4E8FD] w-[31.25rem] h-[13.5rem] rounded-xl ">

                {/* image and name heading */}
                <div className="flex pl-[2.2rem] gap-6 pt-6 pb-4 ">
                <img src="./icon.png" alt="" className="w-[4.3rem] h-[4.3rem] rounded-full" />
                <p className="text-[#4661EF] font-extrabold pt-[1.5rem]">Mayank Uppal</p>
                </div>

                {/* Description div */}
                <div className="pb-[15rem] pl-[2.7rem]">
                    <p className="w-[23.1rem]">
                    Streamline your URLs and ignite 
                    your day with our advanced link shortener 
                    and dynamic quote generator.
                    </p>
                </div>  
            </div>
        </>
    );
}

export default ReviewCard;
