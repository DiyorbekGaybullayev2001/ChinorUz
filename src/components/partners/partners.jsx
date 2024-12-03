import React from 'react';

import partners1 from '../imgs/partners1.png'
import partners2 from '../imgs/partners2.png'
import partners3 from '../imgs/partners3.png'
import partners4 from '../imgs/partners4.png'
import partners5 from '../imgs/partners5.png'
import partners6 from '../imgs/partners6.png'
import partners7 from '../imgs/partners7.png'
import partners8 from '../imgs/partners8.png'
import partners9 from '../imgs/partners9.png'
import partners10 from '../imgs/partners10.png'
import partners11 from '../imgs/partners11.png'
import partners12 from '../imgs/partners12.png'
import partners13 from '../imgs/partners13.png'
import partners14 from '../imgs/partners14.png'
import partners15 from '../imgs/partners15.png'
import partners16 from '../imgs/partners16.png'
import partners17 from '../imgs/partners17.png'
import partners18 from '../imgs/partners18.png'
import partners19 from '../imgs/partners19.png'
import partners20 from '../imgs/partners20.png'
import partners21 from '../imgs/partners21.png'

const partners = [
    { image: partners1 },
    { image: partners2 },
    { image: partners3 },
    { image: partners4 },
    { image: partners5 },
    { image: partners6 },
    { image: partners7 },
    { image: partners8 },
    { image: partners9 },
    { image: partners10 },
    { image: partners11 },
    { image: partners12 },
    { image: partners13 },
    { image: partners14 },
    { image: partners15 },
    { image: partners16 },
    { image: partners17 },
    { image: partners18 },
    { image: partners19 },
    { image: partners20 },
    { image: partners21 }
  ];


const Partners = () => {
  return (
    <div className='container m-auto pt-[70px]'>

        <div className="  py-10 px-4 md:px-20">
        <div className="text-center">
            <p className="text-gray-800 text-sm md:text-2xl font-serif">
            За 16 лет более 50 партнеров
            </p>
        </div>
        <div className="text-left">
            <p className="text-gray-500 text-sm md:text-base">2008</p>
        </div>
        <div className="flex-1 border-t border-dotted border-gray-400 mx-4"></div>
        
        <div className="flex-1 border-t border-dotted border-gray-400 mx-4"></div>
        <div className="text-right">
            <p className="text-gray-500 text-sm md:text-base font-bold">2024</p>
        </div>
        </div>

        <div className=" py-5 px-4 container m-auto p-[20px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <img
              src={partner.image}
            //   alt={logo.alt}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Partners;




