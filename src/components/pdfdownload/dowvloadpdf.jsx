// import React from "react";
import books from '../glavni-menu/book.png'
import pdf from '../pdfdownload/mebel.pdf'

import React from "react";

const DownlaodPdf = () => {
  return (
    <div id='download' className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="text-center w-[50%] m-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">200+ проектов в фото каталоге</h2>
        <p className="text-gray-700 mb-6">Скачайте прямо сейчас</p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
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
          <div className=''>
            <a href={pdf} download >
              <button className=' w-[250px]   px-4 py-3 border bg-[#94C11F]  text-white font-semibold rounded-lg hover:bg-[#648b24] ml-[10px]'>СКАЧАТЬ КАТАЛОГ </button>
            </a>
          </div>
        </div>
      </div>

      <div className=''>
        <img className='h-[300px] w-[400px] m-auto' src={books} alt="book-pdf" />
      </div>

    </div>
  );
};

export default DownlaodPdf;
