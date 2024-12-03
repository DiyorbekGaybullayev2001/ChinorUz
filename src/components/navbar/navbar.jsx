import React from "react";
import logo from '../navbar/logo.png'
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Navbar = () => {
    return(
        <nav className="">

            <div className="container m-auto h-[70px] flex justify-between">

                <div className="flex text-left italic items-center w-[300px]">
                    <img className="" src={logo} alt="logo" />
                    <p className="text-[10px] ml-[20px]">Производство плетенной мебели премиун класса в Ташкенте</p>
                </div>


                <div className="flex items-center text-center">
                    <div className="p-[10px] text-center">
                        <p>Задайте вопрос, мы онлайн</p>
                        <div className="flex text-center">
                            <a href="https://www.whatsapp.com">
                                <FaWhatsappSquare className="text-[#50c041] h-[30px] w-[30px] m-[5px] ml-[70px]"/>
                            </a>
                            <a href="https://t.me">
                                <FaTelegram className="text-[#2691e9] h-[30px] w-[30px] m-[5px]"/>
                            </a>
                        </div>
                    </div>

                    <div className="ml-[0px] p-[10px]">
                        <p>Звоните: 10:00 - 20:00</p>
                        <a className="font-bold text-[23px] text-[#94C11F]" href="tel:715000000">+998 71 500 00 00</a>
                    </div>
                </div>
            </div>

            <span className="container m-auto h-[2px] bg-[#cccccc] block mt-[30px]"></span>

            <div className="container m-auto pt-[20px]">
                <ul className="flex justify-between p-[20px]">
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold " href="/">Главная</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#book">Каталог</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#garanty">Гарантии</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#product">Продукты</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#about">О компании</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#dastafka">Доставка</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#works">Производство</a>
                    </li>
                    <li>
                        <a className="hover:text-[#94C11F] font-semibold" href="#footer">Контакты</a>
                    </li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar;