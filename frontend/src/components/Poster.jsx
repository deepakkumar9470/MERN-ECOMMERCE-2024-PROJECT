import React from "react";

const Poster = () => {
  return (
    <div className="w-[100%] md:w-[95%]  h-[400px] flex justify-between bg-lightWhite items-center mx-auto  rounded-sm p-5">
       {/* Left side poster  start */}
      <div className="flex flex-col items-center justify-center  gap-2 pl-16 flex-1 text-center">
        <div className="flex flex-col space-y-2">
          <p className="text-3xl md:text-4xl font-extrabold text-[#19282F]">
            Grab Upto 50% Off On
          </p>
          <span className=" text-3xl md:text-4xl font-extrabold text-[#19282F]">
            Selected Products
          </span>
        </div>
        <button className="w-[150px] rounded-full px-5 py-2.5 overflow-hidden group bg-orange relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300">
          <span className="absolute right-0  -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative"> Buy Now</span>
        </button>
      </div>
       {/* Left side poster  end */}



        {/* Right side poster  start */}
      <div className="flex items-center justify-center flex-1 hidden md:block">
        <img
          className="max-w-[420px] mix-blend-darken object-contain"
          src="./girl.jpg"
          alt="poster-img"
        />
      </div>
          {/* Right side poster  end */}
    </div>
  
  );
};

export default Poster;
