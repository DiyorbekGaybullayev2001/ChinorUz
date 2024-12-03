import React from "react";
import logo from '../navbar/logo.png'
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <footer id="footer" className="container m-auto p-[10px] h-[100%]">
           <span className="container m-auto h-[2px] bg-[#cccccc] block mt-[100px]"></span>

            

                <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  h-[70px] p-[10px]">

                    <div className="flex text-left italic  w-[250px] sm:w-[300px] m-auto p-[10px]">
                        <img className="w-[100px] sm:w-[120px] md:w-[140px]" src={logo} alt="logo" />
                        <p className=" text-[7px] sm:text-[10px] md:ml-[20px] m-[10px]">Производство плетенной мебели премиун класса в Ташкенте</p>
                    </div>


                    <div className="flex items-center text-center content-end m-auto">
                        <div className="p-[10px] text-center">
                            <p>Задайте вопрос, мы онлайн</p>
                            <div className="flex text-center m-auto">
                                <a href="https://www.whatsapp.com">
                                    <FaWhatsappSquare className="text-[#50c041] h-[30px] w-[30px] m-[5px] ml-[70px]"/>
                                </a>
                                <a href="https://t.me">
                                    <FaTelegram className="text-[#2691e9] h-[30px] w-[30px] m-[5px]"/>
                                </a>
                            </div>
                        </div>
                    </div>

                        <div className="p-[10px] m-auto">
                            <p>Звоните: 10:00 - 20:00</p>
                            <a className="font-bold md:text-[23px] text-[#94C11F]" href="tel:715000000">+998 71 500 00 00</a>
                        </div>

                </div>
            
            



        </footer>
    )
}

export default Footer;