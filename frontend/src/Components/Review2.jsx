import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Review2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
    return (
        <>
        <div className="pt-[2rem] ">

        
        <div data-aos="zoom-in-up" className="md:px-[5rem] md:pt-[8rem] pb-[2rem] flex justify-center text-center flex-col ">
                <p className="text-[2rem] md:text-[3.2rem] font-poppins font-extrabold h-[2.4rem] md:h-[3.8rem]">Hear it Straight Our {/* <span className='text-[2rem] md:text-[3.2rem] font-poppins font-extrabold text-[#4661EF] '>Our Community</span> */}</p>
                <p className="text-[2rem] md:text-[3.2rem] font-poppins font-extrabold text-[#4661EF] ">Community</p>  
        </div>
        <section class="text-gray-600 body-font bg-[#4661EF] bg-opacity-15">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class=" w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./icon.png"/>
          <p class="leading-relaxed">Streamline your URLs and ignite 
                    your day with our advanced link shortener 
                    and dynamic quote generator jicd jodo ojvfv jovf ovfvd d.</p>
          <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
          <p className="text-[#4661EF] font-bold">MAYANK UPPAL</p>
          {/* <p class="text-gray-500">Senior Product Designer</p> */}
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
      
        <div class="h-full text-center">
          <img alt="testimonial" class="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./icon4.png"/>
          <p class="leading-relaxed tracking-[0.1em] text-sm">Streamline your URLs and ignite 
                    your day with our advanced link shortener 
                    and dynamic quote generator jicd jodo ojvfv jovf ovfvd d.</p>
                    <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
                    <p className="text-[#4661EF] font-bold">MAYANK UPPAL</p>
          {/* <p class="text-gray-500">UI Develeoper</p> */}
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./icon2.png"/>
          <p class="leading-relaxed">Streamline your URLs and ignite 
                    your day with our advanced link shortener 
                    and dynamic quote generator jicd jodo ojvfv jovf ovfvd .</p>
                    <span class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"></span>
                    <p className="text-[#4661EF] font-bold">MAYANK UPPAL</p>
          {/* <p class="text-gray-500">CTO</p> */}
        </div>
      </div>
    </div>
  </div>
</section>

</div>
        </>

    );
}

export default Review2;
