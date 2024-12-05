import React, { useState } from "react";
import logo from '../navbar/logo.png'

const SendQuestion = () => {

    const [aktiv, setaktiv] = useState(false)

    const toggleAktiv = () => {
        setaktiv(!aktiv);
    };

    return (
        <div className="container m-auto pt-[70px]">
            


            {
                !aktiv ? 
                <div className="m-auto text-center">
                    <h2 className="m-[10px] text-[25px] sm:text-[32px] md:text-[40px] font-serif">Остались вопросы? </h2>
                    <button onClick={toggleAktiv} className="bg-[#94C11F] rounded-lg px-[35px] py-[20px] hover:bg-[#93c11fd2] m-[10px] text-[20px] text-white">ЗАДАТЬ ВОПРОС</button>
                </div>
                : <div className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8 container">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    {/* Header */}
                    <div className="text-center mb-6">
                    <img
                        src={logo} // O'zingizning logotip URL'ingizni kiriting
                        alt="Logo"
                        className="  sm:h-20 mx-auto"
                    />
                    <h1 className="md:text-4xl font-serif font-semibold mt-4 text-gray-800">
                        Задайте свой вопрос
                    </h1>
                    <p className="text-gray-600 mt-2 text-xs sm:text-base">
                        Оставьте свой вопрос и информацию, и наши специалисты свяжутся с вами
                    </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                    {/* Имя */}
                    <div>
                        <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Ваше имя
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите ваше имя"
                        />
                    </div>

                    {/* Телефон */}
                    <div>
                        <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Номер телефона
                        </label>
                        <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                            +998
                        </span>
                        <input
                            type="number"
                            id="phone"
                            className="mt-1 block w-full pl-12 border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Введите ваш номер"
                        />
                        </div>
                    </div>

                    {/* Вопрос */}
                    <div>
                        <label
                        htmlFor="question"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Ваш вопрос
                        </label>
                        <textarea
                        id="question"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите ваш вопрос"
                        ></textarea>
                    </div>

                    {/* Кнопка отправки */}
                    <button
                        // type="submit"    
                        className="w-full bg-[#94C11F] text-white py-2 px-4 rounded-md hover:bg-[#93c11fcc] transition duration-300"
                    >
                        отправить вопрос
                    </button>
                    </form>

                    {/* Footer */}
                    <p className="text-sm text-center text-gray-500 mt-4">
                    Ваши данные не будут переданы третьим лицам
                    </p>
                </div>
              </div>
            }

        </div>
    )
}

export default SendQuestion;