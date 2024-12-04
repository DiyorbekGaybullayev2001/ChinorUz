// import React from "react";
import books from '../glavni-menu/book.png'
import pdf from '../pdfdownload/mebel.pdf'

import React from "react";

const DownlaodPdf = () => {
  return (
    <div id='book' className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center text-center p-[10px] pt-[100px]">
      <div id='download' className="text-center w-[100%] m-auto ">
        {/* Title */}
        <div>

        <h2 className="text-lg md:text-3xl font-bold mb-4">200+ проектов в фото каталоге</h2>
        <p className="text-gray-700 mb-6">Скачайте прямо сейчас</p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-3  items-center gap-3 p-[10px]">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#94C11F]"
          />
          {/* Phone Input */}
          <input
            type="number"
            placeholder="+998"
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#94C11F]"
          />
          {/* Submit Button */}
          <div className='w-full mt-[15px] m-auto text-center'>
            <a className='' href={pdf} download >
              <button className=' w-full sm:w-auto px-4 py-2 border bg-[#94C11F]  text-white font-semibold rounded-lg hover:bg-[#648b24]'>СКАЧАТЬ КАТАЛОГ </button>
            </a>
          </div>
        </div>
      </div>

      <div className='content-end flex justify-center w-full m-auto'>
        <img className='w-full' src={books} alt="book-pdf"/>
      </div>

    </div>
  );
};

export default DownlaodPdf;
