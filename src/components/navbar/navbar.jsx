import React, { useState } from "react";
import logo from '../navbar/logo.png';
import { FaTelegram, FaWhatsappSquare, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container m-auto flex items-center justify-between py-2 px-4 md:px-8 ">
                {/* Logo Section */}
                <div className="flex items-center w-[250px]">
                    <img className="h-8" src={logo} alt="Logo" />
                    <p className="hidden sm:block text-xs italic ml-4">
                        Производство плетенной мебели премиум класса в Ташкенте
                    </p>
                </div>

                {/* Contact Section */}
                <div className="hidden md:flex items-center space-x-6">
                    <div>
                        <p className="text-sm">Задайте вопрос, мы онлайн</p>
                        <div className="flex space-x-2">
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <FaWhatsappSquare className="text-[#50c041] h-6 w-6" />
                            </a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                                <FaTelegram className="text-[#2691e9] h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm">Звоните: 10:00 - 20:00</p>
                        <a
                            href="tel:715000000"
                            className="text-[#94C11F] font-bold text-lg"
                        >
                            +998 71 500 00 00
                        </a>
                    </div>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-gray-300 w-[85%] m-auto mb-3"></div>

            {/* Navigation Links */}
            <div
                className={`md:flex md:items-center md:justify-between bg-white md:static mb-3 absolute left-0 w-full md:w-auto transition-all duration-300 ${
                    isMenuOpen ? "top-[60px] opacity-100" : "top-[-400px] opacity-0"
                } md:opacity-100`}
            >
                <ul className="flex flex-col md:flex-row m-auto items-center space-y-4 md:space-y-0 md:space-x-14 py-2 md:py-0 px-4 md:px-0 ">
                    <li>
                        <NavLink

                            className="hover:text-[#94C11F] font-medium text-base"
                            to="/"
                        >
                            Главная
                        </NavLink>
                        
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#book"
                        >
                            Каталог
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#garanty"
                        >
                            Гарантии
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#product"
                        >
                            Продукты
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#about"
                        >
                            О компании
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#dastafka"
                        >
                            Доставка
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#works"
                        >
                            Производство
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-[#94C11F] font-medium text-base"
                            href="#footer"
                        >
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;




















// import React from "react";
// import logo from '../navbar/logo.png'
// import { FaTelegram } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";

// const Navbar = () => {
//     return(
//         <nav className="">

//             <div className="container m-auto h-[70px] flex justify-between">

//                 <div className="flex text-left italic items-center w-[300px]">
//                     <img className="" src={logo} alt="logo" />
//                     <p className="text-[10px] ml-[20px]">Производство плетенной мебели премиун класса в Ташкенте</p>
//                 </div>


//                 <div className="flex items-center text-center">
//                     <div className="p-[10px] text-center">
//                         <p>Задайте вопрос, мы онлайн</p>
//                         <div className="flex text-center">
//                             <a href="https://www.whatsapp.com">
//                                 <FaWhatsappSquare className="text-[#50c041] h-[30px] w-[30px] m-[5px] ml-[70px]"/>
//                             </a>
//                             <a href="https://t.me">
//                                 <FaTelegram className="text-[#2691e9] h-[30px] w-[30px] m-[5px]"/>
//                             </a>
//                         </div>
//                     </div>

//                     <div className="ml-[0px] p-[10px]">
//                         <p>Звоните: 10:00 - 20:00</p>
//                         <a className="font-bold text-[23px] text-[#94C11F]" href="tel:715000000">+998 71 500 00 00</a>
//                     </div>
//                 </div>
//             </div>

//             <span className="container m-auto h-[2px] bg-[#cccccc] block mt-[30px]"></span>

//             <div className="container m-auto pt-[20px]">
//                 <ul className="flex justify-between p-[20px]">
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold " href="/">Главная</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#book">Каталог</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#garanty">Гарантии</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#product">Продукты</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#about">О компании</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#dastafka">Доставка</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#works">Производство</a>
//                     </li>
//                     <li>
//                         <a className="hover:text-[#94C11F] font-semibold" href="#footer">Контакты</a>
//                     </li>
//                 </ul>
//             </div>


//         </nav>
//     )
// }

// export default Navbar;