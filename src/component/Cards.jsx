import React from "react";

const Cards = ({logoUrl,logoTitle,designation,pricePerHour,location,updatedAt}) => {
  return (
    <div className="max-w-80 h-75 flex flex-col justify-between p-4 bg-white text-black border rounded-2xl">
      <div className="top-elem">
        <div className="logo w-15 h-15 object-cover object-center border-2 rounded-full p-2 mb-2 overflow-hidden">
          <img
            className="w-full h-full "
            src={logoUrl}
            alt="Amazon logo"
          />
        </div>
        <button className="text-black">
          Save<i className="text-black ri-chat-download-line"></i>
        </button>
        <h4 className="text-lg font-medium flex gap-2 items-center">
          {logoTitle}
          <span className="text-gray-400 text-sm">{updatedAt}</span>
        </h4>
        <p>
          {designation}
        </p>
        <div className="links flex gap-2.5 items-center">
          <button className="border rounded bg-white p-1.5 cursor-pointer transition-all ease-in hover:bg-black hover:text-white active:scale-[0.97]">
            Part-Time
          </button>
          <button className="border rounded bg-white p-1.5 cursor-pointer transition-all ease-in hover:bg-black hover:text-white active:scale-[0.97]">
            Senior Level
          </button>
        </div>
      </div>
      <div className="bottom-elem flex items-center justify-between border-t border-gray-300 pt-1.5">
        <div className="pricing-sec">
          <h2 className="font-semibold">{pricePerHour}/hr</h2>
          <h4 className="text-gray-700">{location}</h4>
        </div>
        <button className="bg-black p-1.5 text-white rounded cursor-pointer active:scale-[0.97]">Apply
        </button>
      </div>
    </div>
  );
};

export default Cards;
