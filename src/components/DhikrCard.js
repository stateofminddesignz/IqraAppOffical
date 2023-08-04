import React from "react";
import "../App.css";

const DhikrCard = ({ imageUrl, title, description }) => {
  return (
    //  <div className="">
    //   <div className="flex justify-center items-center group relative bg-green w-64 sm:w-72 rounded-3xl overflow-hidden m-6   ">
    //     <img
    //       src={imageUrl}
    //       alt={title}
    //       className="inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //     />

    //     <div className="relative p-4 sm:p-6 lg:p-8">
    //       <p className="text-lg font-bold text-white sm:text-xl">{title}</p>

    //       <div className="mt-16 sm:mt-24 lg:mt-32">
    //         <div className="translate-y-4 sm:translate-y-6 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    //           <p className="text-sm text-white">{description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>

    <div className="  mt-6  m-auto text-center ">
      <div className="max-w-[1240px]  md:m-2 m-auto rounded-lg md:w-[200px] w-[400px]  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  ">
        <div></div>

        <img
          className="rounded-xl object-cover w-60 h-60 m-auto py-2 md:py-0  "
          src={imageUrl}
          alt={title}
        />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs bg-black  font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default DhikrCard;
