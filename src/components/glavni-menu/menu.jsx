import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import book from '../glavni-menu/book.png'
import img1 from '../glavni-menu/img1.png'
import img2 from '../glavni-menu/img2.png'
import img3 from '../glavni-menu/img3.png'

const Menucompanent = () =>{
    return (
        <div className="container m-auto h-[100%]">

            <div className="container m-auto pt-[50px] flex ">
                        <div className="w-[45%] h-[100%] flex">
                            <div >
                                <div className="flex items-center">
                                    <span className="h-[2px] bg-[#686868] block w-[50px] m-[10px]"></span>
                                    <p className="text-[20px]">Oт производителя</p>
                                </div>
                                    <p className="text-[40px] m-[10px] font-serif">
                                        <span className="text-[#94C11F]">Плетённая</span> мебель для
                                    </p>
                                    <p className="text-[40px] m-[10px] font-serif"> вашего бизнеса</p>
                                    <p className="text-[18px] m-[10px] mt-[40px]">
                                        Представляем специальную коллекцию плетеной мебели для бизнеса – 
                                        <span className="font-bold">от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон.</span>
                                    </p>
                                    <div className="relative m-[10px] mt-[50px]">
                                        <img className="h-[80px] w-[120px] absolute z-10" src={book} alt="book" />
                                        <a href="#download">
                                            <button className="bg-[#94C11F] w-[250px] h-[80px] rounded-xl text-white absolute -z-5 ml-[70px]">СКАЧАТЬ КАТАЛОГ <p>более 200 видов мебели</p></button>
                                        </a>
                                    </div>
                            </div>
                        </div>

                            <div className="w-[55%] h-full flex"> 
                                <div className=" w-[500px]  overflow-hidden ">
                                    <img className="overflow-hidden  mt-[40px] " src={img1} alt="" />
                                </div>
                                <div>
                                    <img className="m-[10px] ml-[50px]  overflow-hidden" src={img3} alt="" />
                                    <img className="h-[300px] m-[10px] w-[250px] ml-[20px] overflow-hidden" src={img2} alt="" />
                                </div>
                            </div>
                    </div>


                    <div className="flex mt-[20px]">
                        <div className="flex w-[250px] items-center m-[10px]">
                            <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
                            <p>Гарантия от 3 лет на всю продукцию</p>
                        </div>
                        <div className="flex w-[250px] items-center">
                            <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
                            <p>Доставка от 30.000 сум до двери</p>
                        </div>
                        <div className="flex w-[250px] items-center">
                            <FaCheckSquare className="h-[30px] w-[30px] m-[10px]"/>
                            <p>Оплата по факту просмотра мебели</p>
                        </div>
                    </div>

        </div>
    )
}

export default Menucompanent;