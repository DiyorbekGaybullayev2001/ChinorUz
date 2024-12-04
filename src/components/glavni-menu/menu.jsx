import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import book from "../glavni-menu/book.png";
import img1 from "../glavni-menu/img1.png";
import img2 from "../glavni-menu/img2.png";
import img3 from "../glavni-menu/img3.png";

const MenuComponent = () => {
  return (
    <div id="menu" className="container mx-auto h-full p-4 pt-[120px]">
      {/* Section 1: Text and Download */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
        {/* Text Section */}
        <div>
          <div className="flex items-center">
            <span className="h-[2px] bg-gray-500 w-12 mr-2"></span>
            <p className="text-lg">Oт производителя</p>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif mt-4">
            <span className="text-[#94C11F]">Плетённая</span> мебель для
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif">
            вашего бизнеса
          </p>
          <p className="text-base mt-10">
            Представляем специальную коллекцию плетеной мебели для бизнеса –{" "}
            <span className="font-bold text-lg sm:text-xl">
              от элегантных стульев и столов для кафе и ресторанов до уютных
              уголков для отдыха и лаунж-зон.
            </span>
          </p>
          <div className="relative mt-12">
            <img
              className="absolute h-20 w-30 z-10"
              src={book}
              alt="Catalog Book"
            />
            <a href="#download">
              <button className="bg-[#94C11F] w-48 sm:w-64 h-20 rounded-xl text-white absolute -z-5 ml-16">
                СКАЧАТЬ КАТАЛОГ
                <p>более 200 видов мебели</p>
              </button>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex mt-[100px] md:mt-0">
          <div className="w-[100%] sm:w-[50%] overflow-hidden">
            <img className="mt-10" src={img1} alt="Furniture 1" />
          </div>
          <div className="flex flex-col ml-4">
            <img className="mb-4" src={img3} alt="Furniture 2" />
            <img
              className="h-36 sm:h-64 w-48 object-cover"
              src={img2}
              alt="Furniture 3"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Benefits */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
        {[
          "Гарантия от 3 лет на всю продукцию",
          "Доставка от 30.000 сум до двери",
          "Оплата по факту просмотра мебели",
        ].map((benefit, index) => (
          <div key={index} className="flex items-center mb-4">
            <FaCheckSquare className="text-green-600 h-8 w-8 mr-4" />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;














// import React from "react";
// import { FaCheckSquare } from "react-icons/fa";
// import book from '../glavni-menu/book.png'
// import img1 from '../glavni-menu/img1.png'
// import img2 from '../glavni-menu/img2.png'
// import img3 from '../glavni-menu/img3.png'

// const Menucompanent = () =>{
//     return (
//         <div className="container m-auto h-[100%] p-[10px]">

//             <div className="container m-auto pt-[50px] h-full grid">
//                         <div className="w-[45%] h-[100%] grid grid-cols-1 md:grid-cols-2">
//                                 <div className="flex items-center w-full">
//                                     <span className="h-[2px] bg-[#686868] block w-[50px] m-[10px]"></span>
//                                     <p className="text-[17px]">Oт производителя</p>
//                                 </div>
//                                     <p className="text-[25px] sm:text-[35px] md:text-[40px] m-[10px] font-serif w-full">
//                                         <span className="text-[#94C11F] w-full">Плетённая</span> мебель для
//                                     </p>
//                                     <p className="text-[25px] sm:text-[35px] md:text-[40px] m-[10px] font-serif w-full"> вашего бизнеса</p>
//                                     <p className="text-[18px] m-[10px] mt-[40px] w-full ">
//                                         Представляем специальную коллекцию плетеной мебели для бизнеса – 
//                                         <span className="font-bold text-[15px] sm:text-[20px]">от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон.</span>
//                                     </p>
//                                     <div className="relative m-[10px] mt-[50px]">
//                                         <img className="h-[80px] w-[120px] absolute z-10" src={book} alt="book" />
//                                         <a href="#download">
//                                             <button className="bg-[#94C11F] w-[250px] h-[80px] rounded-xl text-white absolute -z-5 ml-[70px]">СКАЧАТЬ КАТАЛОГ <p>более 200 видов мебели</p></button>
//                                         </a>
//                                     </div>
//                         </div>

//                             <div className="w-[55%] h-full flex"> 
//                                 <div className=" w-[500px]  overflow-hidden ">
//                                     <img className="overflow-hidden  mt-[40px] " src={img1} alt="" />
//                                 </div>
//                                 <div>
//                                     <img className="m-[10px] ml-[50px]  overflow-hidden" src={img3} alt="" />
//                                     <img className="h-[300px] m-[10px] w-[250px] ml-[20px] overflow-hidden" src={img2} alt="" />
//                                 </div>
//                             </div>
//                     </div>


//                     <div className="grid grid-cols-1 mt-[20px]">
//                         <div className="flex w-[250px] items-center m-[10px]">
//                             <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
//                             <p>Гарантия от 3 лет на всю продукцию</p>
//                         </div>
//                         <div className="flex w-[250px] items-center">
//                             <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
//                             <p>Доставка от 30.000 сум до двери</p>
//                         </div>
//                         <div className="flex w-[250px] items-center">
//                             <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
//                             <p>Оплата по факту просмотра мебели</p>
//                         </div>
//                     </div>

//         </div>
//     )
// }

// export default Menucompanent;